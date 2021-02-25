using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Sale
    {
        public Guid id { get; set; } = Guid.NewGuid();
        public Guid clientId {get;set;}
        public DateTime saleDate {get;set;} = DateTime.Now;
        public float deliveryCharge {get;set;} = 0;
        public float totalPrice {get;set;}
        public virtual List<SalesDetail> salesDetails {get;set;}
        public virtual Client client {get;set;}
        public virtual DeliveryOrder deliveryOrder {get;set;}//1 1

    }
}