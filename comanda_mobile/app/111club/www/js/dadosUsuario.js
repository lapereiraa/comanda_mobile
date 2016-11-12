
  function buscaDadosAcesso(){
                        var idUser= sessionStorage.getItem('IdUsuario');
                        var resposta = "";
                        
                        alert(idUser);
                        $.ajax({            //Função AJAX
                            url:"http://dogsinthestreet.16mb.com/ws/dadosUsuario.php",//Arquivo php
                            type:"get",    //Método de envio
                            dataType: "text",
                            data:"idUser="+idUser,  
                            success: function (resultado){            //Sucesso no AJAX
                                       //se dados existem, receber o cod do usuario e armazenar no localstorage
                                       
                                         if(resultado != 0){
                                            //converte JSON para objeto javascript
                                            resposta = JSON.parse(resultado);
                                            sessionStorage.setItem("Nome", resposta.nome);
                                            sessionStorage.setItem("Sobrenome",resposta.sobrenome);
                                            sessionStorage.setItem("Nascimento",resposta.nasc);
                                            
                                        
                                       }else if(resultado.valor !=1){
                                        alert("DADOS INCORRETOS");
                                            
                                       }
                            }
                        });
                        return false;   //Evita que a página seja atualizada
                        
        }

       
        function buscaDadosEndereco(){
              var idUser= sessionStorage.getItem('IdUsuario');
              var resposta = "";
                        
                        alert(idUser);
                        $.ajax({            //Função AJAX
                            url:"http://dogsinthestreet.16mb.com/ws/enderecoUsuario.php",//Arquivo php
                            type:"get",    //Método de envio
                            dataType: "text",
                            data:"idUser="+idUser,  
                            success: function (resultado){            //Sucesso no AJAX
                                       //se dados existem, receber o cod do usuario e armazenar no localstorage
                                       
                                         if(resultado != 0){
                                            //converte JSON para objeto javascript
                                            resposta = JSON.parse(resultado);
                                            sessionStorage.setItem("Logradouro", resposta.logradouro);
                                            sessionStorage.setItem("Cep",resposta.cep);
                                            
                                       }else if(resultado.valor !=1){
                                        alert("DADOS INCORRETOS");
                                            
                                       }
                            }
                        });
                        return false; 

        }

        function escreveTabelaAcesso(){
          //tabela dados do usuário
          var itensUsuario  = "";
          var login = sessionStorage.getItem('Login');
          var senha = sessionStorage.getItem('Senha');
          itensUsuario = "<tr>";
          itensUsuario += "<td>'"+login+"'</td>";
          itensUsuario += "<td>'"+senha+"'</td>";
          itensUsuario += "</tr>";
          $("#dadosUsuario tbody").html(itensUsuario);
 
        }
      
        function escreveTabelaUsuario(){
           //tabela dados de acesso do usuário
          var itensAcesso   = "";
          var nome = sessionStorage.getItem('Nome');
          var sobrenome = sessionStorage.getItem('Sobrenome');
          var nascimento = sessionStorage.getItem('Nascimento');
          itensAcesso   = "<tr>";
          itensAcesso += "<td>'"+nome+"'</td>";
          itensAcesso += "<td>'"+sobrenome+"'</td>";
          itensAcesso += "<td>'"+nascimento+"'</td>";
          itensAcesso += "</tr>";
          $("#dadosAcesso tbody").html(itensAcesso);
        }

        function escreveTabelaEndereco(){
           //tabela dados de endereço do usuário
           var itensEndereco = "";
           var lograduro = sessionStorage.getItem('Logradouro');
           var cep = sessionStorage.getItem('Cep');
           //console.log(logradouro);
           itensEndereco   = "<tr>";
           itensEndereco   += "<td>'"+lograduro+"'</td>";
           itensEndereco   += "<td>'"+cep+"'</td>";
           itensEndereco   += "</tr>";
           $("#dadosEndereco tbody").html(itensEndereco);

        }


