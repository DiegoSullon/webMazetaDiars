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
    public class ProductController : ControllerBase
    {
        private readonly ApiContext _context;
        public ProductController(ApiContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct()
        {
            return await _context.products.Include(p => p.purchaseDetails).Include(p => p.salesDetails).Include(p => p.damagedProducts).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            var product = await _context.products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return product;
        }
        [HttpGet("GetBrand/{id}")]
        public async Task<ActionResult<String>> GetBrand(Guid id)
        {
            var product = await _context.products.FindAsync(id);
            PurchaseDetail purchaseDetail =  _context.purchaseDetails.Where(p => p.productId == product.id).First();
            PurchaseOrder purchaseOrder = await _context.purchaseOrders.FindAsync(purchaseDetail.purchaseOrderId);
            Provider provider = await _context.providers.FindAsync(purchaseOrder.providerId);
            if (product == null)
            {
                return NotFound();
            }
            try
            {
                return provider.name;
            }
            catch (System.Exception)
            {
                
                return NotFound();
            }
            
        }
        
        // [HttpPost("InsertProduct")]
        // public async Task<ActionResult<Product>> PostAuthor(Product product)
        // {
        //     _context.products.Add(product);
        //     await _context.SaveChangesAsync();

        //     return CreatedAtAction("Get", new { id = product.id }, product);
        // }
        [HttpPost]
        public async Task PostAsync([FromBody] Product value)
        {
            value.id = Guid.NewGuid();
            _context.products.Add(value);
            await _context.SaveChangesAsync();
        }
        // DELETE: api/Product/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteProduct(Guid id)
        {
            var product = await _context.products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.products.Remove(product);
            await _context.SaveChangesAsync();

            return product;
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        
    }
}