CREATE DATABASE dailyscrumDB;

USE dailyscrumDB; -- Aqui é onde você define o banco de dados a ser usado

CREATE TABLE pessoas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  idade INT,
  email VARCHAR(100)
);

INSERT INTO pessoas (nome, idade, email) VALUES
  ('João', 30, 'joao@example.com'),
  ('Maria', 25, 'maria@example.com'),
  ('Pedro', 35, 'pedro@example.com');

SELECT * FROM pessoas;