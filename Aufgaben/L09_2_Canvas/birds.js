var L09_Canvas;
(function (L09_Canvas) {
    L09_Canvas.colors = ["red", "blue", "green", "yellow", "brown", "pink"];
    class flyingBird {
        position;
        velocity;
        _radius = 40;
        constructor(_radius) {
            console.log("bird constructor");
            this.position = new L09_Canvas.Vector(L09_Canvas.getRandomArbitrary(0, 1920), L09_Canvas.getRandomArbitrary(10, 300));
            this.velocity = new L09_Canvas.Vector(L09_Canvas.getRandomArbitrary(-200, 200), -10);
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
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.arc(this.position.x, this.position.y, this._radius, 0, 360);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = _color;
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.moveTo(this.position.x + 0, this.position.y + 20);
            L09_Canvas.crc2.lineTo(this.position.x + 10, this.position.y - 0);
            L09_Canvas.crc2.lineTo(this.position.x - 10, this.position.y - 0);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "black";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.arc(this.position.x + 20, this.position.y - 10, 5, 0, 360);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "black";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.arc(this.position.x - 20, this.position.y - 10, 5, 0, 360);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "black";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.moveTo(this.position.x - 60, this.position.y - 20);
            L09_Canvas.crc2.lineTo(this.position.x - 40, this.position.y);
            L09_Canvas.crc2.lineTo(this.position.x - 60, this.position.y + 20);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "black";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.moveTo(this.position.x + 60, this.position.y - 20);
            L09_Canvas.crc2.lineTo(this.position.x + 40, this.position.y);
            L09_Canvas.crc2.lineTo(this.position.x + 60, this.position.y + 20);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "black";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
        }
    }
    L09_Canvas.flyingBird = flyingBird;
    function createBirds(_nBirds) {
        console.log("Create Birds");
        for (let i = 0; i < _nBirds; i++) {
            let _flyingBird = new flyingBird(40);
            L09_Canvas.birds.push(_flyingBird);
            console.log(_flyingBird);
        }
    }
    L09_Canvas.createBirds = createBirds;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=birds.js.map