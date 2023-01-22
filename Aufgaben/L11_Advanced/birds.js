var L09_Canvas;
(function (L09_Canvas) {
    L09_Canvas.colors = ["red", "blue", "green", "yellow", "brown", "pink"];
    class flyingBird extends L09_Canvas.Moveable {
        constructor(x, y) {
            console.log("bird constructor");
            super(new L09_Canvas.Vector(x, y));
            this.velocity = new L09_Canvas.Vector(50, 50);
        }
        move(_timeslice) {
            let target = new L09_Canvas.Vector(260, 200);
            let distance = target.subtract(this.position);
            let radius = 10;
            this.hitRadius = 40;
            if (distance.length <= radius) {
                // Rest for 10 seconds
                setTimeout(() => {
                    // set velocity again
                    this.velocity.random(10000, 10000);
                }, 1000);
            }
            else {
                distance.normalize();
                distance.scale(50);
                this.velocity = distance;
            }
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
            L09_Canvas.crc2.arc(this.position.x, this.position.y, 40, 0, 360);
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
    function createBirds(_nBirds, _position) {
        console.log("Create Birds");
        for (let i = 0; i < _nBirds; i++) {
            L09_Canvas.moveables.push(new flyingBird(_position.x, _position.y));
            //birds.push(_flyingBird);
        }
    }
    L09_Canvas.createBirds = createBirds;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=birds.js.map