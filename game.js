let choices = []; // Array om keuzes van de speler op te slaan
let score = 0; // Score om de democratische waarde van Nederland te berekenen

// Functie voor het maken van keuzes over de politieke stromingen
function makeChoice(choice) {
    choices.push(choice); // Voeg de keuze toe aan de array
    if (choice === 'liberaal') {
        score += 10;
    } else if (choice === 'socialisme') {
        score += 8;
    } else if (choice === 'confessionalisme') {
        score -= 5; // Slechte keuze
    }

    // Verberg de eerste vraag en toon de tweede vraag
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('policy-screen').style.display = 'block';
}

// Functie voor het maken van keuzes over beleid (kiesrecht)
function makePolicyChoice(choice) {
    choices.push(choice); // Voeg de keuze toe aan de array
    if (choice === 'uitbreid') {
        score += 15;
    } else if (choice === 'algemeen') {
        score += 20;
    } else if (choice === 'beperk') {
        score -= 10; // Slechte keuze
    }

    // Verberg het beleidsscherm en toon het schoolstrijd scherm
    document.getElementById('policy-screen').style.display = 'none';
    document.getElementById('school-struggle-screen').style.display = 'block';
}

// Functie voor het maken van keuzes over de schoolstrijd
function makeSchoolStruggleChoice(choice) {
    choices.push(choice); // Voeg de keuze toe aan de array
    if (choice === 'schoolstrijd') {
        score -= 5; // Slechte keuze
    } else if (choice === 'neutraliteit') {
        score += 10;
    }

    // Verberg het schoolstrijd scherm en toon het sociale kwesties scherm
    document.getElementById('school-struggle-screen').style.display = 'none';
    document.getElementById('social-issue-screen').style.display = 'block';
}

// Functie voor het maken van keuzes over sociale kwesties
function makeSocialChoice(choice) {
    choices.push(choice);
    if (choice === 'arbeidersrechten') {
        score += 15;
    } else if (choice === 'geenactie') {
        score -= 10; // Slechte keuze
    }

    // Verberg het sociale kwestie scherm en toon de vrouwenrechten scherm
    document.getElementById('social-issue-screen').style.display = 'none';
    document.getElementById('women-rights-screen').style.display = 'block';
}

// Functie voor het maken van keuzes over vrouwenrechten
function makeWomenRightsChoice(choice) {
    choices.push(choice);
    if (choice === 'stemrecht') {
        score += 20;
    } else if (choice === 'geenstemrecht') {
        score -= 10; // Slechte keuze
    }

    // Toon het eindresultaat
    document.getElementById('women-rights-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';

    // Toon de score en de uitslag
    document.getElementById('score').textContent = `${score} / 5`;
    document.getElementById('result').textContent = getResult();
}

// Functie om de democratische score te berekenen
function getResult() {
    if (score >= 60) {
        return "Nederland is een zeer democratisch land geworden!";
    } else if (score >= 30) {
        return "Nederland is redelijk democratisch, maar er is nog werk aan de winkel.";
    } else {
        return "Nederland is niet zo democratisch geworden. De onvrede leidt tot een opstand!";
    }
}

// Functie om het spel opnieuw te starten
function restartGame() {
    location.reload();
}
