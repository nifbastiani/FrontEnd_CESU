        const cria = document.getElementById("b");
        const btn = document.getElementById("btn");

        const estados = {
            normal: "b_normal.png",
            bravo: "b_bravo.png",
            morto: "b_morto.png",
            comendo: "b_comendo.png", 
            alimentado: "b_feliz.png"
        }

        let contador = 0;
        let intervalo = null;
        let time_out = null;
        let time_click = null;

        function controlador (){
            if(intervalo) clearInterval(intervalo)

                intervalo = setInterval(() => {
                    contador++;
                    console.log("tempo: ", contador);

                    if(contador == 30){
                        cria.src = estados.bravo;
                    }
                    if(contador == 60){
                        cria.src = estados.morto;
                    }
                }, 1000);
	}


    function alimentar() {

    cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
    }

	controlador();