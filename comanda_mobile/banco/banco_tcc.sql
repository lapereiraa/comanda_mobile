

create table cliente(
	idCliente int primary key auto_increment,
	nome varchar (40) not null,
    	data_nascimento date,
    	rg int,
    	telefone int
);


create table categoria(
	idCategoria int primary key auto_increment,
	nome_categoria varchar(40) not null
);


create table produto(
    idProduto int primary key auto_increment,
	descricao varchar (40) not null,
	marca varchar (40) not null,
	preco float not null,
	idCategoria int,
	foreign key(idCategoria) references categoria(idCategoria)
);


create table comanda(
    idComanda int primary key auto_increment,
	valor int,
	idItem int,
	idCliente int,
	foreign key(idItem) references item_venda(idItem),
	foreign key(idCliente) references cliente(idCliente)
);


create table item_venda(
    idItem int primary key auto_increment,
	quantidade int,
	idProduto int,
	preco float,
	foreign key(idProduto) references produto(idProduto)
);

