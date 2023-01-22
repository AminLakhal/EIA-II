var L09_Canvas;
(function (L09_Canvas) {
    class Snowflake extends L09_Canvas.Moveable {
        type;
        size;
        constructor(_size, _position) {
            super(_position);
            console.log("Snowflake constructor");
            this.position = new L09_Canvas.Vector(L09_Canvas.getRandomArbitrary(0, window.innerWidth), L09_Canvas.getRandomArbitrary(0, -window.innerHeight));
            this.velocity = new L09_Canvas.Vector(L09_Canvas.getRandomArbitrary(-20, 20), L09_Canvas.getRandomArbitrary(40, 70));
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new L09_Canvas.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_Canvas.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Canvas.crc2.canvas.height;
            if (this.position.x > L09_Canvas.crc2.canvas.width)
                this.position.x -= L09_Canvas.crc2.canvas.width;
            if (this.position.y > L09_Canvas.crc2.canvas.height)
                this.position.y -= L09_Canvas.crc2.canvas.height;
        }
        draw() {
            console.log("draw Snowflake");
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.arc(this.position.x, this.position.y, L09_Canvas.getRandomArbitrary(0, 5), 0, 360);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "white";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
        }
    }
    L09_Canvas.Snowflake = Snowflake;
    function createSnowflakes(_nSnowflakes) {
        console.log("Create Snowflakes");
        for (let i = 0; i < _nSnowflakes; i++) {
            L09_Canvas.moveables.push(new Snowflake(this._position));
        }
    }
    L09_Canvas.createSnowflakes = createSnowflakes;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=snowflakes.js.map