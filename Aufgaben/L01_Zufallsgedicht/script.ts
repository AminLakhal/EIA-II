//# sourceMappingURL=script.js.map
/* Aufgabe:
    <L01_Zufallsgedicht>
        Name:
        <Amin Lakhal>
            Matrikel:
            <271128>
                Datum:15.10.2022
                <Datum der letzten Bearbeitung>
                    Quellen:
                    <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
                        */

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}


var bausteine = {
    Subjekt: [
        "Ein Täter",
        "Jemand",
        "Der Einbrecher",
        "Er",
        "Polizei",
    ],

    Prädikat: [
        "bricht",
        "erwischt",
        "verschwindet",
        "vernichtet",
        "richtet",
    ],

    Objekt: [
        "ins Haus ein",
        "den Täter",
        "vom Tatort",
        "Spuren",
        "Täter",


    ],

}

let x = getRandomInt(bausteine.Subjekt.length);
let y = getRandomInt(bausteine.Prädikat.length);
let z = getRandomInt(bausteine.Objekt.length);
for (let i: number = 0; i < 5; i++) {
    console.log(bausteine.Subjekt[x] + " " + bausteine.Prädikat[y] + " " + bausteine.Objekt[z])

    let index = bausteine.Subjekt.indexOf(bausteine.Subjekt[x]);
    let index3 = bausteine.Prädikat.indexOf(bausteine.Prädikat[y]);
    let index2 = bausteine.Objekt.indexOf(bausteine.Objekt[z]);
console.log(index)
    if (index !== -1) {
        bausteine.Subjekt.splice(index, 1);
        bausteine.Objekt.splice(index2, 1);
        bausteine.Prädikat.splice(index3, 1);
    }
    x = getRandomInt(bausteine.Subjekt.length);
    y = getRandomInt(bausteine.Prädikat.length);
    z = getRandomInt(bausteine.Objekt.length);
}