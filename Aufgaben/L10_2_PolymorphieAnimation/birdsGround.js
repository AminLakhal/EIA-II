var L09_Canvas;
(function (L09_Canvas) {
    class birdsGround {
        position;
        velocity;
        _radius = 40;
        constructor(_radius) {
            console.log("bird constructor");
            this.position = new L09_Canvas.Vector(L09_Canvas.getRandomArbitrary(0, 1809), 445);
            this.velocity = new L09_Canvas.Vector(0, 0);
        }
        move(_timeslice) {
            let offset = new L09_Canvas.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        }
        draw(_color) {
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.arc(this.position.x, this.position.y, this._radius, 0, 360);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "purple";
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
            L09_Canvas.crc2.arc(this.position.x + 35, this.position.y - 10, 5, 0, 360);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "black";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.translate(this.position.x, this.position.y);
            L09_Canvas.crc2.moveTo(this.position.x + 35, this.position.y - 20);
            L09_Canvas.crc2.lineTo(this.position.x + 37, this.position.y + 10);
            L09_Canvas.crc2.lineTo(this.position.x + 53, this.position.y + 10);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "black";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
        }
    }
    L09_Canvas.birdsGround = birdsGround;
    function createPickingBirds(_nBirds) {
        console.log("Create Birds");
        for (let i = 0; i < _nBirds; i++) {
            let _pickingBird = new birdsGround(40);
            L09_Canvas.birdsHouse.push(_pickingBird);
            console.log(_pickingBird);
        }
    }
    L09_Canvas.createPickingBirds = createPickingBirds;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=birdsGround.js.map