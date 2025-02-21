create table if not exists filme (
  id int AUTO_INCREMENT PRIMARY key,
  titulo varchar(200) not null,
  descricao text,  
  genero_id int not null,
  FOREIGN KEY (genero_id) REFERENCES genero(id) on delete cascade
);