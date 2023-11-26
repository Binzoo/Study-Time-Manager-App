
using Microsoft.EntityFrameworkCore;
using TimeManagementLibary.Models;

namespace ST10090477_PROG_POE_GROUP_2.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Module> Modules {get; set;}
        public DbSet<Semester> Semesters { get; set; }
        public DbSet<StudyLog> StudyLogs { get; set; }
        public DbSet<User> Users { get; set; }
    }

}
