var L09;
(function (L09) {
    /*
Aufgabe: <L09_OldMacDonaldFarm>
Name: <Amin Lakhal>
Matrikel: <271128>
Datum: <10.12.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
    console.log("live");
    L09.foodStash = { "grass": 500, "corn": 100, "pedigree": 200, "fruits": 300, "mud": 150 };
    let cow;
    let chicken;
    let dog;
    let horse;
    let pig;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        cow = new L09.Animal("Milka", "Mooo", Object.keys(L09.foodStash)[0], Math.floor(L09.getRandomArbitrary(0, L09.foodStash.grass / 4)), "Cow");
        chicken = new L09.Animal("Pika", "Gaaa-Gaaaa", Object.keys(L09.foodStash)[1], Math.floor(L09.getRandomArbitrary(0, L09.foodStash.corn / 4)), "Chicken");
        dog = new L09.Animal("Bolt", "Wuff", Object.keys(L09.foodStash)[2], Math.floor(L09.getRandomArbitrary(0, L09.foodStash.pedigree / 4)), "Dog");
        horse = new L09.Animal("Amadeus", "Wiehern", Object.keys(L09.foodStash)[3], Math.floor(L09.getRandomArbitrary(0, L09.foodStash.fruits / 4)), "Horse");
        pig = new L09.Animal("Ms Piggy", "Chrr Chrr", Object.keys(L09.foodStash)[4], Math.floor(L09.getRandomArbitrary(0, L09.foodStash.mud / 4)), "Pig");
        cow.singSong();
        cow.eat(L09.foodStash);
        chicken.singSong();
        chicken.eat(L09.foodStash);
        dog.singSong();
        dog.eat(L09.foodStash);
        horse.singSong();
        horse.eat(L09.foodStash);
        pig.singSong();
        pig.eat(L09.foodStash);
        L09.counter();
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map