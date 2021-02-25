using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Role
    {
        public int id {get;set;}
        public string name {get;set;}
        public string description {get;set;}
        public virtual List<Employee> employees { get; set; }
        public virtual List<Client> clients { get; set; }
    }
}