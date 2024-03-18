var postsJson, userId, user, usersJson;
var posts = []

var linhas = []
var linha = '';
var lastId = ''

var titulo, descricao, link='';


function preload(){
    postsJson = loadJSON("json/posts.json")
    usersJson = loadJSON("json/users.json")
   
    console.log(postsJson)
}

function setup(){
    userId = localStorage.getItem("idUserLogado")
    console.log(usersJson)
    user = usersJson[userId - 1]
    
    console.log(user)

    for (var p in postsJson){
        for(var i = 0; i < user.segue.length; i++){
            segId = user.segue[i].idUsuario
            if(segId == postsJson[p].idAutor){
                posts.push(postsJson[p])
            }
        }
    }
    console.log(posts)
    listaPosts = Object.keys(postsJson)
    lastId = listaPosts[listaPosts.length - 1]
    console.log(lastId)
}

var post = {}

function enviar(){
    userId = localStorage.getItem("idUserLogado")
    console.log("CLICOU")
    titulo = $("#titulo").val()
    descricao = $("#descricao").val()
    link = dirArquivo;
    id = Number(lastId) + 1
    id =  id.toString()
    if(titulo && descricao ){
        post = {
            id: id,
            titulo: titulo,
            descricao:descricao,
            foto:link,
            idAutor:userId
        }
        postsJson[id] = post
        console.log(postsJson)
       // saveJSON(postsJson,"json/posts.json")
    }else{
        alert("Preencha todos os campos")
    }
    
   
}

var fundo = $(".pic")
var input = $("#pic_input")
var img = $(".pic_img")
var nomeSpan = $("#nomeArquivo")
var texto = 'Escolha uma imagem '
var dirArquivo = ''
img.text(texto)
var linha = ''

$(document).ready(()=>{
    console.log("a")
    linha = ''
    input.on("change", (e)=>{
        console.log("enviou arquivo")
        console.log(e.target)
        var file = e.target.files[0]
        if(file){
            img.text('')
            //nome do arquivo
            var nomeArquivo = file.name.split(".")[0]
            var leitor = new FileReader();

            leitor.addEventListener("load", (e)=>{
                var readerTarget = e.target;
                dirArquivo = readerTarget.result
                linha = "<img class='imagem' src="+ dirArquivo +">";
                img.append(linha)
                nomeSpan.text("Nome da imagem enviada: "+nomeArquivo)
               
            })
            leitor.readAsDataURL(file)
        }else{
            img.text(texto)
        }
    })
})