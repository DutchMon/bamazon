DROP DATABASE bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT UNIQUE NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price float NOT NULL,
stock_quantity INTEGER(10)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toothbrush", "beauty and personal care", 2.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("keyboard", "technology", 19.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("official EPL match ball", "sports equipment", 250, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("harry potter book series", "books", 58.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple iPhone X unlocked", "cell phones and accessories", 1094, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("beach tent", "outdoor recreation", 29.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PS4 controller", "video games", 46.96, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("call of duty black ops 4", "video games", 59.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vintage metal frame glasses", "sunglasses & eyewear", 9.90, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("6' HDMI cable", "video cables", 7.99, 100);




