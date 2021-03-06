using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Client
    {
        public Guid id { get; set; } = Guid.NewGuid();
        public int roleId { get; set; }
        public string dni { get; set; }
        public string ruc { get; set; }
        public string email { get; set; }
        public string address { get; set; }
        public string password { get; set; }
        public string surname { get; set; }
        public string surname2 { get; set; }
        public string name { get; set; }
        public string telephone{ get; set; }
        public virtual Role role { get; set; }
        public virtual List<Sale> sales {get;set;}
    }
}