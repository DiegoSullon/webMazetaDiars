using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ApiContext _context;
        public EmployeeController(ApiContext context)
        {
            _context = context;
        }
        [HttpGet]
        // public ActionResult<IEnumerable<string>> Get()
        // {
        //     return Ok(_context.employees.ToList());
        // }
        public async Task<ActionResult<IEnumerable<Employee>>> GetAuthors()
        {
            //await Task.Delay(3000);
            return await _context.employees.Include(p => p.role).ToListAsync();
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}