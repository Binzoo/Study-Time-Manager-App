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
    public class ModulesController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ModulesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Modules
        public async Task<IActionResult> Index()
        {
            var applicationDbContext = _context.Modules
                                        .Include(m => m.User)
                                        .Where(m => m.User.UserId == UsersController.mainUserId);
            return View(await applicationDbContext.ToListAsync());
        }

        // GET: Modules/Create
        public IActionResult Create()
        {
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "Password");
            return View();
        }

        // POST: Modules/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ModuleCode,ModuleName,NumberCredits,ClassHoursPerWeek")] Module @module)
        {
            int nOW = Convert.ToInt32(_context.Semesters
                        .Where(s => s.UserId == UsersController.mainUserId)
                        .Select(s => s.NumberOfWeeksInSemester)
                        .FirstOrDefault());

            int sSR = Convert.ToInt32((module.NumberCredits * 10 / nOW) - module.ClassHoursPerWeek);
            @module.SelfStudyRequired = sSR;
            @module.RemainingSelfStudyHour = sSR;
            @module.UserId = UsersController.mainUserId;
            bool exist = _context.Modules.Any(m => m.ModuleCode == module.ModuleCode && m.UserId == module.UserId);
            if (!exist)
            {
                _context.Add(@module);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            else
            {
                ViewData["ErrorMessage"] = "Module already exists";
            }
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "Password", @module.UserId);
            return View(@module);
        }

        private bool ModuleExists(int id)
        {
          return (_context.Modules?.Any(e => e.ModuleId == id)).GetValueOrDefault();
        }
    }
}
