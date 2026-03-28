//galleria

const containerGallery = document.getElementById('gallery-section');

function inizializzaGalleria(listaFoto) {
    const stage = document.getElementById('featured');
    const caption = document.getElementById('caption');
    const reel = document.getElementById('thumb-reel');

    // 1. Puliamo il reel (utile se cambiamo gita al volo)
    if (!reel || !stage) return;
    reel.innerHTML = '';

    // 2. Carichiamo la prima foto della lista come "copertina"
    if (listaFoto && listaFoto.length > 0) {
        stage.src = listaFoto[0].full;
        caption.innerText = listaFoto[0].alt;
    }

    // 3. Generiamo i provini uno per uno
    listaFoto.forEach((foto, index) => {
        const nuovoProvino = document.createElement('img');
        nuovoProvino.src = foto.thumb;
        nuovoProvino.alt = foto.alt;
        nuovoProvino.classList.add('provino');

        // Se è la prima foto, la evidenziamo subito
        if (index === 0) nuovoProvino.classList.add('active');

        // Gestiamo il CLICK sul provino
        nuovoProvino.addEventListener('click', () => {
            // Effetto dissolvenza: facciamo sparire un attimo la foto
            stage.style.opacity = '0';
            
            setTimeout(() => {
                stage.src = foto.full;
                caption.innerText = foto.alt;
                stage.style.opacity = '1';
            }, 200); // 200ms di attesa prima di riapparire

            // Gestione classe active (la togliamo a tutti e la diamo a questo)
            document.querySelectorAll('.provino').forEach(p => p.classList.remove('active'));
            nuovoProvino.classList.add('active');
        });

        reel.appendChild(nuovoProvino);
    });
}
inizializzaGalleria(Oasi_di_Baggero); // Lanciamo la funzione con la gita che vogliamo mostrare: qui il nome


//animazione foglie

const containerLeafs = document.getElementById('leaf-container');

function createLeaf() {
    // Crea l'elemento div per la foglia
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Posizione di partenza orizzontale casuale (da 0 a 100% della larghezza)
    leaf.style.left = Math.random() * 100 + 'vw';
    
    // Dimensioni casuali per non farle tutte uguali
    const size = (Math.random() * 15 + 10) + 'px';
    leaf.style.width = size;
    leaf.style.height = size;
    
    // Durata della caduta casuale (tra 7 e 12 secondi)
    const duration = (Math.random() * 5 + 7) + 's';
    leaf.style.animation = `fall ${duration} linear infinite`;
    
    // Aggiunge la foglia al contenitore
    containerLeafs.appendChild(leaf);
    
    // Elimina la foglia dopo 12 secondi per non sovraccaricare il PC
    setTimeout(() => {
        leaf.remove();
    }, 12000);
}

// Crea una foglia ogni 800 millisecondi
setInterval(createLeaf, 800);