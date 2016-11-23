<?php
//Definir formato de arquivo
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/plain; charset=utf-8');

//dados de conexÃ£o no servidor
$servidor = 'mysql.hostinger.com.br';
$usuario = 'u189490741_la2';
$senha = 'la@@123';
$banco = 'u189490741_111';

//Conectando-se ao banco de dados MySQL
$con = new mysqli($servidor,$usuario,$senha,$banco);

//testa a conexão
if($con->conect_error){
	die("Conexão Falhou" . $conn->corret_error);
}

// 1 - obtendo dados via método POST
// 1.1 - dados para tabela usuario
$idProduto = $_GET['idProduto'];
$quantidade = $_GET['quantidade'];
$preco = $_GET['preco'];
$idComanda = $_GET['idComanda'];

$sql = "INSERT INTO item_venda(idItem, quantidade,idProduto, preco, idComanda) VALUES (NULL,'".$quantidade."','".$idProduto."','".$preco."','".$idComanda."')";


if($con->query($sql)=== TRUE){
	echo "Registro criado com sucesso!";
	
}else{
	$dados1 =  "Error: ".$sql."<br>".$con->error;
	echo json_decode($dados1);
}
$con->close();
?>	