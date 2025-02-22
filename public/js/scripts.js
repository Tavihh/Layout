function SL(id) {
    const section = document.getElementById(id)
    section.scrollBy({left:-400, behavior: 'smooth'})
}

function SR(id) {
    const section = document.getElementById(id)
    section.scrollBy({left:400, behavior: 'smooth'})
}

async function loadMusicXML() {
    const response = await fetch('./public/parts/partitura.musicxml'); // Busca o arquivo na pasta pública
    const xmlText = await response.text();

    const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmd-container", {
        drawingParameters: "compacttight",
    });
    await osmd.load(xmlText);
    osmd.setOptions({
        scale: 0.5,
        spacingFactor: 0.6  
    });
    osmd.render();
}

// Chama a função ao carregar a página
window.onload = loadMusicXML;