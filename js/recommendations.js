let testimonios = [
    {id: 1, nombre: "Nicolas Seguro", palabras: "Dani is always willing to share his experience and time. He knows how to work in a team and create a comfortable environment. He is flexible and focused", img: 'img/nicolas.jpg',  alt: 'imagen testimonio', link: 'https://www.linkedin.com/in/nicol%C3%A1s-seguro/'},
    {id: 2, nombre: "Florencia Stranges", palabras: "I was able to be in the same work group with Daniel and he is a great colleague, very responsible and proactive at work. He is a team person, always ready to help and never has a bad answer for others.", img: 'img/florencia.jpg',  alt: 'imagen testimonio', link: 'https://www.linkedin.com/in/florenciastranges/'},
    {id: 3, nombre: "Federico Castro", palabras: "Daniel is a solid professional. Their contributions in class enrich the teaching and learning of students. His patience and pro-activity stand out to resolve everything quickly and effectively. Nice to be your partner", img: 'img/federico.jpg',  alt: 'imagen testimonio', link: 'https://www.linkedin.com/in/castro-federico/'},
    {id: 4, nombre: "Luciano Giraudi", palabras: "I have the pleasure of working with Daniel in the same group of tutors, he has a great vocation for teaching and develops with complete professionalism in the tasks assigned to him", img: 'img/luciano.jpg',  alt: 'imagen testimonio', link: 'https://www.linkedin.com/in/lucianogiraudi/'}
]

const contenedorTestimonios = $('#container-testimonios')

muestraTestimonios(testimonios)

function muestraTestimonios(testimonios) {
        
    for(const testimonio of testimonios) {
        contenedorTestimonios.append(`
        <blockquote class="wow animate__animated animate__zoomIn">
            <a href="${testimonio.link}" target="_blank">
                <img class="img-testimonio" src="${testimonio.img}" alt="${testimonio.alt}">
            </a>
            <h3>${testimonio.nombre}</h3>             
            <q>${testimonio.palabras}</q>
        </blockquote>
        `                    
    )}
}