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
                    
                <button class="boton-link">
                    <a href="${proyecto.linkGithub}" target="_blank">Ir al código</a>
                </button>   
                    
            </div>
            
            `                    
        )}
}

const contenedorTestimonios = $('#container-testimonios')

muestraTestimonios(testimonios)

function muestraTestimonios(testimonios) {
        
    for(const testimonio of testimonios) {
        contenedorTestimonios.append(`
        <blockquote>
            <a href="${testimonio.link}" target="_blank">
                <img class="img-testimonio" src="${testimonio.img}" alt="${testimonio.alt}">
            </a>
            <h3>${testimonio.nombre}</h3>             
            <q>${testimonio.palabras}</q>
        </blockquote>
        `                    
    )}
}