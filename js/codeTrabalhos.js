var worksJson;
var linhas = ''
var userId;
function preload(){
    worksJson = loadJSON("json/works.json")
}

function setup(){
    console.log(worksJson)
    userId = localStorage.getItem("idUserLogado")
    for(var w in worksJson) {
        for(var i = 0; i < worksJson[w].avaliadores.length; i++){
            if(worksJson[w].avaliadores[i].idUsuario == userId){
                linhas += "<tr class='tabela-2 evento'  id="+worksJson[w].id+" onclick='trocarTela(this.id)'>"
                linhas +=  "<td  >"+worksJson[w].titulo+"</td>"
                if(worksJson[w].avaliado){
                    linhas +=  "<td class='aberto' > VER AVALIAÇÃO </td>"
                }else{
                    linhas +=  "<td class='encerrado' > AVALIAR </td>"
                }
               
                linhas+= "</tr>"
            }
        }
        
        
    }
   

    $("#tabela").append(linhas)
}

function trocarTela(id){
    localStorage.setItem("workId", id)
    window.location = 'telaTrabalho.html'
}

