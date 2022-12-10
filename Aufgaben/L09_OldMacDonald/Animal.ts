namespace L09 {

    let _display: HTMLElement = document.getElementById("display");

    export class Animal {
        name: string;
        sound: string;
        food: string;
        amount: number;
        species: string;

        constructor(_name: string, _sound: string, _food: string, _amount: number, _species: string) {
            this.name = _name;
            this.sound = _sound;
            this.food = _food;
            this.amount = _amount;
            this.species = _species;
        }

        singSong(): void {

            console.log("sing");
            let songText: HTMLParagraphElement = document.createElement("p");
            console.log(this.species);
            songText.innerHTML = "Old MacDonald had a farm Ee i ee i o And on his farm he had a " + this.species + " Ee i ee i oh With a " + this.sound + " here And a " + this.sound + " there Here a " + this.sound + ", there a moo Everywhere a " + this.sound;
            _display.appendChild(songText);
        }

        eat(_foodStash: {}): void {
            console.log("eat");
            let foodCounter: HTMLParagraphElement = document.createElement("p");
            foodCounter.innerText = (
                this.species + " " + this.name + " ate " + this.amount + " pounds of " + this.food
            );
            foodCounter.setAttribute("id", this.name);
            _display.appendChild(foodCounter);
            _foodStash[this.food] -= this.amount;

            console.log(_foodStash[this.food])
        }

    }

    export function counter(): void {
        let counter = document.getElementById("foodCounter");
        counter.innerText = (
            Object.keys(foodStash)[0] + ":" + foodStash.grass + '\n' +
            Object.keys(foodStash)[1] + ":" + foodStash.corn + '\n' +
            Object.keys(foodStash)[2] + ":" + foodStash.pedigree + '\n' +
            Object.keys(foodStash)[3] + ":" + foodStash.fruits + '\n' +
            Object.keys(foodStash)[4] + ":" + foodStash.mud + '\n'
        );
    }

    export function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
