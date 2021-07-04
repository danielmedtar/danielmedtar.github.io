const contenedorProyectos = $('#carousel-trabajos')

muestraProyectos(proyectos)

function muestraProyectos(proyectos) {
        
        for(const proyecto of proyectos) {
            contenedorProyectos.append(`

            <div class="carousel-item">
                <div class="card_proyectos">
                    <p class="proyecto-nombre">${proyecto.nombre}</p>
                    <p class="proyecto-techs">${proyecto.Techs}</p>  
                    <div class="container-botones">    
                        <button class="boton-link">
                            <a href="${proyecto.linkSitio}" target="_blank">Ir al sitio</a>
                        </button>

                        <button class="boton-link">
                            <a href="${proyecto.linkGithub}" target="_blank">Ir al código</a>
                        </button>   
                    </div>
                    <img class="img-portfolio" src=${proyecto.img} alt="proyecto">
                </div>
            </div>            
            `                    
        )}
}