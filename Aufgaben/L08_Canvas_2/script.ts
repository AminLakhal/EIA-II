namespace L08_Canvas {

    /*
Aufgabe: <L08_2 Canvas>
Name: <Amin Lakhal>
Matrikel: <271128>
Datum: <06.12.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/

    console.log("live");

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    function handleLoad(_event: Event): void {

        golden = 0.62;
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawMountains({ x: 0, y: horizon }, 50, 350, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 72, 200, "grey", "grey");
        drawCloud({ x: 500, y: 55 }, { x: 300, y: 75 });
        drawCloud({ x: 1900, y: 40 }, { x: 300, y: 75 });
        drawBirds();
        drawTree();
        drawBirdHouse();
        drawSnowman();
        drawBirdsGround();
        drawSnow();

    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
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

    function drawCloud(_position: Vector, _size: Vector): void {
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

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
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

    function drawSnowman(): void {
        console.log("Snowman");
        let x: number = getRandomInt(1920);
        let y: number = getRandomArbitrary(700, 900);
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

    function drawSnow(): void {
        console.log("Snow");
        for (let i: number = 0; i < 250; i++) {

            crc2.beginPath();
            crc2.arc(getRandomInt(1920), getRandomInt(1080), getRandomArbitrary(0, 5), 0, 360);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill()
        }

    }

    function drawBirdHouse(): void {
        console.log("Birdhouse");
        let x: number = getRandomInt(1920);
        let y: number = getRandomArbitrary(500, 600);


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

    function drawTree(): void {
        console.log("tree");
        let x: number = getRandomInt(1920);
        let y: number = getRandomArbitrary(550, 700);

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
  
    function drawBirds(): void {



        let colors: string[] = ["red", "blue", "green", "yellow", "brown", "pink"];

        for (let i: number = 0; i < getRandomArbitrary(0, 10); i++) {
            let x: number = getRandomInt(1920);
            let y: number = getRandomArbitrary(100, 500);

// Torso            
            crc2.save();
            let radius: number = 40;
            crc2.beginPath();
            crc2.arc(x + 20, y - 80, radius, 0, 360);
            crc2.closePath();
            crc2.fillStyle = colors[Math.floor(getRandomArbitrary(0, colors.length))];
            crc2.fill();
            crc2.restore();

// Schnabel & Augen

            if (Math.random() <= 0.5) {
                crc2.save();
            crc2.beginPath();
            crc2.moveTo(x + 20, y - 60);
            crc2.lineTo(x + 30, y - 80);
            crc2.lineTo(x + 10, y - 80);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.arc(x + 40, y - 90, 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.arc(x, y - 90, 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();
            } 


// Flügel            

            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x + 80, y - 60);
            crc2.lineTo(x + 80, y - 100);
            crc2.lineTo(x + 60, y - 80);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x - 40, y - 60);
            crc2.lineTo(x - 40, y - 100);
            crc2.lineTo(x - 20, y - 80);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();
        }
    }

    function drawBirdsGround(): void {

        let colors: string[] = ["red", "blue", "green", "yellow", "brown", "pink"];

        for (let i: number = 0; i < getRandomArbitrary(0, 10); i++) {
            let x: number = getRandomInt(1920);
            let y: number = getRandomArbitrary(800, 1000);

// Beine
            crc2.save();
            crc2.beginPath();
            crc2.rect(x, y-50, 2, 20);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "black";
            crc2.stroke();
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.rect(x+40, y-50, 2, 20);
            crc2.closePath();
            crc2.strokeStyle = "black";
            crc2.fillStyle = "black";
            crc2.stroke();
            crc2.fill();
            crc2.restore();

// Torso
            crc2.save();
            let radius: number = 40;
            crc2.beginPath();
            crc2.arc(x + 20, y - 80, radius, 0, 360);
            crc2.closePath();
            crc2.fillStyle = colors[Math.floor(getRandomArbitrary(0, colors.length))];
            crc2.fill();
            crc2.restore();

// Schnabel & Augen

            if (Math.random() <= 0.5) {
                crc2.save();
            crc2.beginPath();
            crc2.moveTo(x + 20, y - 60);
            crc2.lineTo(x + 30, y - 80);
            crc2.lineTo(x + 10, y - 80);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.arc(x + 40, y - 90, 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.arc(x, y - 90, 5, 0, 360);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();
            } 

// Flügel
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x + 65, y - 60);
            crc2.lineTo(x + 65, y - 100);
            crc2.lineTo(x + 60, y - 80);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            crc2.save();
            crc2.beginPath();
            crc2.moveTo(x - 25, y - 60);
            crc2.lineTo(x - 25, y - 100);
            crc2.lineTo(x - 20, y - 80);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();

            
        }

    }

}