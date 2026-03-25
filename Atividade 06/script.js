const cria = document.getElementById("b");
        const btn = document.getElementById("btn");

        const estados = {
            normal: "b_normal.png",
            bravo: "b_bravo.png",
            morto: "b_morto.png",
            feliz: "b_feliz.png",
            comendo: "b_comendo.png", 
            alimentado: "b_alimentado.png"
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

	controlador();