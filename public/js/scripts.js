function SL(id) {
    const section = document.getElementById(id)
    section.scrollBy({left:-400, behavior: 'smooth'})
}

function SR(id) {
    const section = document.getElementById(id)
    section.scrollBy({left:400, behavior: 'smooth'})
}