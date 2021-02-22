DROP DATABASE IF EXISTS  burgers_db;

CREATE DATABASE burgers_db;

CREATE TABLE burgers(
    id INT PRIMARY_KEY AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN
)