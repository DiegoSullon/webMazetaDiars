using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Product
    {
        public Guid id {get; set;} = Guid.NewGuid();
        public string name {get;set;}  
        public string image {get;set;}  
        public string description {get;set;}
        public string label {get;set;}
        public int stock {get;set;}
        public int stockMin {get;set;}
        public int stockMax {get;set;}
        public float price {get;set;}
        public virtual List<PurchaseDetail> purchaseDetails {get;set;}
        public virtual List<DamagedProduct> damagedProducts {get;set;}
        public virtual List<SalesDetail> salesDetails {get;set;}
        

    }
}