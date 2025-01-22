let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('amigo').value;
    if (nomeDoAmigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        document.getElementById('amigo').value = '';
        let mostrarLista = document.getElementById('listaAmigos');
        mostrarLista.innerHTML = `${listaDeAmigos}`;
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length > 0) {
        let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Amigo sorteado: ${sorteado}`;
    } else {
        alert('Adicione pelo menos um amigo antes de sortear.');
    }
}
