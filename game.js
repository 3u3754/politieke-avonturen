// Dit bestand bevat de spel logica voor Politieke Avonturen

let choices = []; // Array om keuzes van de speler op te slaan
let score = 0; // Score om de democratische waarde van Nederland te berekenen
let opstand = false; // Variable om bij te houden of er een opstand komt

// Functie voor het maken van keuzes over de politieke stromingen
function makeChoice(choice) {
    choices.push(choice); // Voeg de keuze toe aan de array

    // Verhoog de score afhankelijk van de keuze
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

    // Verhoog de score afhankelijk van de keuze
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

    // Verhoog de score afhankelijk van de keuze
    if (choice === 'schoolstrijd') {
        score -= 5; // Slechte keuze
    } else if (choice === 'neutraliteit') {
        score += 10;
    }

    // Controleer of er een opstand komt
    checkRevolutie();

    // Verberg het schoolstrijd scherm en toon het eindresultaat
    document.getElementById('school-struggle-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    
    // Als er geen opstand is, toon de score
    if (!opstand) {
        document.getElementById('score').textContent = score;
        document.getElementById('result').textContent = getResult();
    } else {
        // Als er een opstand is, toon de video
        document.getElementById('video-container').style.display = 'block';
        document.getElementById('video').src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Opstand video (voorbeeld)
    }
}

// Functie die controleert of er een opstand komt
function checkRevolutie() {
    // Slechte keuzes die leiden tot een opstand
    if (choices.includes('confessionalisme') && choices.includes('beperk')) {
        opstand = true; // Opstand komt door slechte keuzes
    }
}

// Functie om de democratische score te berekenen
function getResult() {
    if (score > 30) {
        return "Nederland is zeer democratisch geworden!";
    } else if (score > 15) {
        return "Nederland is redelijk democratisch.";
    } else {
        return "Nederland is niet zo democratisch geworden.";
    }
}

// Functie om het spel opnieuw te starten
function restartGame() {
    location.reload();
}
