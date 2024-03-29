namespace L09_Canvas {


    export class birdsGround {

        position: Vector;
        velocity: Vector;
        _radius: number = 40;

        constructor(_radius: number) {
            console.log("bird constructor");
            this.position = new Vector(getRandomArbitrary(0, 1809), 445);
            this.velocity = new Vector(0, 0);

        }

        move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);



        }

        draw(_color: string): void {


            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(this.position.x, this.position.y, this._radius, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "purple";
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
            crc2.arc(this.position.x + 35, this.position.y - 10, 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.moveTo(this.position.x + 35, this.position.y - 20);

            crc2.lineTo(this.position.x + 37, this.position.y + 10);
            crc2.lineTo(this.position.x + 53, this.position.y + 10);


            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();



        }
    }

    export function createPickingBirds(_nBirds: number) {
        console.log("Create Birds");
        for (let i: number = 0; i < _nBirds; i++) {
            let _pickingBird: birdsGround = new birdsGround(40);
            //birdsHouse.push(_pickingBird);
            console.log(_pickingBird);
        }
    }

}