var L06;
(function (L06) {
    /* Aufgabe:
        <L01_Zufallsgedicht>
            Name:
            <Amin Lakhal>
                Matrikel:
                <271128>
                    Datum:15.11.2022
                    <Datum der letzten Bearbeitung>
                        Quellen:
                        <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
                            */
    let url = "https://webuser.hs-furtwangen.de/~lakhalam/Database/index.php/";
    let produkt = document.getElementById("produkt");
    let menge = document.getElementById("menge");
    let comment = document.getElementById("comment");
    L06.display = document.querySelector(".display");
    L06.listLength = L06.display.childElementCount;
    let inputMenge;
    let inputName;
    let inputComment;
    let currentDate;
    let myForm = document.getElementById("sendform");
    let button = document.getElementById("button");
    button.addEventListener("click", addItem);
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        let response = await fetch("https://webuser.hs-furtwangen.de/~lakhalam/Database/index.php/?command=find&collection=Data");
        let offer = await response.text();
        let data = JSON.parse(offer);
        L06.generateContent(data);
        const collection = document.getElementsByClassName("collection");
        for (let i = 0; i < collection.length; i++) {
            collection[i].addEventListener("keypress", function (event) {
                if (event.key === "Enter" && produkt.value != "" && menge.value != "") {
                    event.preventDefault();
                    mybuttonHandler();
                    console.log(button);
                    button.click();
                    clearInput();
                }
            });
        }
    }
    function mybuttonHandler() {
        console.log("init");
        let contentDiv = document.createElement("div");
        let buttonElement = document.createElement("i");
        let check = document.createElement("i");
        let _inputName = document.createElement("p");
        let _menge = document.createElement("p");
        let datum = document.createElement("p");
        let _comment = document.createElement("p");
        check.classList.add("fa-solid");
        check.classList.add("fa-check");
        buttonElement.classList.add("fa-solid");
        buttonElement.classList.add("fa-trash");
        buttonElement.classList.add("delAppend");
        contentDiv.classList.add("inputProdukt");
        contentDiv.classList.add("container");
        inputMenge = String(menge.value);
        inputName = String(produkt.value);
        inputComment = String(comment.value);
        currentDate = new Date().toLocaleDateString();
        //console.log(currentDate)
        for (let i = L06.display.childElementCount; i <= L06.display.childElementCount; i++) {
            contentDiv.setAttribute("id", JSON.stringify(i));
        }
        _menge.innerText = inputMenge;
        _inputName.innerText = inputName;
        _comment.innerText = inputComment;
        datum.innerText = ("gekauft am" + "\xa0" + currentDate.toString());
        contentDiv.appendChild(check);
        contentDiv.appendChild(_menge);
        contentDiv.appendChild(_inputName);
        contentDiv.appendChild(_comment);
        contentDiv.appendChild(datum);
        contentDiv.appendChild(buttonElement);
        document.querySelector(".display").appendChild(contentDiv);
        buttonElement.addEventListener("click", function () {
            deleteEvent(contentDiv);
        });
        check.addEventListener("click", function () {
            L06.idNumber = JSON.parse(contentDiv.getAttribute("id"));
            checkEvent();
        });
        document.getElementById("counter").textContent = (JSON.stringify(L06.display.childElementCount));
    }
    function clearInput() {
        produkt.value = null;
        menge.value = null;
        comment.value = null;
    }
    function checkEvent() {
        if (document.getElementById(JSON.stringify(L06.idNumber)).style.borderColor == "black") {
            document.getElementById(JSON.stringify(L06.idNumber)).style.borderColor = "green";
            document.getElementById(JSON.stringify(L06.idNumber)).style.borderWidth = "2px";
        }
        else {
            document.getElementById(JSON.stringify(L06.idNumber)).style.borderColor = "black";
        }
    }
    L06.checkEvent = checkEvent;
    function deleteEvent(parentElement) {
        console.log(parentElement + "deleted");
        L06.display.removeChild(parentElement);
        L06.listLength--;
        document.getElementById("counter").textContent = (JSON.stringify(L06.display.childElementCount));
    }
    L06.deleteEvent = deleteEvent;
    async function addItem() {
        let formData = new FormData(myForm);
        let json = {};
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Data");
        query.set("data", JSON.stringify(json));
        console.log(query.toString());
        let response = await fetch(url + "?" + query.toString());
        console.log(response);
        let responseText = await response.text();
        console.log(responseText);
        if (responseText.includes("success")) {
            alert("Item added!");
        }
        else {
            alert("Error! Try again!");
        }
    }
})(L06 || (L06 = {}));
//# sourceMappingURL=script.js.map