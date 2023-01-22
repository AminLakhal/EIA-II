/*
namespace L09_Canvas {

// Wollte eigentlich die Vögel animieren, damit sie zum Vogelhaus fliegen aber  ლ(ಠ益ಠლ) // at what cost


    export class flyingBirdHouse {

        position: Vector;
        velocity: Vector;
        _radius:number = 40;

        constructor(_radius: number) {
            console.log("bird constructor");
            this.position = new Vector(getRandomArbitrary(0, 1920), getRandomArbitrary(10, 300));
            this.velocity = new Vector(getRandomArbitrary(-200, 200), -10);
        }

        move(_timeslice: number): void {

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

        draw(_color:string): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(this.position.x, this.position.y, this._radius, 0, 360);
            crc2.closePath();
            crc2.fillStyle = _color;
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(this.position.x +0, this.position.y +20);
            crc2.lineTo(this.position.x +10, this.position.y - 0);
            crc2.lineTo(this.position.x -10, this.position.y - 0);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(this.position.x +20, this.position.y-10 , 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(this.position.x -20, this.position.y-10 , 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(this.position.x -60 , this.position.y-20 );
            crc2.lineTo(this.position.x -40, this.position.y);
            crc2.lineTo(this.position.x -60 , this.position.y +20);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(this.position.x +60 , this.position.y-20 );
            crc2.lineTo(this.position.x +40, this.position.y);
            crc2.lineTo(this.position.x +60 , this.position.y +20);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            
            
        }
    }

    export function createBirdsHouse(_nBirds: number){
        console.log("Create Birds");
        for (let i: number = 0; i < _nBirds; i++) {
            let _flyingBird: flyingBirdHouse = new flyingBirdHouse(40);
            birdsHouse.push(_flyingBird);
            console.log(_flyingBird);
        }
    }


}

*/ 
//# sourceMappingURL=birdsHouse.js.map