
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

const media = document.getElementById("media");
