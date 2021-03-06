using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class PurchaseDetail
    {
        public Guid id {get;set;} = Guid.NewGuid();
        public Guid productId {get;set;}
        public Guid purchaseOrderId {get;set;}
        public int stock {get;set;}
        public virtual Product product {get;set;}
        public virtual PurchaseOrder purchaseOrder {get;set;}

    }
}