using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class DamagedProduct
    {
        public Guid id {get;set;} = Guid.NewGuid();
        public Guid productId {get;set;}
        public int stock {get;set;}
        public virtual Product product {get;set;}
    }
}