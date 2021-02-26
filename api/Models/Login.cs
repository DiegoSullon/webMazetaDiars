using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Models
{
    public class Login
    {
        public Guid id { get; set; }
        public int roleId { get; set; }
        public string dni { get; set; }
        public string ruc { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string address { get; set; }
        public string surname { get; set; }
        public string name { get; set; }
        public string telephone{ get; set; }
        public virtual Role role { get; set; }
        public JsonResult token {get;set;}
    }
}