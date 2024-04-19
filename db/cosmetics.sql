
CREATE DATABASE  cosmetics;

USE cosmetics;
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    descripcion TEXT
);

INSERT INTO products (nombre, tipo, marca, descripcion) VALUES
('Crema hidratante', 'Cuidado facial', 'Loreal', 'Crema hidratante para el rostro'),
('Labial rojo', 'Maquillaje labial', 'Maybelline', 'Labial de larga duración en color rojo intenso'),
('Máscara de pestañas', 'Maquillaje de ojos', 'Sephora', 'Máscara de pestañas para volumen y longitud'),
('Base de maquillaje líquida', 'Maquillaje facial', 'Dior', 'Base de maquillaje de cobertura media');

SELECT * FROM products;
