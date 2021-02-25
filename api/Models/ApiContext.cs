using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public partial class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }
        public virtual DbSet<Role> roles { get; set; }
        public virtual DbSet<Employee> employees { get; set; }
        public virtual DbSet<Client> clients { get; set; }
        public virtual DbSet<Sale> sales { get; set; }
        public virtual DbSet<DeliveryOrder> deliveryOrders { get; set; }
        public virtual DbSet<Provider> providers { get; set; }
        public virtual DbSet<PurchaseOrder> purchaseOrders { get; set; }
        public virtual DbSet<Purchase> purchases { get; set; }
        public virtual DbSet<Product> products { get; set; }
        public virtual DbSet<DamagedProduct> damagedProducts { get; set; }
        public virtual DbSet<SalesDetail> salesDetails { get; set; }
        public virtual DbSet<PurchaseDetail> purchaseDetails { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Name=WebMazetaDiars");
            }
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Role>(entity =>
            {
                entity.HasKey(e => e.id)
                    .HasName("role_pk");

                entity.ToTable("role");
                entity.Property(e => e.id).HasColumnName("id").IsRequired();
                entity.Property(e => e.name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.description)
                    .HasColumnName("description")
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });
            builder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.id).HasName("employee_pk");
                entity.ToTable("employee");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();

                entity.Property(e => e.roleId)
                    .IsRequired()
                    .HasColumnName("roleId");
                entity.Property(e => e.dni)
                    .IsRequired()
                    .HasColumnName("dni")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.surname)
                    .IsRequired()
                    .HasColumnName("surname")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.surname2)
                    .HasColumnName("surname2")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.telephone)
                    .HasColumnName("telephone")
                    .HasMaxLength(30)
                    .IsFixedLength()
                    .HasDefaultValueSql("('UNKNOWN')");
                entity.HasOne(d => d.role)
                    .WithMany(e => e.employees)
                    .HasForeignKey(d => d.roleId)
                    .HasConstraintName("employee_fk1");
            });
            builder.Entity<Client>(entity =>
            {
                entity.HasKey(e => e.id).HasName("client_pk");
                entity.ToTable("client");
                entity.Property(e => e.id).HasColumnName("id").IsRequired();
                entity.Property(e => e.roleId).HasColumnName("roleId").IsRequired();
                entity.Property(e => e.dni)
                    .HasColumnName("dni")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.ruc)
                    .HasColumnName("ruc")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.address)
                    .HasColumnName("address")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.surname)
                    .IsRequired()
                    .HasColumnName("surname")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.surname2)
                    .HasColumnName("surname2")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.telephone)
                    .IsRequired()
                    .HasColumnName("telephone")
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .IsFixedLength()
                    .HasDefaultValueSql("('UNKNOWN')");
                entity.HasOne(d => d.role)
                    .WithMany(e => e.clients)
                    .HasForeignKey(d => d.roleId)
                    .HasConstraintName("client_fk1");
            });
            builder.Entity<Sale>(entity =>
            {
                entity.HasKey(e => e.id)
                    .HasName("sale_pk");

                entity.ToTable("sale");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();
                entity.Property(e => e.clientId).HasColumnName("clientId").IsRequired();
                entity.Property(e => e.saleDate)
                    .IsRequired()
                    .HasColumnName("saleDate")
                    .HasColumnType("datetime2(7)");
                entity.Property(e => e.deliveryCharge)
                    .IsRequired()
                    .HasColumnName("deliveryCharge");
                entity.Property(e => e.totalPrice)
                    .IsRequired()
                    .HasColumnName("totalPrice")
                    .HasColumnType("float");
                entity.HasOne(d => d.client)
                   .WithMany(e => e.sales)
                   .HasForeignKey(d => d.clientId)
                   .HasConstraintName("sale_fk");
            });
            builder.Entity<DeliveryOrder>(entity =>
            {
                entity.HasKey(e => e.id).HasName("deliveryOrder_pk");

                entity.ToTable("deliveryOrder");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();

                entity.Property(e => e.saleId).HasColumnName("saleId").IsRequired();

                entity.Property(e => e.employeeId).HasColumnName("employeeId").IsRequired();

                entity.Property(e => e.purchaseDate)
                    .HasColumnName("purchaseDate")
                    .HasColumnType("datetime2(7)");
                entity.HasOne(d => d.sale)
                    .WithOne(p => p.deliveryOrder)
                    .HasForeignKey<DeliveryOrder>(d => d.saleId)
                    .HasConstraintName("deliveryOrder_fk1");
                entity.HasOne(d => d.employee)
                    .WithOne(p => p.deliveryOrder)
                    .HasForeignKey<DeliveryOrder>(d => d.employeeId)
                    .HasConstraintName("deliveryOrder_fk2");
            });
            builder.Entity<Provider>(entity =>
            {
                entity.HasKey(e => e.id).HasName("provider_pk");

                entity.ToTable("provider");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();

                entity.Property(e => e.name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.telephone)
                   .IsRequired()
                   .HasColumnName("telephone")
                   .HasMaxLength(30)
                   .IsFixedLength()
                   .HasDefaultValueSql("('UNKNOWN')");
                entity.Property(e => e.email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.ruc)
                    .IsRequired()
                    .HasColumnName("ruc")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });
            builder.Entity<PurchaseOrder>(entity =>
            {
                entity.HasKey(e => e.id).HasName("purchaseOrder_pk");
                entity.ToTable("purchaseOrder");

                entity.Property(e => e.id)
                    .HasColumnName("id")
                    .IsRequired();
                entity.Property(e => e.providerId)
                    .HasColumnName("providerId")
                    .IsRequired();
                entity.Property(e => e.orderDate)
                    .IsRequired()
                    .HasColumnName("orderDate")
                    .HasColumnType("datetime2(7)");

                entity.Property(e => e.deliveryDate)
                    .IsRequired()
                    .HasColumnName("deliveryDate")
                    .HasColumnType("datetime2(7)");
                entity.Property(e => e.totalPrice)
                    .IsRequired()
                    .HasColumnName("totalPrice")
                    .HasColumnType("float");

                entity.HasOne(d => d.provider)
                    .WithMany(e => e.purchaseOrders)
                    .HasForeignKey(d => d.providerId)
                    .HasConstraintName("purchaseOrder_fk1");
            });
            builder.Entity<Purchase>(entity =>
            {
                entity.HasKey(e => e.id).HasName("purchase_pk");
                entity.ToTable("purchase");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();
                entity.Property(e => e.purchaseOrderId)
                    .IsRequired()
                    .HasColumnName("purchaseOrderId");
                entity.Property(e => e.purchaseDate)
                .IsRequired()
                .HasColumnName("purchaseDate")
                .HasColumnType("datetime2(7)");
                entity.HasOne(d => d.purchaseOrder)
                    .WithOne(e => e.purchase)
                    .HasForeignKey<Purchase>(d => d.purchaseOrderId)
                    .HasConstraintName("purchase_fk1");
            });
            builder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.id)
                    .HasName("product_pk");

                entity.ToTable("product");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();

                entity.Property(e => e.name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.image)
                    .HasColumnName("image")
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('Imagen no disponible')");
                entity.Property(e => e.description)
                    .HasColumnName("description")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.label)
                    .HasColumnName("label")
                    .HasMaxLength(30)
                    .IsUnicode(false);
                entity.Property(e => e.stock)
                    .HasColumnName("stock")
                    .IsUnicode(false);
                entity.Property(e => e.stockMin)
                    .IsRequired()
                    .HasColumnName("stockMin")
                    .IsUnicode(false);
                entity.Property(e => e.stockMax)
                    .HasColumnName("stockMax")
                    .IsUnicode(false);
                entity.Property(e => e.price)
                    .IsRequired()
                    .HasColumnName("price")
                    .HasColumnType("float");
                // entity.HasMany<SalesDetail>("salesDetails");
            });

            builder.Entity<DamagedProduct>(entity =>
            {
                entity.HasKey(e => e.id).HasName("damagedProduct_pk");
                entity.ToTable("damagedProduct");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();
                entity.Property(e => e.productId).HasColumnName("productId").IsRequired();
                entity.Property(e => e.stock)
                    .IsRequired()
                    .HasColumnName("stock")
                    .IsUnicode(false);
                entity.HasOne(d => d.product)
                    .WithMany(e => e.damagedProducts)
                    .HasForeignKey(d => d.productId)
                    .HasConstraintName("damagedProduct_fk");
            });
             builder.Entity<SalesDetail>(entity =>
            {
                entity.HasKey(e => e.id)
                    .HasName("salesDetail_pk")
                    .IsClustered(false);

                entity.ToTable("salesDetail");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();
                entity.Property(e => e.productId).HasColumnName("productId").IsRequired();
                entity.Property(e => e.saleId).HasColumnName("saleId").IsRequired();
                entity.Property(e => e.stock)
                    .IsRequired()
                    .HasColumnName("stock")
                    .IsUnicode(false);
                entity.HasOne(d => d.product)
                    .WithMany(e => e.salesDetails)
                    .HasForeignKey(d => d.productId)
                    .HasConstraintName("salesDetail_fk1");
                entity.HasOne(d => d.sale)
                    .WithMany(e => e.salesDetails)
                    .HasForeignKey(d => d.saleId)
                    .HasConstraintName("salesDetail_fk2");
            });
            builder.Entity<PurchaseDetail>(entity =>
            {
                entity.HasKey(e => e.id).HasName("purchaseDetail_pk");
                entity.ToTable("purchaseDetail");

                entity.Property(e => e.id).HasColumnName("id").IsRequired();

                entity.Property(e => e.productId).HasColumnName("productId").IsRequired();
                entity.Property(e => e.purchaseOrderId).HasColumnName("purchaseOrderId").IsRequired();

                entity.Property(e => e.stock)
                    .IsRequired()
                    .HasColumnName("stock")
                    .IsUnicode(false);
                entity.HasOne(d => d.product)
                    .WithMany(e => e.purchaseDetails)
                    .HasForeignKey(d => d.productId)
                    .HasConstraintName("purchaseDetail_fk1");
                entity.HasOne(d => d.purchaseOrder)
                    .WithMany(e => e.purchaseDetails)
                    .HasForeignKey(d => d.purchaseOrderId)
                    .HasConstraintName("purchaseDetail_fk2");
            });

            // base.OnModelCreating(builder);
            OnModelCreatingPartial(builder);
        }
        partial void OnModelCreatingPartial(ModelBuilder builder);
    }
}