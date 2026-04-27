function mostrarProximo(){
    document.getElementById("grupo1").innerHTML = "Grupo 🅳";
    document.getElementById("grupo2").innerHTML = "Grupo 🅴";
    document.getElementById("grupo3").innerHTML = "Grupo 🅵";
    document.getElementById("fatos1").innerHTML = "<strong>Fatos:</strong> Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.";
    document.getElementById("fatos2").innerHTML = "<strong>Fatos:</strong> Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.";
    document.getElementById("fatos3").innerHTML = "<strong>Fatos:</strong> Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.";
    document.getElementById("li1").innerHTML = "Estados Unidos";
    document.getElementById("li2").innerHTML = "Paraguai";
    document.getElementById("li3").innerHTML = "Austrália";
    document.getElementById("li4").innerHTML = "Turquia";
    document.getElementById("li5").innerHTML = "Alemanha";
    document.getElementById("li6").innerHTML = "Equador";
    document.getElementById("li7").innerHTML = "Costa do Marfin";
    document.getElementById("li8").innerHTML = "Curaçao";
    document.getElementById("li9").innerHTML = "Holanda";
    document.getElementById("li10").innerHTML = "Japão";
    document.getElementById("li11").innerHTML = "Tunísia";
    document.getElementById("li12").innerHTML = "Suécia";
}

function add(){
    let container = document.getElementById("Cards");

    let novoCard = document.getElementById("div");

    novoCard.classList.add("card");
    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.webp" class="card-img-top" style="widht: 300px; height: 300px;">

        <div class="card-body">
            <h5 class="card-title">
                <span>Lucas Tolentino Coelho de Lima</span>
                <span class="badge text-bg-secondary">8,8</span>
            </h5>
            <p class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997</span><br>
                <span><strong>Altura:</strong> 1,80 m</span><br>
                <span><strong>Posição:</strong> Meio-campista</span><br>
            </p>
        </div>
    `
    container.appendChild(novoCard);
}