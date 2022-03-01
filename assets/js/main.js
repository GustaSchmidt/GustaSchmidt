var configs = {
    "linkeding_user": "gusta-schmidt",
    "github_user": "GustaSchmidt",
    "email": "gustavo.schmidt@protonmail.ch",
    "projetos": [
        {
            "github": 'festival-helper',
            "thumb_url": '',
        },
        {
            "github": 'Waffle-Team/waffle-chat',
            "thumb_url": '',
        },
        
    ]

};
function loadProjects(){
    var modelHTML = `
        <li>
            <img src="./assets/captura_de_tela.png" alt="">
            <div class="conteiner-desc">
                <h3>Titulo do projeto</h3>
                <div class="project-tags">  
                    <span>Lang</span>
                </div>
                <p class="desc">
                    Lorem Ipsum
                </p>
            </div>
        </li>
    `;
    for (let index = 0; index < configs.projetos.length; index++) {
        const project = configs.projetos[index];
        
        //Verifica se foi passado usuario na url do git
        var projectURL = project.github.split(/\//);
        if(projectURL.length == 2){
            projectURL = project.github;
        }else{
            projectURL = configs.github_user+'/'+project.github;
        }

        //Request API github
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.responseText);
                console.log(response);
                //Monta repositorio no layout

            }
        };
        xhttp.open("GET", "https://api.github.com/repos/"+projectURL, true);
        xhttp.send();
        
    }

}
document.addEventListener("DOMContentLoaded", function(event) {
    // Definindo links do footer
    var emailLink = document.querySelector("#mail-link");
    var linkedinLink = document.querySelector("#linkedin-link");
    var githubLink = document.querySelector("#github-link");
    var otherProjects = document.querySelector("#projetos #vermais-link");

    emailLink.href = "mailto:"+configs.email;
    linkedinLink.href = "https://www.linkedin.com/in/"+configs.linkeding_user+"/";
    githubLink.href = "https://github.com/"+configs.github_user;
    otherProjects.href = "https://github.com/"+configs.github_user+"?tab=repositories";

    
    // Smooth scrool dos links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //Carregar projetos
    loadProjects();

});



