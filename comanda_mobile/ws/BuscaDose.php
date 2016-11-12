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


//montando select e executando no banco
$sql = "SELECT  * FROM  produto WHERE produto.idCategoria = 3";

$result = $con->query($sql);

//veriricando resultado
if($result->num_rows > 0){
	
	 //$dados = $result->fetch_assoc();
	 $n     = mysqli_num_rows($result); //Número de Linhas retornadas
	 for($i=0; $i<$n; $i++){
	 	$dados[] = $result->fetch_assoc();
	 }
	
}else{
	echo "0 resultados";
}

//devolve uma resposta em formato json
echo json_encode($dados);

$con->close();
?>