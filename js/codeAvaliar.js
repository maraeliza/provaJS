var workDiv = $("#work");

var worksJson;
var linhas = "";
var work;
var workId;
var notaA = 0,
  notaB = 0,
  notaC = 0,
  notaD = 0,
  notaE = 0,
  notaF = 0;
function preload() {
  worksJson = loadJSON("json/works.json");
}

function setup() {
  console.log(worksJson);

  workId = localStorage.getItem("workId");
  for (var w in worksJson) {
    if (worksJson[w].id == workId) {
      work = worksJson[w];
    }
  }
  if (work.avaliado) {
    enviar(
      work.notas["a"],
      work.notas["b"],
      work.notas["c"],
      work.notas["e"],
      work.notas["d"],
      work.notas["f"]
    );
    $("#avalForm").hide();
    $("#avalRes").show();
  } else {
    $("#avalForm").show();
    $("#avalRes").hide();
  }

  linhas += "<h3>" + work.titulo + "</h3>";
  linhas += "<h4 style='width: 75%'>" + work.descricao + "</h4>";
  console.log(work);
  linhas += "<iframe src=" + work.link + " width=560 height=415/>";

  workDiv.append(linhas);
}

btnsA = document.querySelectorAll("input[name='notaA']");
btnsB = document.querySelectorAll("input[name='notaB']");

btnsC = document.querySelectorAll("input[name='notaC']");
btnsD = document.querySelectorAll("input[name='notaD']");

btnsE = document.querySelectorAll("input[name='notaE']");
btnsF = document.querySelectorAll("input[name='notaF']");

btnsA.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    notaA = document.querySelector("input[name='notaA']:checked").value;
    console.log(notaA);
  });
});
btnsB.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    notaB = document.querySelector("input[name='notaB']:checked").value;
    console.log(notaB);
  });
});
btnsC.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    notaC = document.querySelector("input[name='notaC']:checked").value;
    console.log(notaC);
  });
});
btnsD.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    notaD = document.querySelector("input[name='notaD']:checked").value;
    console.log(notaD);
  });
});
btnsE.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    notaE = document.querySelector("input[name='notaE']:checked").value;
    console.log(notaE);
  });
});
btnsF.forEach((btn) => {
  btn.addEventListener("change", (e) => {
    notaF = document.querySelector("input[name='notaF']:checked").value;
    console.log(notaF);
  });
});
var resultado = "";

$("#enviarBtn").click((e) => {
  e.preventDefault();
  enviar(notaA, notaB, notaC, notaD, notaE, notaF);
});
var result = $("#result");

function enviar(notaA, notaB, notaC, notaD, notaE, notaF) {
  result.text("");
  resultado = "";
  if (notaA > 5) {
    resultado += '<tr class="tabelaNota2 aprovado">';
  } else {
    resultado += '<tr class="tabelaNota2 reprovado">';
  }

  resultado += "<td>Relevância e Originalidade</td>";
  resultado += "<td>" + notaA + "</td></tr>";

  if (notaB > 5) {
    resultado += '<tr class="tabelaNota2 aprovado">';
  } else {
    resultado += '<tr class="tabelaNota2 reprovado">';
  }

  resultado += "<td>Fundamentação Teórica</td>";

  resultado += "<td>" + notaB + "</td></tr>";

  if (notaC > 5) {
    resultado += '<tr class="tabelaNota2 aprovado">';
  } else {
    resultado += '<tr class="tabelaNota2 reprovado">';
  }
  resultado += "<td>Metodologia</td>";
  resultado += "<td>" + notaC + "</td></tr>";

  if (notaD > 5) {
    resultado += '<tr class="tabelaNota2 aprovado">';
  } else {
    resultado += '<tr class="tabelaNota2 reprovado">';
  }
  resultado += "<td>Contribuição Científica</td>";
  resultado += "<td>" + notaD + "</td></tr>";

  if (notaE > 5) {
    resultado += '<tr class="tabelaNota2 aprovado">';
  } else {
    resultado += '<tr class="tabelaNota2 reprovado">';
  }
  resultado += "<td>Viabilidade</td>";
  resultado += "<td>" + notaE + "</td></tr>";

  if (notaF > 5) {
    resultado += '<tr class="tabelaNota2 aprovado">';
  } else {
    resultado += '<tr class="tabelaNota2 reprovado">';
  }
  resultado += "<td>Orientação</td>";
  resultado += "<td>" + notaF + "</td></tr>";

  result.append(resultado);
  $("#avalForm").hide();
  $("#avalRes").show();
}

function alterar() {
  $("#avalRes").hide();
  $("#avalForm").show();
}
