
var date = ''
console.log(date)
var eventoJson = '';
var eventos = []
var evento = ''
var termino = ''
var linha = '';
var linhas = []
var stt = ''

function preload(){
    eventoJson = loadJSON("json/events.json")
}

function setup(){
    console.log(eventoJson)
    
    for(var evento in eventoJson){
        evento = eventoJson[evento]
        termino = new Date(evento.termino).getTime()
        eventos.push(evento)
    }
    eventos.sort((a, b)=>{
        d1 = new Date(a.termino).getTime()
        d2 = new Date(b.termino).getTime()
        return d2 - d1
    })
    console.log(eventos)

    for(var i = 0; i < eventos.length; i++){
        evento = eventos[i];
        

        termino = evento.termino.split("/")
        console.log(termino)
        termino = termino[1]+'-'+termino[0]+'-'+termino[2];
        termino = new Date(termino).getTime()
        
        inicio = evento.inicio.split("/")
        console.log(inicio)
        inicio = inicio[1]+'-'+inicio[0]+'-'+inicio[2];
        inicio = new Date(inicio).getTime()

        linha = '<tr class="tabela-2 evento" id='+evento.id+' onclick="trocarTela(this.id)">'

        linha += ' <td id="nome">'+evento.nome+'</td>'
        linha += '<td id="inicio">'+evento.inicio+'</td>'
        linha += '<td id="termino">'+evento.termino+'</td>'
        date = new Date().getTime()
        console.log("agora",date)
        console.log("final",termino)
        console.log("diferença",date-termino)
        console.log("")
        if(termino < date){
            stt = "ENCERRADO"
            linha += '<td id="status" class="encerrado">'+stt+'</td>'
        }else if(inicio < date && termino > date){
            stt = "ABERTO"
            linha += '<td id="status" class="aberto">'+stt+'</td>'
        }
        if(inicio > date){
            
            stt = "A SER INICIADO"
            linha += '<td id="status" class="iniciar">'+stt+'</td>'
        }

   
        linha += '</tr>'
                        
        
        linhas.push(linha)
                
    }

    $("#tabela").append(linhas)
}

function trocarTela(id){
    console.log(id)
    localStorage.setItem("evento", id)
    window.location = 'telaInscritos.html'
}

