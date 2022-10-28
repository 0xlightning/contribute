SELECT * FROM products
WHERE name REGEXP 'Push|Romaine|back'
-- its like normal expersion
-- REGEXP means regular expersion 
--  'Push'    for telling that it is present in the list or not
--  '^Push'   for telling that it is first word of the name
--  'Push$'   for telling that it is last word of the name
--  'Push|Romaine|back'  for telling many characters in the list
--  '[gim]e'  for telling to get characters with ' ge ie me ' in the list
--  'e[fys]'  for telling to get characters with ' ef ey es ' in the list
--  '[a-d]e'  for telling to get characters within range of ' ae be ce de ' in the list
--  ^ beginning
--  $ end
--  | or operation
--  [abcd] specific
--  [a-g] range