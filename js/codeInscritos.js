var eventEscolhido = ''
var eventos = []
var dadosEvento;
var users = []
var usersJson;
var eventoJson;
var linhas = []
var linha = '';
function preload(){
    eventoJson = loadJSON("json/events.json")
    usersJson = loadJSON("json/users.json")
    eventEscolhido = localStorage.getItem("evento")
   
}

function setup(){
    console.log(eventoJson)
    console.log(usersJson)
    for(var evento in eventoJson){
        if(eventoJson[evento].id == eventEscolhido){
            evento = eventoJson[evento]
            console.log("Evento",evento)
            $("#title").text("EVENTO: "+evento.nome)
        }
    }
    for(var user in usersJson){
        for (var i = 0; i < usersJson[user].inscricoes.length; i++){
            inscricao = usersJson[user].inscricoes[i].idEvento;
            tipo = usersJson[user].inscricoes[i].tipoInscricao;
            if(tipo==1){
                forma = "ouvinte"
            }else if(tipo == 2){
                forma = 'apresentador'
            }
            else if(tipo == 3){
                forma = 'avaliador'
            }
            else{
                forma = 'administrador'
            }
            console.log(usersJson[user].nome, " se inscreveu em ", inscricao)
            if(inscricao == eventEscolhido){
                users.push(usersJson[user])
                linha += "<tr class='tabela-2' > <td>"+usersJson[user].nome+"</td>";
                linha += " <td>"+forma+"</td>"
                
                linha += "</tr>";
            }
        }   
      
    }
    console.log(users)
    console.log("Evento",evento)
   
    $("#tabela").append(linha)

}
