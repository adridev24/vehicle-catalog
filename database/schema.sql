-- PostgreSQL schema for vehicle catalog

CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    color VARCHAR(50),
    price DECIMAL(10, 2)
);

CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE vehicle_owners (
    vehicle_id INT REFERENCES vehicles(id),
    owner_id INT REFERENCES owners(id),
    purchase_date DATE,
    PRIMARY KEY (vehicle_id, owner_id)
);