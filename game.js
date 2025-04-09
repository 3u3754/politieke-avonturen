let score = 0; // Score van de speler
let maxScore = 75; // Maximale score (3 goede keuzes x 15 punten per keuze)

function makeChoice(choice) {
    // Goede keuze
    if (choice === 'liberaal' || choice === 'uitbreid' || choice === 'neutraliteit') {
        score += 15;
    }
    
    // Verberg de vraag en toon de volgende vraag
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('policy-screen').style.display = 'block';
}

function makePolicyChoice(choice) {
    // Goede keuze
    if (choice === 'algemeen' || choice === 'schoolstrijd') {
        score += 15;
    }

    // Verberg het beleidsscherm en toon het schoolstrijd scherm
    document.getElementById('policy-screen').style.display = 'none';
    document.getElementById('school-struggle-screen').style.display = 'block';
}

function makeSchoolStruggleChoice(choice) {
    // Goede keuze
    if (choice === 'neutraliteit' || choice === 'arbeidersrechten') {
        score += 15;
    }

    // Verberg het schoolstrijd scherm en toon het sociale kwesties scherm
    document.getElementById('school-struggle-screen').style.display = 'none';
    document.getElementById('social-issue-screen').style.display = 'block';
}

function makeSocialChoice(choice) {
    // Goede keuze
    if (choice === 'arbeidersrechten' || choice === 'stemrecht') {
        score += 15;
    }

    // Verberg het sociale kwestie scherm en toon de vrouwenrechten scherm
    document.getElementById('social-issue-screen').style.display = 'none';
    document.getElementById('women-rights-screen').style.display = 'block';
}

function makeWomenRightsChoice(choice) {
    // Goede keuze
    if (choice === 'stemrecht') {
        score += 15;
    }

    // Toon het eindresultaat
    document.getElementById('women-rights-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';

    // Toon de score en de uitslag
    document.getElementById('score').textContent = `${score}`;
    document.getElementById('max-score').textContent = `${maxScore}`;
    document.getElementById('result').textContent = getResult();
}

// Functie om de democratische score te berekenen en Rickroll als score onder 45
function getResult() {
    if (score < 45) {
        // Insluiten van de Rickroll-video met autoplay
        document.getElementById('result').innerHTML = "<h3>Je hebt het verknoeid! Je krijgt een rickroll...</h3><iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        return "Nederland is niet zo democratisch geworden... je hebt de opstand veroorzaakt! Je krijgt een rickroll.";
    } else if (score >= 60) {
        return "Nederland is een zeer democratisch land geworden!";
    } else if (score >= 45) {
        return "Nederland is redelijk democratisch, maar er is nog werk aan de winkel.";
    }
}

// Functie om het spel opnieuw te starten
function restartGame() {
    location.reload();
}
