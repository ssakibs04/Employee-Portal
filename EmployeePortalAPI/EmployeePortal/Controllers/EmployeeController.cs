﻿using EmployeePortal.Models;
using EmployeePortal.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeePortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeRepository emp;
        public EmployeeController(EmployeeRepository employeeRepository)
        {
            this.emp = employeeRepository;
        }
        [HttpGet]
        public async Task<ActionResult> EmployeeList()
        {
            var allEmployees = await emp.GetAllEmployees();
            return Ok(allEmployees);
        }
        [HttpPost]
        public async Task<ActionResult> AddEmployee(Employee employee)
        {
            await emp.SaveEmployee(employee);
            return Ok(employee);
        }
           
    }
}
