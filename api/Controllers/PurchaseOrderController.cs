using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseOrderController : ControllerBase
    {
        private readonly ApiContext _context;
        public PurchaseOrderController(ApiContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PurchaseOrder>>> GetPurchaseOrder()
        {
            return await _context.purchaseOrders.Include(p => p.purchaseDetails).ToListAsync();
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public async Task PostAsync([FromBody] PurchaseOrder value)
        {
            value.id = Guid.NewGuid();
            value.orderDate = DateTime.Now;
            _context.purchaseOrders.Add(value);
            await _context.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<PurchaseOrder>> DeletePurchaseOrder(Guid id)
        {
            var purchaseOrder = await _context.purchaseOrders.FindAsync(id);
            if (purchaseOrder == null)
            {
                return NotFound();
            }
            
            List<PurchaseDetail> purchaseDetails = await _context.purchaseDetails.Include(p => p.product).Where(p => p.purchaseOrderId == purchaseOrder.id).ToListAsync();
            // List<Product> products = new List<Product>();
            for (int i = 0; i < purchaseDetails.Count; i++)
            {
                Product product = purchaseDetails[i].product;
                product.stock = purchaseDetails[i].stock;

                product.id = Guid.NewGuid();
                _context.products.Add(product);
                await _context.SaveChangesAsync();
            }
            

            _context.purchaseOrders.Remove(purchaseOrder);
            await _context.SaveChangesAsync();

            return purchaseOrder;
        }
    }
}