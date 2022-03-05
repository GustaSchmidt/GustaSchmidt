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
        getAPI("https://api.github.com/repos/"+projectURL).then(function(repoResponse){
            if(repoResponse === false){
                return false;
            }
            //Carregando modelo em DOM           
            var projectsList = document.querySelector("#project-list");
            var template = document.querySelector("#project-list template");
            var projectDOM = document.createElement(template.attributes.element.nodeValue);
            projectDOM.appendChild(document.importNode(template.content, true));

            //Alterando valores do model
            var img = projectDOM.getElementsByClassName('project-img')[0];
            var title = projectDOM.getElementsByClassName('project-title')[0];
            var descricao = projectDOM.getElementsByClassName('desc')[0];
            var projectTags = projectDOM.getElementsByClassName('project-tags')[0];

            title.textContent = repoResponse.name;
            descricao.textContent = repoResponse.description;

            //Adiciona tags de linguagens utilizadas no projeto
            getAPI(repoResponse.languages_url).then(function(langs){
                for (var key in langs){
                    var lagnTag = document.createElement(projectTags.firstElementChild.nodeName);
                    lagnTag.textContent = key;
                    projectTags.appendChild(lagnTag);

                    //Adicona na lista
                    projectsList.appendChild(projectDOM);
                }
                projectTags.removeChild(projectTags.firstElementChild);

                //Loader
                var loader = document.querySelector('.lds-grid'); 
                loader.style.display = "none";
            });
        });
        
    }
}
async function getAPI(URL) {
    const response = await fetch(URL, {method: 'GET'});
    if(response.status === 200){
        return await response.json();
    }else{
        return false;
    }
}
async function dateUpdate(){
    getAPI("https://api.github.com/repos/GustaSchmidt/GustaSchmidt").then(function(thisRepo){
        var date = new Date(thisRepo.updated_at);
        var meses = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];
        var msg = document.getElementById('update-msg');
        msg.innerText = "Atualizado em "+meses[date.getMonth()]+" de "+date.getFullYear();
    });
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

    //atualizar footer msg update
    dateUpdate();
});



