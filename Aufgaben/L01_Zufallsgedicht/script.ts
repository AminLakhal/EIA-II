//# sourceMappingURL=script.js.map
function getRandomInt(max:number) {
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


    const index = bausteine.Subjekt.indexOf(bausteine.Subjekt[x]);
    const index2 = bausteine.Objekt.indexOf(bausteine.Objekt[y]);
    const index3 = bausteine.Prädikat.indexOf(bausteine.Prädikat[z]);

    if (index !== -1) {
        bausteine.Subjekt.splice(index, 1);
        bausteine.Objekt.splice(index, 1);
        bausteine.Prädikat.splice(index, 1);
    }
    x = getRandomInt(bausteine.Subjekt.length);
    y = getRandomInt(bausteine.Prädikat.length);
    z = getRandomInt(bausteine.Objekt.length);
}