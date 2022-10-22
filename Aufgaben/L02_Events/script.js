var L02_Events;
(function (L02_Events) {
    console.log("live");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let div0 = document.querySelector("#div0");
        let div1 = document.querySelector("#div1");
        let body = document.querySelector("body");
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        document.querySelector("#button").addEventListener("click", customEvent);
        function setInfoBox(_event) {
            const x = _event.clientX;
            const y = _event.clientY;
            let target = _event.target;
            let span = document.querySelector("#span");
            span.style.top = y + 5 + "px";
            span.style.left = x + 5 + "px";
            span.innerHTML = "x:" + " " + x + " " + "y:" + " " + y + " " + target;
        }
        function logInfo(_event) {
            console.log(_event.type);
            console.log(_event.target);
            console.log(_event.currentTarget);
            console.log(_event);
        }
        function customEvent(_event) {
            // define a custom event that bubbles and carries some information
            let randomstring = "random";
            let event = new CustomEvent("someSpecialType", { bubbles: true, detail: { someKey: randomstring } });
            // send the event from some dispatcher
            const button = document.querySelector("#button");
            button.dispatchEvent(event);
            console.log(event.bubbles);
        }
    }
})(L02_Events || (L02_Events = {}));
//# sourceMappingURL=script.js.map