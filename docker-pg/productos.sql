-- Conectarse a la base de datos "productos"
\c productos;

-- Crear la tabla 'productos'
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    marca VARCHAR(100),  -- Cambié el tipo de datos a VARCHAR para la marca
    categoria VARCHAR(50),  -- Agregué el tipo de datos para 'categoria'
    stock INTEGER  -- Cambié el tipo de datos a INTEGER para el stock
);

-- Insertar datos en la tabla 'productos'
INSERT INTO productos (nombre, marca, categoria, stock) VALUES
('Laptop Gamer', 'ASUS', 'Electrónica', 20),
('Teléfono Inteligente', 'Samsung', 'Electrónica', 35),
('Auriculares Inalámbricos', 'Sony', 'Accesorios', 50),
('Televisor 4K', 'LG', 'Electrodomésticos', 15),
('Cámara Fotográfica', 'Canon', 'Fotografía', 10),
('Consola de Videojuegos', 'Nintendo', 'Juegos', 25),
('Cafetera Eléctrica', 'Nespresso', 'Hogar', 40),
('Reloj Inteligente', 'Apple', 'Accesorios', 30),
('Tablet', 'Microsoft', 'Electrónica', 25),
('Impresora Multifuncional', 'HP', 'Oficina', 18);
