var L09_Canvas;
(function (L09_Canvas) {
    /*
Aufgabe: <L08_2 Canvas>
Name: <Amin Lakhal>
Matrikel: <271128>
Datum: <17.12.2022>
Quellen: <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
*/
    let x = L09_Canvas.getRandomArbitrary(0, window.innerWidth);
    let y = L09_Canvas.getRandomArbitrary(window.innerHeight / 2, window.innerHeight / 1.35);
    let _birdColor;
    _birdColor = L09_Canvas.colors[Math.floor(L09_Canvas.getRandomArbitrary(0, 5))];
    L09_Canvas.housePos = { x, y };
    window.addEventListener("load", handleLoad);
    console.log("live");
    L09_Canvas.moveables = [];
    L09_Canvas.birdsHouse = [];
    L09_Canvas.pickingBirds = [];
    L09_Canvas.golden = 0.62;
    function handleLoad(_event) {
        L09_Canvas.golden = 0.62;
        let canvas = document.querySelector("canvas");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        if (!canvas)
            return;
        L09_Canvas.crc2 = canvas.getContext("2d");
        let horizon = L09_Canvas.crc2.canvas.height * L09_Canvas.golden;
        L09_Canvas.drawBackground();
        L09_Canvas.drawSun({ x: 100, y: 75 });
        L09_Canvas.drawMountains({ x: 0, y: horizon }, 50, 350, "grey", "white");
        L09_Canvas.drawMountains({ x: 0, y: horizon }, 72, 200, "grey", "grey");
        L09_Canvas.drawCloud({ x: 500, y: 55 }, { x: 300, y: 75 });
        L09_Canvas.drawCloud({ x: 1900, y: 40 }, { x: 300, y: 75 });
        L09_Canvas.createPickingBirds(10);
        L09_Canvas.createBirdsHouse(2);
        L09_Canvas.createBirds(20);
        L09_Canvas.drawTree();
        L09_Canvas.drawBirdHouse();
        L09_Canvas.drawSnowman();
        L09_Canvas.createSnowflakes(1000);
        let newImage = new Image();
        newImage.src = '../L09_2_Canvas/Cartman-PNG.png';
        newImage.onload = () => {
            // Draw the image onto the context
            L09_Canvas.crc2.drawImage(newImage, x, y, 250, 208);
            L09_Canvas.crc2.beginPath();
        };
        let imageData = L09_Canvas.crc2.getImageData(0, 0, window.innerWidth, window.innerHeight);
        function update() {
            console.log("Update");
            L09_Canvas.crc2.putImageData(imageData, 0, 0);
            L09_Canvas.crc2.drawImage(newImage, x, y, 250, 208);
            for (let birdsGround of L09_Canvas.pickingBirds) {
                birdsGround.move(1 / 50);
                birdsGround.draw(_birdColor);
            }
            for (let flyingBirdHouse of L09_Canvas.birdsHouse) {
                flyingBirdHouse.move(1 / 50);
                flyingBirdHouse.draw("pink");
            }
            for (let Moveable of L09_Canvas.moveables) {
                if (Moveable instanceof L09_Canvas.Snowflake) {
                    Moveable.move(1 / 50);
                    Moveable.draw();
                }
                if (Moveable instanceof L09_Canvas.flyingBird) {
                    Moveable.move(1 / 50);
                    Moveable.draw(_birdColor);
                }
            }
        }
        window.setInterval(update, 20);
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=script.js.map