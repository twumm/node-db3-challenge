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
```
select
  *
from orders as o
join customers as c on o.customerid = c.customerid
join employees as e on o.employeeid = e.employeeid
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
```
select 
	count(categories.categoryname) as Count,
	categoryname
from categories
left join products on categories.categoryid = products.categoryid
group by categories.categoryname
```


### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
```
select
	orderid,
    count(quantity) as ItemCount
from orderdetails
left join products on products.productid = orderdetails.productid
group by orderid
```