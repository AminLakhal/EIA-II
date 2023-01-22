var L09_Canvas;
(function (L09_Canvas) {
    function drawBackground() {
        console.log("Background");
        let gradient = L09_Canvas.crc2.createLinearGradient(0, 0, 0, L09_Canvas.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(L09_Canvas.golden, "white");
        L09_Canvas.crc2.fillStyle = gradient;
        L09_Canvas.crc2.fillRect(0, 0, L09_Canvas.crc2.canvas.width, L09_Canvas.crc2.canvas.height);
    }
    L09_Canvas.drawBackground = drawBackground;
    function drawSun(_position) {
        console.log("Sun");
        let r1 = 30;
        let r2 = 150;
        let gradient = L09_Canvas.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60,100%, 50%, 0");
        L09_Canvas.crc2.save();
        L09_Canvas.crc2.translate(_position.x, _position.y);
        L09_Canvas.crc2.fillStyle = gradient;
        L09_Canvas.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_Canvas.crc2.fill();
        L09_Canvas.crc2.restore();
    }
    L09_Canvas.drawSun = drawSun;
    function drawCloud(_position, _size) {
        console.log("Cloud");
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = L09_Canvas.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        L09_Canvas.crc2.save();
        L09_Canvas.crc2.translate(_position.x, _position.y);
        L09_Canvas.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L09_Canvas.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.x);
            L09_Canvas.crc2.translate(x, y);
            L09_Canvas.crc2.fill(particle);
            L09_Canvas.crc2.restore();
        }
        L09_Canvas.crc2.restore();
    }
    L09_Canvas.drawCloud = drawCloud;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 200;
        let stepMax = 300;
        let x = 0;
        L09_Canvas.crc2.save();
        L09_Canvas.crc2.translate(_position.x, _position.y);
        L09_Canvas.crc2.beginPath();
        L09_Canvas.crc2.moveTo(0, 0);
        L09_Canvas.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L09_Canvas.crc2.lineTo(x, y);
        } while (x < L09_Canvas.crc2.canvas.width);
        L09_Canvas.crc2.lineTo(x, 0);
        L09_Canvas.crc2.closePath();
        let gradient = L09_Canvas.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_Canvas.crc2.fillStyle = gradient;
        L09_Canvas.crc2.fill();
        L09_Canvas.crc2.restore();
    }
    L09_Canvas.drawMountains = drawMountains;
    function drawSnowman() {
        console.log("Snowman");
        let x = L09_Canvas.getRandomInt(window.innerWidth);
        let y = L09_Canvas.getRandomArbitrary(window.innerHeight / 1.54, window.innerHeight / 1.2);
        let radius = 100;
        for (let i = 0; i < 3; i++) {
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.arc(x, y, radius, 0, 360);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.strokeStyle = "black";
            L09_Canvas.crc2.fillStyle = "white";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.stroke();
            if (Math.random() <= 0.5) {
                x += L09_Canvas.getRandomArbitrary(10, 20);
            }
            else {
                x -= L09_Canvas.getRandomArbitrary(10, 20);
            }
            radius -= 20;
            y -= 100;
        }
    }
    L09_Canvas.drawSnowman = drawSnowman;
    function drawBirdHouse() {
        console.log("Birdhouse");
        //let x: number = getRandomInt(window.innerWidth);
        //let y: number = getRandomArbitrary(window.innerHeight/2, window.innerHeight/1.8);
        let x = L09_Canvas.getRandomInt(window.innerWidth);
        let y = L09_Canvas.getRandomArbitrary(window.innerHeight / 2, window.innerHeight / 1.8);
        x = 500;
        y = 500;
        L09_Canvas.crc2.save();
        L09_Canvas.crc2.beginPath();
        L09_Canvas.crc2.rect(x, y, 40, 300);
        L09_Canvas.crc2.closePath();
        L09_Canvas.crc2.strokeStyle = "black";
        L09_Canvas.crc2.fillStyle = "brown";
        L09_Canvas.crc2.stroke();
        L09_Canvas.crc2.fill();
        L09_Canvas.crc2.restore();
        L09_Canvas.crc2.save();
        L09_Canvas.crc2.shadowBlur = 2;
        L09_Canvas.crc2.shadowColor = "black";
        L09_Canvas.crc2.beginPath();
        L09_Canvas.crc2.rect(x - 60, y - 160, 160, 160);
        L09_Canvas.crc2.closePath();
        L09_Canvas.crc2.strokeStyle = "black";
        L09_Canvas.crc2.fillStyle = "brown";
        L09_Canvas.crc2.stroke();
        L09_Canvas.crc2.fill();
        L09_Canvas.crc2.restore();
        L09_Canvas.crc2.save();
        let radius = 40;
        L09_Canvas.crc2.beginPath();
        L09_Canvas.crc2.arc(x + 20, y - 80, radius, 0, 360);
        L09_Canvas.crc2.closePath();
        L09_Canvas.crc2.fillStyle = "black";
        L09_Canvas.crc2.fill();
        L09_Canvas.crc2.restore();
        L09_Canvas.crc2.save();
        L09_Canvas.crc2.beginPath();
        L09_Canvas.crc2.moveTo(x + 20, y - 240);
        L09_Canvas.crc2.lineTo(x + 100, y - 160);
        L09_Canvas.crc2.lineTo(x - 60, y - 160);
        L09_Canvas.crc2.closePath();
        L09_Canvas.crc2.fillStyle = "black";
        L09_Canvas.crc2.fill();
        L09_Canvas.crc2.restore();
    }
    L09_Canvas.drawBirdHouse = drawBirdHouse;
    function drawTree() {
        console.log("tree");
        let x = L09_Canvas.getRandomInt(window.innerWidth);
        let y = L09_Canvas.getRandomArbitrary(window.innerHeight / 1.96, window.innerHeight / 1.54);
        for (let i = 0; i < L09_Canvas.getRandomArbitrary(10, 50); i++) {
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.rect(x, y, 20, 80);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.strokeStyle = "black";
            L09_Canvas.crc2.fillStyle = "brown";
            L09_Canvas.crc2.stroke();
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
            L09_Canvas.crc2.save();
            L09_Canvas.crc2.beginPath();
            L09_Canvas.crc2.moveTo(x + 10, y - L09_Canvas.getRandomArbitrary(150, 350));
            L09_Canvas.crc2.lineTo(x + 100, y);
            L09_Canvas.crc2.lineTo(x - 80, y);
            L09_Canvas.crc2.closePath();
            L09_Canvas.crc2.fillStyle = "green";
            L09_Canvas.crc2.fill();
            L09_Canvas.crc2.restore();
            if (Math.random() <= 0.5) {
                y += 110;
            }
            else {
                y -= 10;
            }
            x -= L09_Canvas.getRandomArbitrary(150, 600);
        }
    }
    L09_Canvas.drawTree = drawTree;
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=background.js.map