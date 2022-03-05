document.addEventListener("DOMContentLoaded", function(event){
    const temaEscuro = window.matchMedia('(prefers-color-scheme: light)');
    var htmlRoot = document.querySelector('html');

    var ilustra = document.getElementsByClassName("ilustra")[0];

    if(temaEscuro.matches){
        htmlRoot.classList.add('light-mode');
        ilustra.src = "./assets/img/ilustra_purple.svg";
    }else{
        htmlRoot.classList.add('dark-mode');
        ilustra.src = "./assets/img/ilustra_blue.svg";
    }
});