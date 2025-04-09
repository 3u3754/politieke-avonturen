// Dit bestand bevat de spel logica voor Politieke Avonturen

let choices = []; // Array om keuzes van de speler op te slaan
let opstand = false; // Variable om bij te houden of er een opstand komt

// Functie voor het maken van keuzes over de politieke stromingen
function makeChoice(choice) {
    choices.push(choice); // Voeg de keuze toe aan de array

    // Verberg de eerste vraag en toon de tweede vraag
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('policy-screen').style.display = 'block';
}

// Functie voor het maken van keuzes over beleid
function makePolicyChoice(choice) {
    choices.push(choice); // Voeg de keuze toe aan de array

    // Controleer of de keuzes leiden tot een opstand
    checkRevolutie();

    // Verberg het beleidsscherm en toon het resultaat
    document.getElementById('policy-screen').style.display = 'none';
    if (opstand) {
        document.getElementById('video-container').style.display = 'block';
        document.getElementById('video').src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Opstand video (voorbeeld)
    } else {
        alert('Nederland is stabiel en heeft zich goed ontwikkeld! Goed gedaan!');
    }
}

// Functie die controleert of er een opstand komt
function checkRevolutie() {
    // Verkeerde keuzes die leiden tot een opstand
    if (choices.includes('confessionalisme') && choices.includes('beperk')) {
        opstand = true; // Opstand komt door slechte keuzes
    }
}

// Functie om het spel opnieuw te starten
function restartGame() {
    // Herlaad de pagina om het spel opnieuw te starten
    location.reload();
}
