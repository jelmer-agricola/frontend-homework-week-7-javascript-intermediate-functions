// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

let cumLaudeCount = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeCount++;
    }
}
console.log(cumLaudeCount);

// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude(gradesArray) {
    let count = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] >= 8) {
            count++;
        }
    }
    return count;
}

const timesCumLaudeOne = cumLaude(grades);
const timesCumLaudeTwo = cumLaude([6, 4, 5, 6, 6, 6, 6, 6,]);
const timesCumLaudeThree = cumLaude([8, 9, 4, 6, 10]);

console.log(timesCumLaudeOne);
console.log(timesCumLaudeTwo);
console.log(timesCumLaudeThree);

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:


// * Hoe wordt een gemiddelde berekend? -->  sumOf grades delen door (last index + 1)
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen? Totaal en dat delen door index + 1
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.
// ---- Verwachte uitkomst: 6.642857142857143

let total = 0;

for (let i = 0; i < grades.length; i++) {
    total = total + grades[i];

}
console.log(grades.length);

function averageGrade(gradesArray) {
    let total = 0;
    // calculating average
    // counting how many elements
    // satisfies the condition.
    for (let i = 0; i < gradesArray.length; i++) {
        total = total + gradesArray[i];
    }
    return total / gradesArray.length;
}

const averageGradeOne = averageGrade(grades);
const averageGradeTwo = averageGrade([6, 4, 5,]);
const averageGradeThree = averageGrade([8, 9, 4, 6, 10]);

console.log(averageGradeOne);
console.log(averageGradeTwo);
console.log(averageGradeThree);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

console.log(averageGradeOne.toFixed(1));
console.log(averageGradeTwo.toFixed(1));
console.log(averageGradeThree.toFixed(1));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

function highestGrade(gradesArray) {
    let number = 0;



    for (let i = 0; i < gradesArray.length; i++) {
// wat gradesArray.length dus doet is blijven loopen ook als de array groter wordt. Als je er een getal neerzet blift de array namelijk alleen maar loopen tot dei bepaalde index.

        if (gradesArray[i] > number) {
            number = gradesArray[i];
        }
    }

    return number;
}


const highestGradeOne = highestGrade(grades);
const highestGradeTwo = highestGrade([6, 4, 5, 111]);
const highestGradeThree = highestGrade([8, 9, 4, 6, 10]);



console.log(highestGradeOne);
console.log(highestGradeTwo);
console.log(highestGradeThree);
/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
