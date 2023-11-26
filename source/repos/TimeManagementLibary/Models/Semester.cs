using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeManagementLibary.Models
{
    public class Semester
    {
        [Key]
        public int SemesterId { get; set; }

        public int NumberOfWeeksInSemester { get; set; }
        public DateTime StartDateOfSemester { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        // Navigation property
        public User User { get; set; }
    }


}
