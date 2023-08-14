let testimonios = [
    {id: 1, nombre: "Lucila López", palabras: "Daniel is a true model of commitment. His tireless dedication and passion for the work he does are evident in every project we share together. He is always willing to come up with creative solutions, which makes him a great team member! His positive approach to challenges and his willingness to help others overcome obstacles demonstrate his admirable character and ability to motivate those around him. He is always willing to share his experience and provide guidance to those looking to learn and grow. He has great teamwork skills, understands the importance of collaboration, and an ability to adapt and contribute to any group dynamic. Dani will surely continue to be successful and leave a great impression in everything he undertakes!", img: 'img/lucila-lopez.webp',  alt: 'Lucila López', link: 'https://www.linkedin.com/in/lucilalopezabelenda/'},

    {id: 2, nombre: "Florencia Stranges", palabras: "I had the opportunity to work with Dani in two different companies and he is a great colleague. He is very professional, kind and respectful. He has great knowledge in the area and can tackle new challenges in an exceptional way. He is always looking for innovative solutions and is able to adapt quickly to changes. He works very well in a team. He have the ability to listen to the perspectives of others and contribute valuable ideas. Anyone would be very happy to have him on their team!", img: 'img/florencia-stranges.webp',  alt: 'Florencia Stranges', link: 'https://www.linkedin.com/in/florenciastranges/'},
    {id: 3, nombre: "Eugenia Aury", palabras: "Dani is an excellent professional and a great colleague. A very efficient person, detail-oriented, reliable and willing to provide help and support to whoever needs it. His work is impeccable and he is always incorporating new knowledge and tools. Working with him is very rewarding and fun.", img: 'img/eugenia-aury.webp',  alt: 'Eugenia Aury', link: 'https://www.linkedin.com/in/eugenia-aury/'},
    {id: 4, nombre: "Agustina Parra", palabras: "Something that I value about Dani is his proactive attitude to solve his tasks. I highlight his professionalism and commitment when tackling new challenges. It was a pleasure to have worked with him.", img: 'img/agustina-parra.webp',  alt: 'Agustina Parra', link: 'https://www.linkedin.com/in/parraagustina/'},
]

const contenedorTestimonios = $('#container-testimonios')

muestraTestimonios(testimonios)

function muestraTestimonios(testimonios) {
        
    for(const testimonio of testimonios) {
        contenedorTestimonios.append(`
        <blockquote class="wow animate__animated animate__zoomIn">
            <a href="${testimonio.link}" target="_blank">
                <img class="img-testimonio" src="${testimonio.img}" alt="${testimonio.alt}" title="${testimonio.alt}">
            </a>
            <h3>${testimonio.nombre}</h3>             
            <q>${testimonio.palabras}</q>
        </blockquote>
        `                    
    )}
}