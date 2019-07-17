# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
```
select 
	productname,
    categoryname
from products
left join categories on categories.categoryid = products.categoryid;
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
```
select 
	orderid,
    orderdate,
    shippername
from orders
left join shippers
where orders.orderdate < '1997-01-09'
group by orders.orderid;
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
```
select
	productname,
    orderdetails.quantity,
    orderdetails.orderid
from products
left join orderdetails on products.productid = orderdetails.productid
where orderdetails.orderid = '10251';
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
// not working right
```
select
	o.orderid,
    c.customername,
    od.quantity
from orders as o
left join customers as c
left join orderdetails as od
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 