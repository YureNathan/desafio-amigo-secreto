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
