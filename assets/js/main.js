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



