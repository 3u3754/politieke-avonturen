let gameState = {
    step: 0, // Startpunt van het spel
    choices: [],
    score: 0 // Score voor hoe democratisch het land is geworden
};

function startGame() {
    gameState.step = 1;
    gameState.score = 0; // Begin de score bij 0
    gameState.choices = [];
    showQuestion();
}

function showQuestion() {
    let question = "";
    let choice1 = "";
    let choice2 = "";
    let choice3 = "";
    let image = "";

    switch (gameState.step) {
        case 1:
            question = "Wat vond jij belangrijk in 1848? Kies je voor verandering?";
            choice1 = "Ja, voor een nieuwe grondwet!"; // Verhoog democratie
            choice2 = "Nee, de koning moet de macht behouden."; // Lage democratie
            choice3 = "We moeten wachten en zien wat er gebeurt."; // Neutraal
            image = "https://www.w3schools.com/w3images/forest.jpg";
            break;
        case 2:
            question = "Wie moet de grondwet van 1848 schrijven?";
            choice1 = "Thorbecke, de liberale politicus."; // Verhoog democratie
            choice2 = "De koning, Willem II."; // Lage democratie
            choice3 = "De boeren en arbeiders samen!"; // Verhoog democratie
            image = "https://www.w3schools.com/w3images/forest.jpg";
            break;
        case 3:
            question = "Hoe ga je om met de schoolstrijd?";
            choice1 = "Steun gelijke financiering voor bijzondere scholen."; // Verhoog democratie
            choice2 = "Alleen openbare scholen mogen staatsgeld krijgen."; // Neutraal
            choice3 = "Laten we de scholen in handen van de kerk houden."; // Lage democratie
            image = "https://www.w3schools.com/w3images/forest.jpg";
            break;
        case 4:
            question = "Moet er algemeen kiesrecht komen?";
            choice1 = "Ja, iedereen moet kunnen stemmen!"; // Verhoog democratie
            choice2 = "Nee, alleen rijke mannen mogen stemmen."; // Lage democratie
            choice3 = "Kies een koning om te kiezen wie kan stemmen."; // Neutraal
            image = "https://www.w3schools.com/w3images/forest.jpg";
            break;
        case 5:
            question = "Jij hebt het politieke landschap beïnvloed, maar welk resultaat heeft het?";
            showResult();
            return; // Geen verdere keuzes, einde van het spel
    }

    document.getElementById("question").innerHTML = question;
    document.getElementById("choice1").innerHTML = choice1;
    document.getElementById("choice2").innerHTML = choice2;
    document.getElementById("choice3").innerHTML = choice3;
    document.getElementById("image").src = image;
    document.getElementById("game-screen").style.display = "block";
}

function makeChoice(choice) {
    gameState.choices.push(choice);

    // Verhoog de score op basis van de keuze
    if (choice === 1) {
        gameState.score += 2; // Keuzes die democratie bevorderen verhogen de score
    } else if (choice === 2) {
        gameState.score -= 2; // Keuzes die democratie verminderen verlagen de score
    } else {
        gameState.score += 1; // Neutrale keuzes geven een beetje score
    }

    gameState.step++;
    showQuestion();
}

function showResult() {
    let resultText = "";
    
    // Bepalen van het eindresultaat op basis van de score
    if (gameState.score >= 6) {
        resultText = "Gefeliciteerd! Je hebt Nederland naar een hoger democratisch niveau gebracht! Je hebt gezorgd voor grote veranderingen en vrijheid.";
    } else if (gameState.score >= 3) {
        resultText = "Goed gedaan! Nederland is democratischer geworden, maar er zijn nog enkele uitdagingen om het systeem verder te verbeteren.";
    } else if (gameState.score >= 0) {
        resultText = "Nederland is een beetje democratischer geworden, maar de machtsstructuren blijven sterk. Je hebt gematigde veranderingen doorgevoerd.";
    } else {
        resultText = "Helaas, Nederland is niet veel democratischer geworden. De macht blijft sterk geconcentreerd en de veranderingen zijn minimaal.";
    }

    // Toon de score
    resultText += `<br><br>Je score is: ${gameState.score}/8`;

    document.getElementById("game-screen").style.display = "none";
    document.getElementById("result").innerHTML = resultText;
    document.getElementById("result-screen").style.display = "block";
}

function restartGame() {
    gameState.step = 0;
    gameState.choices = [];
    gameState.score = 0;
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("game-description").style.display = "block";
    document.querySelector("button").style.display = "inline-block";
}
