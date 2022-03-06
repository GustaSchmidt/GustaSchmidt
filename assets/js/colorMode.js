document.addEventListener("DOMContentLoaded", function(event){
    const temaEscuro = window.matchMedia('(prefers-color-scheme: light)');

    if(temaEscuro.matches){
        tema("light");
        
    }else{
        tema("dark");
    }

    //instancia do switch
    var switcherTheme = document.getElementById('toggle_checkbox');
    switcherTheme.addEventListener("change", function(e){   
        var htmlRoot = document.querySelector('html');
        if(htmlRoot.classList.contains("dark-mode")){
            tema("light");
        }else if(htmlRoot.classList.contains("light-mode")){
            tema("dark");
        }
    });
});
function tema(theme){
    var htmlRoot = document.querySelector('html');
    var ilustra = document.getElementsByClassName("ilustra")[0];
    console.log(htmlRoot);
    htmlRoot.classList.remove("dark-mode");
    htmlRoot.classList.remove("light-mode");

    switch (theme) {
        case "dark":
            htmlRoot.classList.add('dark-mode');
            ilustra.src = "./assets/img/ilustra_blue.svg";
            break;

        case "light":
            htmlRoot.classList.add('light-mode');
            ilustra.src = "./assets/img/ilustra_purple.svg";
            break;
    
        default:
            console.warn("thema não existe tema padrão dark");
            tema("dark");
            break;
    }
}