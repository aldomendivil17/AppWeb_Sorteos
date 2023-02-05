function sorteo(){
    let np = document.getElementById('numparticipantes').value;
    let resultado = document.getElementById('resultado');
    let confeti = document.getElementById('confeti');

    if(np >= 2){
        random = Math.floor(Math.random()* np +1);
        resultado.innerHTML = '¡Numero ' + random + ' Ganador!';
        confeti.className = 'on'
        resultado.className = 'ganador'
    }

    else if(np <= 1){
        resultado.innerHTML = "ingresa un numero mayor a uno";
        resultado.className = "error"
        confeti.className = "off"
    } else{
        alert('error')
        confeti.className = "off"
    }
}