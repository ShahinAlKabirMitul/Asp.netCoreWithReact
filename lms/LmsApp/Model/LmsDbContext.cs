using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Model
{
   public class LmsDbContext : DbContext
    {
        public LmsDbContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Course>().HasIndex(s => s.Name);
            modelBuilder.Entity<Course>().HasIndex(s => s.Topic);
            modelBuilder.Entity<Course>().HasIndex(s => s.IsFree);

            modelBuilder.Entity<Teacher>().HasIndex(s => s.Name);


        }
    }
}
