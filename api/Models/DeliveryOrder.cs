using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class DeliveryOrder
    {
        public Guid id { get; set; } = Guid.NewGuid();
        public Guid saleId { get; set; }
        public Guid employeeId { get; set; }
        public DateTime purchaseDate {get;set;} = DateTime.Now;
        public virtual Sale sale {get;set;}
        public virtual Employee employee {get;set;}
    }
}