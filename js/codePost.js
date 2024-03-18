var postsJson, userId, user, usersJson;
var posts = []

var linhas = []
var linha = '';
function preload(){
    postsJson = loadJSON("json/posts.json")
    usersJson = loadJSON("json/users.json")
    userId = localStorage.getItem("idUserLogado")

  

    console.log(userId)
    console.log(postsJson)
}

function setup(){
    console.log(usersJson)
    user = usersJson[userId - 1]
    
    console.log(user)

    for (var p in postsJson){
        for(var i = 0; i < user.segue.length; i++){
            segId = user.segue[i].idUsuario
            if(segId == postsJson[p].idAutor){
                linha +=  '<div class="post">'
                
                if(postsJson[p].foto){
                    linha += "<img class='postImg' src="+postsJson[p].foto+">"
                }
               
                linha += '<h3 class="postTitle">'+postsJson[p].titulo+'</h3>'
                linha += '<h4 class="postDescription">'+postsJson[p].descricao +'</h4> </div>'
           

                posts.push(postsJson[p])
            }
        }
    }
   $("#posts").append(linha)
}
