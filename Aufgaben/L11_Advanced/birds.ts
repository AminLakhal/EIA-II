namespace L09_Canvas {
    export let colors: string[] = ["red", "blue", "green", "yellow", "brown", "pink"];

    export class flyingBird extends Moveable {


        constructor(_position?: Vector) {
            console.log("bird constructor");

            super(_position);
            this.position = new Vector(getRandomArbitrary(0, 1920), getRandomArbitrary(10, 300));
            this.velocity = new Vector(50, 50);

        }

        public move(_timeslice: number): void {
            let target: Vector = new Vector(260, 200);
            let distance: Vector = target.subtract(this.position);
            let radius: number = 10;
            this.hitRadius = 40;
            
            if (distance.length <= radius) {
                // Rest for 10 seconds
                setTimeout(() => {
                    // set velocity again
                    this.velocity.random(10000,10000);
                }, 1000);
            } else {
                distance.normalize();
                distance.scale(50);
                this.velocity = distance;
            }
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    

        public draw(_color: string): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(this.position.x, this.position.y, 40, 0, 360);
            crc2.closePath();
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(this.position.x + 0, this.position.y + 20);
            crc2.lineTo(this.position.x + 10, this.position.y - 0);
            crc2.lineTo(this.position.x - 10, this.position.y - 0);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(this.position.x + 20, this.position.y - 10, 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(this.position.x - 20, this.position.y - 10, 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(this.position.x - 60, this.position.y - 20);
            crc2.lineTo(this.position.x - 40, this.position.y);
            crc2.lineTo(this.position.x - 60, this.position.y + 20);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(this.position.x + 60, this.position.y - 20);
            crc2.lineTo(this.position.x + 40, this.position.y);
            crc2.lineTo(this.position.x + 60, this.position.y + 20);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();



        }


    }
    

    export function createBirds(_nBirds: number) {
        console.log("Create Birds");
        for (let i: number = 0; i < _nBirds; i++) {
            moveables.push(new flyingBird(new Vector(0, 0)));
            //birds.push(_flyingBird);
        }
    }
}