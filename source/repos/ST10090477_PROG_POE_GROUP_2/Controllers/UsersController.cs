using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TimeManagementLibary.Models;
using ST10090477_PROG_POE_GROUP_2.Data;
using Microsoft.AspNetCore.Cryptography.KeyDerivation; // For password hashing
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;

namespace ST10090477_PROG_POE_GROUP_2.Controllers
{
    public class UsersController : Controller
    {
        public static int mainUserId;
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Users/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Username,Password")] User user)
        {
            await Console.Out.WriteLineAsync(user.Password);
            if (user.Username != null && user.Password != null)
            {
                // Generate a salt
                byte[] salt = new byte[128 / 8];
                using (var rng = RandomNumberGenerator.Create())
                {
                    rng.GetBytes(salt);
                }
                user.Salt = Convert.ToBase64String(salt);

                // Hash the password
                user.Password = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                    password: user.Password,
                    salt: salt,
                    prf: KeyDerivationPrf.HMACSHA256,
                    iterationCount: 10000,
                    numBytesRequested: 256 / 8));

                _context.Add(user);
                await _context.SaveChangesAsync();
                return RedirectToAction("Login"); // Ensure Index action exists
            }
            return View(user);
        }

        public IActionResult Login()
        {
            return View();
        }

        // POST: Users/Login
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(string username, string password)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == username);
            mainUserId = user.UserId;
            if (user != null)
            {
                // Hash the input password with the user's salt
                var hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                    password: password,
                    salt: Convert.FromBase64String(user.Salt),
                    prf: KeyDerivationPrf.HMACSHA256,
                    iterationCount: 10000,
                    numBytesRequested: 256 / 8));

                if (hashedPassword == user.Password)
                {
                    bool exist = _context.Semesters.Any(s => s.UserId == mainUserId);
                    if (exist)
                    {
                        return RedirectToAction("Index", "Modules");
                    }
                    else
                    {
                        return RedirectToAction("Create", "Semesters"); // Redirect to the home page or dashboard
                    }
                   
                    
                }
            }

            // If we got this far, something failed, redisplay the form with an error message
            ModelState.AddModelError("", "Invalid login attempt.");
            return View();
        }

    }
}
