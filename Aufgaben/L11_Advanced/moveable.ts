namespace L09_Canvas {

    export class Moveable {

        public position: Vector;
        public velocity: Vector;
        public explandable : boolean = false;

        protected hitRadius: number = 0; 
        
        constructor(_position: Vector) {
            
            
            if (_position)
            this.position = _position.copy();
            else
            this.position = new Vector(0,0);

            this.velocity = new Vector(0,0);
            this.velocity.random(100,200);


        }

        public hit():void {
            console.log("Hit", this);
            this.explandable = true;
        }

       public move(_timeslice: number): void {

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

        public draw(_color:string): void {
            // console.log("movable moce");
        }   
    }


}