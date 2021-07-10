const contenedorProyectos = $('#container-proyectos')

muestraProyectos(proyectos)

function muestraProyectos(proyectos) {
        
        for(const proyecto of proyectos) {
            contenedorProyectos.append(`

            <li>
                <img class="img-portfolio" src="${proyecto.img}" alt="${proyecto.alt}">
                <div class="caption">
                <h3 class="proyecto-nombre">${proyecto.nombre}</h3>
                <h5 class="proyecto-techs">${proyecto.Techs}</h5>
                    <div class="container-botones">    
                        <button class="boton-link">
                            <a href="${proyecto.linkSitio}" target="_blank">Ir al sitio</a>
                        </button>
                        <button class="boton-link">
                            <a href="${proyecto.linkGithub}" target="_blank">Ir al código</a>
                        </button>   
                    </div>
                </div>
            </li>
            `                    
        )}
}