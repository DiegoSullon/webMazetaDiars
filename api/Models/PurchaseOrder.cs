using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class PurchaseOrder
    {
        public Guid id { get; set; } = Guid.NewGuid();
        public Guid providerId {get;set;}
        public DateTime orderDate {get;set;} = DateTime.Now;
        public DateTime deliveryDate {get;set;}
        public float totalPrice {get;set;} 
        public virtual List<PurchaseDetail> purchaseDetails { get; set; }
        public virtual Provider provider {get;set;}
        public virtual Purchase purchase {get;set;} // 1 1
    }
}