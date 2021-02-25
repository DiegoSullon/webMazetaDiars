use WebMazetaDiars;
go

create table role (
	id int not null,
	name nvarchar(30) not null,
	description nvarchar(150),
	CONSTRAINT role_pk PRIMARY KEY (id)
);

go

create table employee (
	id uniqueidentifier not null ,
	roleId int not null,
	dni nvarchar(30) not null,
	email nvarchar(30) not null,
	password nvarchar(30) not null,
	surname nvarchar(30) not null,
	surname2 nvarchar(30),
	name nvarchar(30) not null,
	telephone nvarchar(30),
	CONSTRAINT employee_pk PRIMARY KEY (id),
	CONSTRAINT employee_fk1 FOREIGN KEY (roleId) REFERENCES dbo.role(id)
);
go
create table client(
	id uniqueidentifier not null,
	roleId int not null,
	dni nvarchar(30),
	ruc nvarchar(30),
	email nvarchar(30) not null,
	address nvarchar(150),
	password nvarchar(30) not null,
	surname nvarchar(30) not null,
	surname2 nvarchar(30),
	name nvarchar(30) not null,
	telephone nvarchar(30),
	CONSTRAINT client_pk PRIMARY KEY (id),
	CONSTRAINT client_fk1 FOREIGN KEY (roleId) REFERENCES dbo.role(id)
);
go


create table sale(
	id uniqueidentifier not null,
	clientId  uniqueidentifier not null,
	saleDate datetime2(7) not null,
	deliveryCharge float not null,
	totalPrice float not null,
	CONSTRAINT sale_pk PRIMARY KEY (id),
	CONSTRAINT sale_fk FOREIGN KEY (clientId) references client(id)
);
go

create table deliveryOrder(
	id uniqueidentifier not null,
	saleId uniqueidentifier not null,
	employeeId uniqueidentifier not null,
	purcharseDate datetime2(7) not null,
	CONSTRAINT deliveryOrder_pk PRIMARY KEY (id),
	CONSTRAINT deliveryOrder_fk1 FOREIGN KEY (saleId) references dbo.sale(id),
	CONSTRAINT deliveryOrder_fk2 FOREIGN KEY (employeeId) references dbo.employee(id)
);
go

create table provider(
	id uniqueidentifier not null,
	name nvarchar(30) not null,
	telephone nvarchar(30) not null,
	email nvarchar(30) not null,
	RUC nvarchar(30) not null,
	CONSTRAINT provider_pk PRIMARY KEY (id),
);
go
create table purchaseOrder(
	id uniqueidentifier not null,
	providerId uniqueidentifier not null,
	orderDate datetime2(7) not null,
	deliveryDate datetime2(7) not null,
	totalPrice float not null,
	CONSTRAINT purchaseOrder_pk PRIMARY KEY (id),
	CONSTRAINT purchaseOrder_fk1 FOREIGN KEY (providerId) references dbo.provider(id),
);
go
create table purchase(
	id uniqueidentifier not null,
	purchaseOrderId uniqueidentifier not null,
	purchaseDate datetime2(7) not null,
	CONSTRAINT purchase_pk PRIMARY KEY (id),
	CONSTRAINT purchase_fk1 FOREIGN KEY (purchaseOrderId) references dbo.purchaseOrder(id),
);	
go

create table product(
	id uniqueidentifier not null,
	name nvarchar(30) not null,
	image nvarchar(150) ,
	description nvarchar(30)  ,
	label nvarchar(30) ,
	stock int not null,
	stockmin int not null,
	stockmax int,
	price float not null,
	CONSTRAINT product_pk PRIMARY KEY (id),
);
go

create table damagedProduct(
	id uniqueidentifier not null,
	productId uniqueidentifier not null,
	stock int not null,
	CONSTRAINT damagedProduct_pk PRIMARY KEY (id),
	CONSTRAINT damagedProduct_fk FOREIGN KEY (productId) references dbo.product(id)
);
go

create table salesDetail(
	id uniqueidentifier not null,
	productId uniqueidentifier not null,
	saleId uniqueidentifier not null,
	stock int not null,
	CONSTRAINT salesDetail_pk PRIMARY KEY (id),
	CONSTRAINT salesDetail_fk1 FOREIGN KEY (productId) references dbo.product(id),
	CONSTRAINT salesDetail_fk2 FOREIGN KEY (saleId) references dbo.sale(id)
);
go
create table purchaseDetail(
	id uniqueidentifier not null,
	productId uniqueidentifier not null,
	purchaseOrderId uniqueidentifier not null,
	stock int not null,
	CONSTRAINT purchaseDetail_pk PRIMARY KEY (id),
	CONSTRAINT purchaseDetail_fk1 FOREIGN KEY (productId) references dbo.product(id),
	CONSTRAINT purchaseDetail_fk2 FOREIGN KEY (purchaseOrderId) references dbo.purchaseOrder(id)
);

INSERT INTO role (id, name, description)
VALUES 
(1, 'User', 'user level access '),
(2, 'Sale', 'access to stock, deliveries, sales'),
(3, 'Manager', 'access to all functions');

INSERT INTO employee(id, roleId, dni, email, password, surname, surname2, name, telephone)
VALUES 
(NEWID(), 3, '12345678', 'juanPerez@gmail.com', '12345678', 'Perez', '', 'Juan', '987654321'),
(NEWID(), 3, '22345678', 'sandraVega@gmail.com', '22345678', 'Vega', 'Gallardo', 'Sandra', '987654322'),
(NEWID(), 2, '32345678', 'renatoSanchez@gmail.com', '32345678', 'Sanchez', 'Urteaga', 'Renato', '987654323'),
(NEWID(), 1, '42345678', 'wendyZorrilla@gmail.com', '42345678', 'Zorrilla', 'Garcia', 'Wendy', '987654324');

INSERT INTO product(id, name, image, description, label, stock, stockmin, stockmax, price)
VALUES 
(NEWID(), 'creatina', 'https://cdn.shopify.com/s/files/1/1032/0173/products/MICRONIZED-CREATINE-300A-IM-OPT_1200x.png?v=1569328196', 'Suplemento de creatina', 'Suplementos', 25, 10, 30, '85.6'),
(NEWID(), 'Best Glutamine', 'https://cdn.shopify.com/s/files/1/1032/0173/products/BEST-GLUTAMINE-LS-IM-OPT_1200x.png?v=1585449845', '400 Gr Aminoácido', 'Suplementos', 13, 10, 30, '75.7'),
(NEWID(), 'GOLD STANDARD WHEY', 'https://gnc.com.mx/media/catalog/product/cache/b669420cf3540aeb652e4ae3322c681d/1/4/141604084-optimum-nutrition-100_-whey-gold-wc-vainilla-a.jpg', 'NUTRITION CHOCOLATE 5LBS', 'Suplementos', 15, 10, 30, '139.9');

INSERT INTO provider(id, name, telephone, email,RUC)
VALUES 
(NEWID(), 'Bpi Sports', '044654321','bp1.support@bpi.com','0266537341001'),
(NEWID(), 'Optimum Nutrition', '044654322','optimum.nutrition@optimum.com','0266537341002');

/* se necesita obtener los id de provider (Guardar en variable para reutilizar) */
select * from provider
INSERT INTO purchaseOrder(id, providerId, orderDate, deliveryDate,totalPrice)
VALUES 
(NEWID(), 'BD34D2EA-D919-4E18-BA38-6344FEE89C6F', GETDATE(),'2021-03-03','300.5'),
(NEWID(), '5BA19C38-DE07-4026-BD7A-641CAB2DD58C', GETDATE(),'2021-03-04','200.5');

/* se necesita obtener los id de product y purchaseOrder (Guardar en variable para reutilizar)  */
select * from product
select * from purchaseOrder
INSERT INTO purchaseDetail(id, productId, purchaseOrderId, stock)
VALUES 
(NEWID(), 'DA2351E8-943A-4233-B0BD-FBB0E57DFE68', 'DE7441E4-089A-476A-93F3-C126E1EB3BEC',20),
(NEWID(), 'A6FE0725-B4CC-4ADA-9990-D55E928B598D', 'DE7441E4-089A-476A-93F3-C126E1EB3BEC',20);

select * from purchaseDetail 