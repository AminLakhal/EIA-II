namespace L08_Canvas {

    console.log("live");

    window.addEventListener("load", genCanvas);
    let button = document.getElementById("button");
    button.addEventListener("click", update);

    function update(): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        canvas.width = 1920;
        canvas.height = 1080;

        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        crc2.fillStyle = "#000000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        genCanvas();
    }

    function genCanvas(): void {


        let canvas: HTMLCanvasElement = document.querySelector("canvas");
        canvas.width = 1920;
        canvas.height = 1080;

        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        crc2.fillStyle = "#000000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        genTriangles(canvas);
        genCircles(canvas);
        genBezier(canvas)

    }

    function genTriangles(canvas: HTMLCanvasElement) {
        for (let i = 0; i < getRandomInt(15); i++) {

            let context: CanvasRenderingContext2D = canvas.getContext("2d");
            context.beginPath();
            context.moveTo(getRandomInt(1920), getRandomInt(1080));
            context.lineTo(getRandomInt(1920), getRandomInt(1080));
            context.lineTo(getRandomInt(1920), getRandomInt(1080));
            context.closePath();
            context.lineWidth = getRandomInt(5);
            context.strokeStyle = "yellow";
            if (getRandomInt(5) == getRandomInt(5)) {

                context.fillStyle = "black";
                context.fill();
            } else if (getRandomInt(5) == getRandomInt(5)) {

                context.fillStyle = "rgb(255," + JSON.stringify(getRandomArbitrary(225, 255)) + ",0)";

                let x = JSON.stringify(context.fillStyle);

                console.log(x);
                context.fill();
            }
            context.stroke();
        }


    }

    function genBezier(canvas: HTMLCanvasElement) {
        for (let i = 0; i < getRandomInt(5); i++) {
            let context: CanvasRenderingContext2D = canvas.getContext("2d");
            context.strokeStyle = "rgb(" + JSON.stringify(getRandomInt(255)) + "," + JSON.stringify(getRandomInt(255)) + "," + JSON.stringify(getRandomInt(255)) + ")";
            context.beginPath();
            context.moveTo(getRandomInt(1920), getRandomInt(1920));
            context.bezierCurveTo(getRandomInt(1920), getRandomInt(1080), getRandomInt(1920), getRandomInt(1080), getRandomInt(1920), getRandomInt(1080));
            context.bezierCurveTo(getRandomInt(1920), getRandomInt(1080), 500, getRandomInt(1080), getRandomInt(1920), getRandomInt(1080));
            context.bezierCurveTo(getRandomInt(1920), getRandomInt(1080), getRandomInt(1920), getRandomInt(1080), getRandomInt(1920), getRandomInt(1080));
            context.stroke();

            context.beginPath();
            context.arc(getRandomInt(1920), getRandomInt(1080), 5, 0, 2 * Math.PI);  // Start point
            context.arc(getRandomInt(1920), getRandomInt(080), 5, 0, 2 * Math.PI);
            context.closePath();
            context.lineWidth = getRandomInt(5);

        }

    }

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    function genCircles(canvas: HTMLCanvasElement) {
        for (let i = 0; i < getRandomInt(15); i++) {


            let context: CanvasRenderingContext2D = canvas.getContext("2d");

            context.beginPath();
            context.arc(getRandomInt(1920), getRandomInt(1080), getRandomArbitrary(100, 200), 0, 360);
            context.closePath();
            context.strokeStyle = "black";
            context.stroke();


            if (getRandomInt(5) == getRandomInt(5)) {

                context.fillStyle = "black";
                context.fill();
            }

        }
    }


}