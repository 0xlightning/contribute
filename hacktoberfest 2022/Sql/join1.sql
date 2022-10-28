USE sql_store;
SELECT *
FROM order_items oi
JOIN sql_inventory.products p
	ON oi.product_id = p.product_id
-- outer join