let proyectos = [
    {nombre: "Argentinian salary calculator", Techs: "HTML5, CSS3, JavaScript", img: 'img/calculadora-sueldos.png', linkSitio: 'https://danielmedtar.github.io/calculadora-sueldo/', linkGithub: 'https://github.com/danielmedtar/calculadora-sueldo', alt: 'imagen calculadora de sueldos'},
    {nombre: "Developer Shop", Techs: "HTML5, CSS3, Bootstrap, React JS", img: 'img/developer_shop.png', linkSitio: 'https://danielmedina-proyectoreact.netlify.app/', linkGithub: 'https://github.com/danielmedtar/proyecto-reactjs', alt: 'imagen devshop'},
    {nombre: "Weather App", Techs: "HTML5, CSS3, JavaScript, API Open Weather", img: 'img/app_clima.png', linkSitio: 'https://danielmedina-appclima.netlify.app', linkGithub: 'https://github.com/danielmedtar/app_clima', alt: 'imagen app clima'},
    {nombre: "Calculator", Techs: "HTML5, CSS3, JavaScript", img: 'img/calculadora.png', linkSitio: 'https://danielmedtar.github.io/Calculadora-JS/', linkGithub: 'https://github.com/danielmedtar/Calculadora-JS', alt: 'imagen calculadora'},
    {nombre: "Aneplanner - Community Manager", Techs: "HTML5, CSS3, Bootstrap, SASS, GIT", img: 'img/aneplanner.png', linkSitio: 'https://danielmedtar.github.io/Aneplanner/', linkGithub: 'https://github.com/danielmedtar/Aneplanner', alt: 'imagen aneplanner'}
]

const contenedorProyectos = $('#container-proyectos')

muestraProyectos(proyectos)

function muestraProyectos(proyectos) {
        
        for(const proyecto of proyectos) {
            contenedorProyectos.append(`
            <div class="card-proyectos">
                <h3 class="proyecto-nombre">${proyecto.nombre}</h3>
                <h5 class="proyecto-techs">${proyecto.Techs}</h5>
                <a href="${proyecto.linkSitio}" target="_blank">
                    <img class="img-portfolio" src="${proyecto.img}" alt="${proyecto.alt}">
                </a>
                    
                <div class="container-botones">
                    <button class="boton-link">
                        <a href="${proyecto.linkSitio}" target="_blank">Go to Site</a>
                    </button>   
                    <button class="boton-link">
                        <a href="${proyecto.linkGithub}" target="_blank">Go to Code</a>
                    </button>   
                </div>
                    
            </div>
            
            `                    
        )}
}