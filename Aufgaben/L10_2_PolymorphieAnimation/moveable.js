var L09_Canvas;
(function (L09_Canvas) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L09_Canvas.Vector(0, 0);
            this.velocity = new L09_Canvas.Vector(0, 0);
            this.velocity.random(100, 200);
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
        draw(_color) {
            // console.log("movable moce");
        }
    }
    L09_Canvas.Moveable = Moveable;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=moveable.js.map