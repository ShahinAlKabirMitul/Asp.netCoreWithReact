using System.ComponentModel.DataAnnotations.Schema;
using Common.Model;

namespace Model
{
    using System.ComponentModel.DataAnnotations.Schema;

    public class Teacher : Entity
    {
        public string Name { get; set; }

        public string Phone { get; set; }

        public string Courses { get; set; }

        public int TotalCredit { get; set; }

     
    }
}
