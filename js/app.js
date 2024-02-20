let amigos = [];

function adicionar (){
    let nomeAmigos = document.getElementById('nome-amigo');
    if (nomeAmigos.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    
    
    if (amigos.includes(nomeAmigos.value)) {
        alert('Nome já adicionado!');
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigos.value)
    if (listaAmigos.innerHTML == ''){
        listaAmigos.innerHTML = nomeAmigos.value
    }else{
        listaAmigos.innerHTML = listaAmigos.innerHTML + ', ' + nomeAmigos.value;
    }
    nomeAmigos.value = '';
}


function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
}

}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
