/* Aufgabe:
    <L01_Zufallsgedicht>
        Name:
        <Amin Lakhal>
            Matrikel:
            <271128>
                Datum:29.10.2022
                <Datum der letzten Bearbeitung>
                    Quellen:
                    <Kommilitonis mit denen Du zusammengearbeitet hast oder von denen Du dich inspirieren ließest>
                        */
console.log("live");
var produkt = document.getElementById("produkt");
var menge = document.getElementById("menge");
var comment = document.getElementById("comment");
var datum = document.getElementById("date");
let display = document.querySelector(".display");
let k;
let listLength = display.childElementCount;
window.addEventListener("load", function () {
    const collection = document.getElementsByClassName("cancelEvent");
    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener("keypress", function (event) {
            if (event.key === "Enter" && produkt.value != "" && menge.value != "") {
                event.preventDefault();
                document.getElementById("produkt").click();
                mybuttonHandler();
                clearInput();
            }
        });
    }
});
// tslint:disable-next-line: typedef
function clearInput() {
    produkt.value = null;
    menge.value = null;
    comment.value = null;
}
// tslint:disable-next-line: typedef
function mybuttonHandler() {
    let inputValue = String("Produkt" + "\xa0" + "\xa0" + produkt.value);
    // tslint:disable-next-line: typedef
    let inputMenge = String("Menge" + "\xa0" + "\xa0" + menge.value);
    let inputComment = String("Kommentar" + "\xa0" + "\xa0" + comment.value);
    var conDiv = document.createElement("div");
    // tslint:disable-next-line: typedef
    var textDiv = document.createElement("div");
    var divMenge = document.createElement("div");
    var divComment = document.createElement("div");
    var dateDiv = document.createElement("div");
    // tslint:disable-next-line: typedef
    var del = document.createElement("i");
    // tslint:disable-next-line: typedef
    var check = document.createElement("i");
    // tslint:disable-next-line: typedef
    var t = document.createTextNode(inputValue);
    var _menge = document.createTextNode(inputMenge);
    var _datum = new Date().toLocaleDateString();
    console.log(_datum);
    var datum = document.createTextNode(_datum.toString());
    var _comment = document.createTextNode(inputComment);
    textDiv.classList.add("text");
    divComment.classList.add("text");
    divMenge.classList.add("text");
    divComment.classList.add("text");
    check.classList.add("fa-solid");
    check.classList.add("fa-check");
    del.classList.add("fa-solid");
    del.classList.add("fa-trash");
    del.classList.add("delAppend");
    conDiv.classList.add("inputProdukt");
    conDiv.classList.add("container");
    // tslint:disable-next-line: typedef
    for (let i = 0; i <= display.childElementCount; i++) {
        conDiv.setAttribute("id", JSON.stringify(i));
    }
    textDiv.appendChild(t);
    divMenge.appendChild(_menge);
    divComment.appendChild(_comment);
    dateDiv.appendChild(datum);
    conDiv.appendChild(check);
    conDiv.appendChild(textDiv);
    conDiv.appendChild(divMenge);
    conDiv.appendChild(divComment);
    conDiv.appendChild(dateDiv);
    conDiv.appendChild(del);
    document.querySelector(".display").appendChild(conDiv);
    del.addEventListener("click", function () {
        deleteEvent(conDiv);
    });
    check.addEventListener("click", function () {
        k = JSON.parse(conDiv.getAttribute("id"));
        checkEvent();
    });
    document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
}
function checkEvent() {
    if (document.getElementById(JSON.stringify(k)).style.borderColor == "black") {
        document.getElementById(JSON.stringify(k)).style.borderColor = "green";
        document.getElementById(JSON.stringify(k)).style.borderWidth = "2px";
    }
    else {
        document.getElementById(JSON.stringify(k)).style.borderColor = "black";
    }
}
function deleteEvent(parentElement) {
    console.log("deleteEvent wurde aufgerufen!");
    display.removeChild(parentElement);
    listLength--;
    document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
}
//# sourceMappingURL=script.js.map