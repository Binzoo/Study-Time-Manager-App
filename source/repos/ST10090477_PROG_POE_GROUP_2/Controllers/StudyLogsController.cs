using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ST10090477_PROG_POE_GROUP_2.Data;
using TimeManagementLibary.Models;

namespace ST10090477_PROG_POE_GROUP_2.Controllers
{
    public class StudyLogsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private  string clickeModuleName;
        private  string clickedModuleCode;
        public StudyLogsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: StudyLogs/Create
        public IActionResult Create(string modulecode, string moduleName)
        {
            this.clickedModuleCode = modulecode;
            this.clickeModuleName = moduleName;
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "Password");
            return View();
        }

        // POST: StudyLogs/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("StudyLogId,NumberOfHours,ModuleCode,SelfStudyDate,UserId")] StudyLog studyLog)
        {
            var moduleToUpdate = await _context.Modules
                                      .FirstOrDefaultAsync(m => m.UserId == UsersController.mainUserId && m.ModuleCode == studyLog.ModuleCode);

            moduleToUpdate.RemainingSelfStudyHour = moduleToUpdate.RemainingSelfStudyHour - studyLog.NumberOfHours;

            studyLog.UserId = UsersController.mainUserId;


            if (studyLog.NumberOfHours > 0 && studyLog.SelfStudyDate != null)
            {
                _context.Add(studyLog);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["UserId"] = new SelectList(_context.Users, "UserId", "Password", studyLog.UserId);
            return View(studyLog);
        }

        private bool StudyLogExists(int id)
        {
          return (_context.StudyLogs?.Any(e => e.StudyLogId == id)).GetValueOrDefault();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult ShowGraph()
        {
            
            return View();
        }
    }
}
