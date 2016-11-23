
create table item_venda(
    idItem int primary key auto_increment,
	quantidade int,
	idProduto int,
	preco float,
	total float,
	idComanda int,
	foreign key(idProduto) references produto(idProduto),
	foreign key(idComanda) references comanda(idComanda)
);