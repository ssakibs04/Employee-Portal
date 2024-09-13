using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeePortal.Models
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int ID { get; set; }

        public required string Name { get; set; }

        public required string Email {  get; set; }  

        public string? Mobile {  get; set; }

        public int Age { get; set; }

        public int Salary { get; set; }

        public bool Status { get; set; }
    }
}
