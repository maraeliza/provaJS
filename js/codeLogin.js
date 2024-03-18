var dadosEvento;
var users = [];
var usersJson = [];
var eventoJson;
var linhas = [];
var linha = "";
var emails = [];
function preload() {
  console.log("OI");

  usersJson = loadJSON("json/users.json");
}
var logou = false;
function logar() {
  email = $("#email").val().toLowerCase();

  if (email) {
    logou = false;
    for (var e in emails) {

      if (email == emails[e].email) {
        console.log(email)
        logou = true;
        localStorage.setItem("idUserLogado", emails[e].id)
        window.location = "telaEvento.html";
      }
    }
    if (!logou) {
      alert("Não foi possível logar!");
      $("#msg").text("Não encontramos esse email no sistema, por favor, cheque seu email")
    }
  } else {
    alert("Insira o email para logar");
  }
}

function loadJSON(a) {
  console.log(a);
  usersJson = [
    {
      id: "01",
      nome: "Ernani Souza",
      email: "ernanimelo@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9293-6554",
      inscricoes: [
        { id: "00", idEvento: "01", tipoInscricao: 1 },
        { id: "01", idEvento: "02", tipoInscricao: 2 },
        { id: "02", idEvento: "03", tipoInscricao: 3 },
      ],
      segue: [
        { idUsuario: "03" },
        { idUsuario: "05" },
        { idUsuario: "07" },
        { idUsuario: "09" },
      ],
    },
    {
      id: "02",
      nome: "João Oliveira Souza",
      email: "joao@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9888 4554",
      inscricoes: [
        { id: "00", idEvento: "01", tipoInscricao: 1 },
        { id: "00", idEvento: "02", tipoInscricao: 1 },
        { id: "00", idEvento: "03", tipoInscricao: 1 },
      ],
      segue: [
        { idUsuario: "01" },
        { idUsuario: "05" },
        { idUsuario: "07" },
        { idUsuario: "09" },
      ],
    },
    {
      id: "03",
      nome: "Pedro Silva",
      email: "pedro@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9293 6554",
      inscricoes: [
        { id: "00", idEvento: "01", tipoInscricao: 1 },
        { id: "00", idEvento: "02", tipoInscricao: 1 },
        { id: "00", idEvento: "03", tipoInscricao: 1 },
      ],
      segue: [
        { idUsuario: "04" },
        { idUsuario: "05" },
        { idUsuario: "07" },
        { idUsuario: "09" },
      ],
    },
    {
      id: "05",
      nome: "Ana Martins",
      email: "ana@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9687 2003",
      inscricoes: [
        { id: "00", idEvento: "01", tipoInscricao: 4 },
        { id: "01", idEvento: "02", tipoInscricao: 4 },
        { id: "02", idEvento: "03", tipoInscricao: 4 },
      ],
      segue: [
        { idUsuario: "02" },
        { idUsuario: "04" },
        { idUsuario: "06" },
        { idUsuario: "08" },
      ],
    },
    {
      id: "05",
      nome: "Aline Vieira",
      email: "aline@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9448 2661",
      inscricoes: [{ id: "00", idEvento: "01", tipoInscricao: 1 }],
      segue: [{ idUsuario: "05" }],
    },
    {
      id: "06",
      nome: "Léia Souza",
      email: "leia@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9293 6554",
      inscricoes: [{ id: "00", idEvento: "01", tipoInscricao: 1 }],
      segue: [
        { idUsuario: "03" },
        { idUsuario: "05" },
        { idUsuario: "07" },
        { idUsuario: "09" },
      ],
    },
    {
      id: "07",
      nome: "Raquel Souza",
      email: "raquel@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9293 6554",
      inscricoes: [{ id: "00", idEvento: "01", tipoInscricao: 1 }],
      segue: [
        { idUsuario: "03" },
        { idUsuario: "05" },
        { idUsuario: "07" },
        { idUsuario: "09" },
      ],
    },
    {
      id: "08",
      nome: "Lidia Souza",
      email: "lidia@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9293 6554",
      inscricoes: [{ id: "00", idEvento: "01", tipoInscricao: 1 }],
      segue: [
        { idUsuario: "03" },
        { idUsuario: "05" },
        { idUsuario: "07" },
        { idUsuario: "09" },
      ],
    },
    {
      id: "09",
      nome: "Ester Souza",
      email: "ester@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9293 6554",
      inscricoes: [{ id: "00", idEvento: "01", tipoInscricao: 1 }],
      segue: [
        { idUsuario: "03" },
        { idUsuario: "05" },
        { idUsuario: "07" },
        { idUsuario: "09" },
      ],
    },
    {
      id: "10",
      nome: "Lucas Souza",
      email: "lucas@iftm.edu.br",
      instituição: "IFTM",
      telefone: "(34) 9 9293 6554",
      inscricoes: [{ id: "00", idEvento: "01", tipoInscricao: 1 }],
      segue: [
        { idUsuario: "03" },
        { idUsuario: "05" },
        { idUsuario: "07" },
        { idUsuario: "09" },
      ],
    },
  ];
  carregarEmails(usersJson);
}
var email = "";
function carregarEmails(usersJson) {
  for (var user in usersJson) {
    email = usersJson[user].email;
    emails.push({email:email, id: usersJson[user].id });
  }
  console.log(emails);
}
