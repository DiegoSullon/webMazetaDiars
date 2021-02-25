using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Provider
    {
        public Guid id { get; set; } = Guid.NewGuid();
        public string name {get;set;}
        public string telephone {get;set;}
        public string email {get;set;}
        public string ruc {get;set;}
        public virtual List<PurchaseOrder> purchaseOrders {get;set;}
    }
}