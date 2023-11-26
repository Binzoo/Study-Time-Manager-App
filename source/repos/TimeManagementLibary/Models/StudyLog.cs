using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeManagementLibary.Models
{
    public class StudyLog
    {
        [Key]
        public int StudyLogId { get; set; }

        public double NumberOfHours { get; set; }
        public string ModuleCode { get; set; }
        public DateTime SelfStudyDate { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        // Navigation property
        public User User { get; set; }
    }

}
