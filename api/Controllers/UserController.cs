using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ApiContext _context;
        public UserController(IConfiguration configuration, ApiContext context)
        {
            _configuration = configuration;
            _context = context;
        }
        // [Authorize]
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

        //api/employee/login?dni=a&password=b
        [HttpGet("login")]
        public async Task<ActionResult<Login>> GetProduct(string dni, string password)
        {
            try
            {
                var _employee = await _context.employees.Include(p => p.role).FirstAsync(p => p.dni == dni && p.password == password);
                // var _client = await _context.clients.FirstAsync(p => p.dni == dni && p.password == password);
                if (_employee == null)
                {
                    return NotFound();
                }
                Login login = new Login
                {
                    id = _employee.id,
                    roleId = _employee.roleId,
                    dni = _employee.dni,
                    ruc = null,
                    email = _employee.email,
                    password = _employee.password,
                    address = null,
                    name = _employee.name,
                    surname = _employee.surname,
                    role=_employee.role,
                    telephone = _employee.telephone
                };
                login.token = RequestToken(login);

                return login;
            }
            catch (System.Exception)
            {
                try
                {
                    var _client = await _context.clients.Include(p => p.role).FirstAsync(p => p.dni == dni && p.password == password);
                    if (_client == null)
                    {
                        return NotFound();
                    }
                    Login login = new Login
                    {
                        id = _client.id,
                        roleId = _client.roleId,
                        dni = _client.dni,
                        ruc = _client.ruc,
                        email = _client.email,
                        password = _client.password,
                        address = _client.address,
                        name = _client.name,
                        surname = _client.surname,
                        role=_client.role,
                        telephone = _client.telephone
                    };
                    login.token = RequestToken(login);
                    return login;
                }
                catch (System.Exception)
                {
                    return NotFound();
                }
            }
        }
        [HttpGet("RequestToken")]
        public JsonResult RequestToken(Login login)
        {
            DateTime utcNow = DateTime.UtcNow;

            List<Claim> claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, login.role.name.ToString()),
                new Claim(JwtRegisteredClaimNames.Iss, login.id.ToString()),
                new Claim(JwtRegisteredClaimNames.GivenName, login.name.ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, utcNow.ToString())
            };

            DateTime expiredDateTime = utcNow.AddMinutes(1);

            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();

            //Key + credentials
            var key = Encoding.ASCII.GetBytes(_configuration.GetValue<string>("SecretKey"));
            SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(key);
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            string token = jwtSecurityTokenHandler.WriteToken(new JwtSecurityToken(claims: claims, expires: expiredDateTime, notBefore: utcNow, signingCredentials: signingCredentials));

            return new JsonResult(new { token });
        }

        [HttpPost]
        public async Task PostAsync([FromBody] Employee value)
        {
            value.id = Guid.NewGuid();
            value.roleId = 1; //default user role
            _context.employees.Add(value);
            await _context.SaveChangesAsync();
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