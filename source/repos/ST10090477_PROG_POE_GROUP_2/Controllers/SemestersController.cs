using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ST10090477_PROG_POE_GROUP_2.Data;
using TimeManagementLibary.Models;

namespace ST10090477_PROG_POE_GROUP_2.Controllers
{
    public class SemestersController : Controller
    {
        private readonly ApplicationDbContext _context;


        public SemestersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Semesters
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.Semesters.Include(s => s.User);
            return View(await applicationDbContext.ToListAsync());
        }

       

        // GET: Semesters/Create
        public IActionResult Create()
        {
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "Password");
            return View();
        }

        // POST: Semesters/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("SemesterId,NumberOfWeeksInSemester,StartDateOfSemester,UserId")] Semester semester)
        {
            if (semester.NumberOfWeeksInSemester > 0 && semester.StartDateOfSemester != null)
            {
                semester.UserId = UsersController.mainUserId;
                _context.Add(semester);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index","Modules");
            }
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "Password", semester.UserId);
            return View(semester);
        }


        private bool SemesterExists(int id)
        {
          return (_context.Semesters?.Any(e => e.SemesterId == id)).GetValueOrDefault();
        }
    }
}
