const canvas = document.getElementById('projectionCanvas');
const ctx = canvas.getContext('2d');
let projections = [];

// Définir la taille réelle du canvas
canvas.width = 600;
canvas.height = 400;

function dessinerGrille() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#eaeded';
    ctx.lineWidth = 1;
    
    // Lignes verticales
    for (let x = 0; x <= canvas.width; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    // Lignes horizontales
    for (let y = 0; y <= canvas.height; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }
}

function ajouterPlante(type) {
    const x = Math.random() * (canvas.width - 60) + 30;
    const y = Math.random() * (canvas.height - 60) + 30;
    const couleur = type === 'Monstera' ? '#2ecc71' : '#27ae60';
    
    projections.push({ type, x, y, couleur });
    rafraichirCanvas();
}

function rafraichirCanvas() {
    dessinerGrille();
    projections.forEach(p => {
        // Dessin d'un cercle symbolisant la plante
        ctx.beginPath();
        ctx.arc(p.x, p.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = p.couleur;
        ctx.fill();
        
        // Texte indicateur
        ctx.fillStyle = 'white';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(p.type, p.x, p.y + 4);
    });
}

function effacerProjections() {
    projections = [];
    dessinerGrille();
}

// Lancement automatique au chargement
dessinerGrille();