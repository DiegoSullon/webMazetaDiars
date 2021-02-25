using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Purchase
    {
        public Guid id { get; set; } = Guid.NewGuid();
        public Guid purchaseOrderId { get; set; }
        public DateTime purchaseDate {get;set;} = DateTime.Now;
        public virtual PurchaseOrder purchaseOrder {get;set;}
        
    }
}