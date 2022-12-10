var L09;
(function (L09) {
    let _display = document.getElementById("display");
    class Animal {
        name;
        sound;
        food;
        amount;
        species;
        constructor(_name, _sound, _food, _amount, _species) {
            this.name = _name;
            this.sound = _sound;
            this.food = _food;
            this.amount = _amount;
            this.species = _species;
        }
        singSong() {
            console.log("sing");
            let songText = document.createElement("p");
            console.log(this.species);
            songText.innerHTML = "Old MacDonald had a farm Ee i ee i o And on his farm he had a " + this.species + " Ee i ee i oh With a " + this.sound + " here And a " + this.sound + " there Here a " + this.sound + ", there a moo Everywhere a " + this.sound;
            _display.appendChild(songText);
        }
        eat(_foodStash) {
            console.log("eat");
            let foodCounter = document.createElement("p");
            foodCounter.innerText = (this.species + " " + this.name + " ate " + this.amount + " pounds of " + this.food);
            foodCounter.setAttribute("id", this.name);
            _display.appendChild(foodCounter);
            _foodStash[this.food] -= this.amount;
            console.log(_foodStash[this.food]);
        }
    }
    L09.Animal = Animal;
    function counter() {
        let counter = document.getElementById("foodCounter");
        counter.innerText = (Object.keys(L09.foodStash)[0] + ":" + L09.foodStash.grass + '\n' +
            Object.keys(L09.foodStash)[1] + ":" + L09.foodStash.corn + '\n' +
            Object.keys(L09.foodStash)[2] + ":" + L09.foodStash.pedigree + '\n' +
            Object.keys(L09.foodStash)[3] + ":" + L09.foodStash.fruits + '\n' +
            Object.keys(L09.foodStash)[4] + ":" + L09.foodStash.mud + '\n');
    }
    L09.counter = counter;
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    L09.getRandomArbitrary = getRandomArbitrary;
})(L09 || (L09 = {}));
//# sourceMappingURL=Animal.js.map