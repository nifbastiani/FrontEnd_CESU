
function coverToFarenheit() {
  const tempCelsius = document.getElementById("tempCelsius").value;
  const tempFarenheits = ((tempCelsius * 9/5) + 32);

  document.getElementById("tempFarenheit").value = tempFarenheits;
}


function coverToCelsius() {
  const tempFarenheit = document.getElementById("tempFarenheit").value;
  const tempCelsius = ((tempFarenheit -32) * 5/9);

  document.getElementById("tempCelsius").value = tempCelsius;
}

document.getElementById("media").addEventListener("click", calcularMedia);

function calcularMedia(){
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);

  const media = (n1 + n2 + n3)/3;

  const resultado = document.getElementById("resultado");
  let situacao;

  resultado.classList.remove("aprovado", "exame", "reprovado");

  if(media >= 7 && media <=10){
      situacao = "APROVADO";
      resultado.classList.add("aprovado");
  }else if(media <= 6.9 && media >= 4){
      situacao = `EXAME - Falta ${10 - media.toFixed(2)} pontos`;
      resultado.classList.add("exame");
  }else{
      situacao = "REPROVADO";
      resultado.classList.add("reprovado");
  }

  resultado.innerHTML = `<span>${situacao}<br>${media.toFixed(2)}</span>`;

}
