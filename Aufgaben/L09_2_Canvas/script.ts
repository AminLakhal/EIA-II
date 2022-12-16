namespace L09_Canvas {

    /*
Aufgabe: <L08_2 Canvas>
Name: <Amin Lakhal>
Matrikel: <271128>
Datum: <17.12.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
    let x: number = getRandomArbitrary(0, window.innerWidth);
    let y: number = getRandomArbitrary(window.innerHeight / 2, window.innerHeight / 1.35);
    let _birdColor: string;
    _birdColor = colors[Math.floor(getRandomArbitrary(0,5)) ];

    export let housePos:Vector2 = {x,y};


    window.addEventListener("load", handleLoad);
    console.log("live");
    export let snowflakes: Snowflake[] = [];
    export let birds: flyingBird[] = [];
    export let birdsHouse: flyingBirdHouse[] = [];
    export let pickingBirds: birdsGround[] = [];
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;

    export interface Vector2 {
        x: number;
        y: number;
    }

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
        createPickingBirds(10);
        createBirdsHouse(2);
        createBirds(10);
        drawTree();
        drawBirdHouse();
        drawSnowman();
        createSnowflakes(1000);

        let newImage = new Image();
        newImage.src = '../L09_2_Canvas/Cartman-PNG.png'


        newImage.onload = () => {
            // Draw the image onto the context
            crc2.drawImage(newImage, x, y, 250, 208);
            crc2.beginPath();
        }

        let imageData: ImageData = crc2.getImageData(0, 0, window.innerWidth, window.innerHeight);

        function update(): void {
            console.log("Update");
            crc2.putImageData(imageData, 0, 0);
            crc2.drawImage(newImage, x, y, 250, 208);

            for (let birdsGround of pickingBirds) {
                birdsGround.move(1 / 50);
                birdsGround.draw(_birdColor);
            }

            for (let flyingBird of birds) {
                flyingBird.move(1 / 50);
                flyingBird.draw(_birdColor);
            }

            for (let flyingBirdHouse of birdsHouse) {
                flyingBirdHouse.move(1 / 50);
                flyingBirdHouse.draw("pink");
            }

            for (let snowflake of snowflakes) {
                snowflake.move(1 / 50);
                snowflake.draw();
            }


        }


        window.setInterval(update, 20);
    }


}