using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace TimeManagementLibary.Models
{
    public class Module
    {
        [Key]
        public int ModuleId { get; set; }

        public string ModuleCode { get; set; }
        public string ModuleName { get; set; }
        public int NumberCredits { get; set; }
        public double ClassHoursPerWeek { get; set; }
        public double SelfStudyRequired {get; set;}
        public double RemainingSelfStudyHour { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        // Navigation property
        public User User { get; set; }
    }

}
