let amigos = [];

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value;
  if (!nomeAmigo) {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nomeAmigo);
  }
  document.getElementById("amigo").value = "";
  atualizarListaAmigos();
}

function atualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  tamanhoListaAmigos = amigos.length;
  let amigoSorteado = Math.floor(Math.random() * tamanhoListaAmigos);
  if (tamanhoListaAmigos != 0) {
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById(
      "resultado"
    ).innerHTML = `<li>O amigo secreto sorteado é: ${amigos[amigoSorteado]}</li>`;
  }
}
