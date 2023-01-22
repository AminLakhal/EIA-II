namespace L09_Canvas {

    export function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function drawSun(_position: Vector2): void {
        console.log("Sun");

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60,100%, 50%, 0");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawCloud(_position: Vector2, _size: Vector2): void {
        console.log("Cloud");

        let nParticles: number = 30;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = (Math.random() * _size.x);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    export function drawMountains(_position: Vector2, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 200;
        let stepMax: number = 300;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();

    }

    export function drawSnowman(): void {
        console.log("Snowman");
        let x: number = getRandomInt(window.innerWidth);
        let y: number = getRandomArbitrary(window.innerHeight/1.54, window.innerHeight/1.2);
        let radius: number = 100;
        for (let i: number = 0; i < 3; i++) {

            crc2.beginPath();
            crc2.arc(x, y, radius, 0, 360);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "white";

            crc2.fill();
            crc2.stroke();

            if (Math.random() <= 0.5) {
                x += getRandomArbitrary(10, 20);
            } else {
                x -= getRandomArbitrary(10, 20);
            }

            radius -= 20;
            y -= 100;

        }

    }



    export function drawBirdHouse(): void {
        console.log("Birdhouse");
        let x: number = getRandomInt(window.innerWidth);
        let y: number = getRandomArbitrary(window.innerHeight/2, window.innerHeight/1.8);
        x = housePos.x;
        y = housePos.y;

        crc2.save();
        crc2.beginPath();
        crc2.rect(x, y, 40, 300);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "brown";
        crc2.stroke();
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.shadowBlur = 2;
        crc2.shadowColor = "black";
        crc2.beginPath();
        crc2.rect(x - 60, y - 160, 160, 160);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.fillStyle = "brown";
        crc2.stroke();
        crc2.fill();
        crc2.restore();

        crc2.save();
        let radius: number = 40;
        crc2.beginPath();
        crc2.arc(x + 20, y - 80, radius, 0, 360);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(x + 20, y - 240);
        crc2.lineTo(x + 100, y - 160);
        crc2.lineTo(x - 60, y - 160);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
    }

    export function drawTree(): void {
        console.log("tree");
        let x: number = getRandomInt(window.innerWidth);
        let y: number = getRandomArbitrary(window.innerHeight/1.96, window.innerHeight/1.54);

        for (let i: number = 0; i < getRandomArbitrary(10, 50); i++) {
            crc2.save();
            crc2.beginPath();
            crc2.rect(x, y, 20, 80);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "brown";
            crc2.stroke();
            crc2.fill();
            crc2.restore();


            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x + 10, y - getRandomArbitrary(150, 350));
            crc2.lineTo(x + 100, y);
            crc2.lineTo(x - 80, y);
            crc2.closePath();
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.restore();

            if (Math.random() <= 0.5) {
                y += 110;
            } else {
                y -= 10;
            }


            x -= getRandomArbitrary(150, 600);

        }
    }

}