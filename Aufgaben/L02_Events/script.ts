namespace prefix {
    /* Aufgabe:
    <L01_Zufallsgedicht>
        Name:
        <Amin Lakhal>
            Matrikel:
            <271128>
                Datum:22.10.2022
                <Datum der letzten Bearbeitung>
                    Quellen:
                    <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
                        */
}

namespace L02_Events {
    console.log("live");

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        let div0: HTMLElement = document.querySelector("#div0");
        let div1: HTMLElement = document.querySelector("#div1");
        let body: HTMLElement = document.querySelector("body");

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);

        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);

        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo)

        document.querySelector("#button").addEventListener("click", customEvent);

        function setInfoBox(_event: MouseEvent): void {

            const x: number = _event.clientX;
            const y: number = _event.clientY;

            let target: HTMLElement = <HTMLElement>_event.target;
            let span: HTMLSpanElement = document.querySelector("#span");
            span.style.top = y + 5 + "px";
            span.style.left = x + 5 + "px";
            span.innerHTML = "x:" + " " + x + " " + "y:" + " " + y + " " + target;

        }

        function logInfo(_event: Event): void {

            console.log(_event.type);
            console.log(_event.target);
            console.log(_event.currentTarget);
            console.log(_event);

        }

        

        function customEvent(_event: MouseEvent) {
            // define a custom event that bubbles and carries some information
            let randomstring = "random";
            let event: CustomEvent = new CustomEvent("someSpecialType", {bubbles: true, detail: {someKey: randomstring}});
            // send the event from some dispatcher
            const button = document.querySelector("#button")
            
            button.dispatchEvent(event);
            console.log(event.bubbles);
            
            
            
        }
    }
}



