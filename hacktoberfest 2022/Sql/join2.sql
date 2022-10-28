USE sql_hr;
SELECT 
	e.employee_id,
    e.first_name,
    m.first_name AS Manager
FROM employees e
JOIN employees m 
	ON e.reports_to = m.employee_id
    
-- joining the table with itself
