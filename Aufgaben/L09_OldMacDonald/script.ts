namespace L09 {
    /*
Aufgabe: <L09_OldMacDonaldFarm>
Name: <Amin Lakhal>
Matrikel: <271128>
Datum: <10.12.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
    console.log("live");
    export let foodStash = { "grass": 500, "corn": 100, "pedigree": 200, "fruits": 300, "mud": 150 };

    
    let cow: Animal;
    let chicken: Animal;
    let dog: Animal;
    let horse: Animal;
    let pig: Animal;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event: Event): void {

        cow = new Animal("Milka", "Mooo", Object.keys(foodStash)[0], Math.floor(getRandomArbitrary(0, foodStash.grass / 4)), "Cow");
        chicken = new Animal("Pika", "Gaaa-Gaaaa", Object.keys(foodStash)[1], Math.floor(getRandomArbitrary(0, foodStash.corn / 4)), "Chicken");
        dog = new Animal("Bolt", "Wuff", Object.keys(foodStash)[2], Math.floor(getRandomArbitrary(0, foodStash.pedigree / 4)), "Dog");
        horse = new Animal("Amadeus", "Wiehern", Object.keys(foodStash)[3], Math.floor(getRandomArbitrary(0, foodStash.fruits / 4)), "Horse");
        pig = new Animal("Ms Piggy", "Chrr Chrr", Object.keys(foodStash)[4], Math.floor(getRandomArbitrary(0, foodStash.mud / 4)), "Pig");

        cow.singSong();
        cow.eat(foodStash);

        chicken.singSong();
        chicken.eat(foodStash);

        dog.singSong();
        dog.eat(foodStash);

        horse.singSong();
        horse.eat(foodStash);

        pig.singSong();
        pig.eat(foodStash);

        counter();
    }
}
