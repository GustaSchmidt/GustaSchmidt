document.addEventListener("DOMContentLoaded", function(event){
    const temaEscuro = window.matchMedia('(prefers-color-scheme: light)');
    var htmlRoot = document.querySelector('html');

    if(temaEscuro.matches){
        htmlRoot.classList.add('light-mode');
    }else{
        htmlRoot.classList.add('dark-mode');
        
    }
});