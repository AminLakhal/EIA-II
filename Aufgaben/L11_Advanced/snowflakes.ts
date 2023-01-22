namespace L09_Canvas {

    export class Snowflake extends Moveable {

        type: number;
        size: number;


        constructor(_size: number, _position?: Vector) {
            super(_position);
            this.position = new Vector(getRandomArbitrary(0,window.innerWidth), getRandomArbitrary(0,-window.innerHeight));
            this.velocity = new Vector(getRandomArbitrary(-20,20), getRandomArbitrary(40,70));
            this.size = _size;
            
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

        draw(): void {

            crc2.save();
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(this.position.x, this.position.y, getRandomArbitrary(0, 5), 0, 360);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();
        }
    }

    export function createSnowflakes(_nSnowflakes: number){
        for (let i: number = 0; i < _nSnowflakes; i++) {
            moveables.push(new Snowflake(this._position));
        }
    }


}