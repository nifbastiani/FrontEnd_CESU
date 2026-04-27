function mostrar(){
    document.getElementById("tab").innerHTML = '<img src="img/Tabela_Jogos.png" style = "width: 100%;"></img>'
}

function add(){
    document.getElementById("imagemJogador").src = "img/_vinicius_junior.png";
    
    let nome = document.getElementById("Nome");
    nome.innerHTML = "Vinícius José Paixão de Oliveira Júnior";
    nome.classList.remove("placeholder", "col-6");
    nome.classList.add("card-text");

    let rank = document.getElementById("Rank");
    rank.innerHTML = `🏃 <strong>Rank</strong>: 9,5`;

    let data = document.getElementById("Data_Nas");
    data.innerHTML = `📅 <strong>Data de Nascimento:</strong> 12/07/2000 (25 anos)`;
    data.classList.remove("placeholder", "col-4");
    data.classList.add("card-text");

    let altura = document.getElementById("Altura");
    altura.innerHTML = `📏 <strong>Altura:</strong> 1,76 m`;
    altura.classList.remove("placeholder", "col-4");
    altura.classList.add("card-text");

    let posicao = document.getElementById("Posicao");
    posicao.innerHTML = `🏃 <strong>Posição:</strong> Ponta-esquerda / Atacante`;
    posicao.classList.remove("placeholder", "col-6");
    posicao.classList.add("card-text");
}