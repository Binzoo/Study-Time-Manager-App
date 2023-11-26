using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace TimeManagementLibary.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public string Salt { get; set; }

        // Navigation properties
        public ICollection<StudyLog> StudyLogs { get; set; } = new HashSet<StudyLog>();
        public ICollection<Semester> Semesters { get; set; } = new HashSet<Semester>();
        public ICollection<Module> Modules { get; set; } = new HashSet<Module>();
    }

}
