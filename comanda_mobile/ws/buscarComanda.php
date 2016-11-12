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

//testa a conexÃ£o
if($con->conect_error){
	die("A conexÃ£o falhou". $con->conect_error);
}

//obtendo dados via mÃ©todo GET
$idComanda = $_GET['idComanda'];

//montando select e executando no banco
$sql = "SELECT  idComanda FROM  comanda WHERE comanda.idComanda = '".$idComanda."'  ";

$result = $con->query($sql);

//veriricando resultado
if($result->num_rows > 0){
	
	 $dados = $result->fetch_assoc();
	//devolve uma resposta em formato json
	echo json_encode($dados);

}


?>