using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class SalesDetail
    {
        public Guid id {get;set;} = Guid.NewGuid();
        public Guid productId {get;set;}
        public Guid saleId {get;set;}
        public float stock {get;set;}
        public virtual Product product {get;set;}
        public virtual Sale sale {get;set;}
        
    }
}