var cores =['violet', 'antiquewhite', 'azure', 'yellow', 'pink', 'blue', 'purple', 'brown', 'chocolate', 'coral', 'crimson', 'firebrick'];
var indice = 0;

document.getElementById('iniciar').addEventListener('click', function(evento){

    evento.preventDefault();

    document.getElementById('tempo').innerHTML = "Começou!!!";
    tempo = setInterval(function (){
        document.getElementById('time').style.backgroundColor = cores[indice];
        console.log('Novamente');
        indice = (indice + 1) % cores.length;
    }, 1000);

})


document.getElementById('parar').addEventListener('click', function(evento){
    evento.preventDefault();

    clearInterval(tempo);
})