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

console.log("live")

var produkt: HTMLInputElement = <HTMLInputElement>document.getElementById("produkt");
var menge: HTMLInputElement = <HTMLInputElement>document.getElementById("menge");
var comment: HTMLInputElement = <HTMLInputElement>document.getElementById("comment");
var datum: HTMLInputElement = <HTMLInputElement>document.getElementById("date");

let display: HTMLElement = <HTMLElement>document.querySelector(".display");
let k: number;

let listLength: number = display.childElementCount;

window.addEventListener("load", function (): void {
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

    let inputValue: string = String("Produkt" + "\xa0" + "\xa0" + produkt.value);
    // tslint:disable-next-line: typedef

    let inputMenge: string = String("Menge" + "\xa0" + "\xa0" + menge.value);
    let inputComment: string = String("Kommentar" + "\xa0" + "\xa0" + comment.value);

    var contentDiv = document.createElement("div");
    // tslint:disable-next-line: typedef
    var textDiv = document.createElement("div");
    var divMenge = document.createElement("div");
    var divComment = document.createElement("div");
    var dateDiv = document.createElement("div");
    // tslint:disable-next-line: typedef
    var buttonElement = document.createElement("i");
    // tslint:disable-next-line: typedef
    var check = document.createElement("i");

    // tslint:disable-next-line: typedef
    var t = document.createTextNode(inputValue);
    var _menge = document.createTextNode(inputMenge);


    var _datum = new Date().toLocaleDateString();
    console.log(_datum)
    var datum = document.createTextNode("gekauft am"+ "\xa0" + _datum.toString());
    var _comment = document.createTextNode(inputComment);


    textDiv.classList.add("text");
    divComment.classList.add("text");
    divMenge.classList.add("text");
    divComment.classList.add("text");

    check.classList.add("fa-solid");
    check.classList.add("fa-check");
    buttonElement.classList.add("fa-solid");
    buttonElement.classList.add("fa-trash");
    buttonElement.classList.add("delAppend");
    contentDiv.classList.add("inputProdukt");
    contentDiv.classList.add("container");

    // tslint:disable-next-line: typedef
    for (let i = 0; i <= display.childElementCount; i++) {
        contentDiv.setAttribute("id", JSON.stringify(i));
    }



    textDiv.appendChild(t);
    divMenge.appendChild(_menge);
    divComment.appendChild(_comment);
    dateDiv.appendChild(datum);


    contentDiv.appendChild(check);
    contentDiv.appendChild(textDiv);
    contentDiv.appendChild(divMenge);
    contentDiv.appendChild(divComment);
    contentDiv.appendChild(dateDiv);
    contentDiv.appendChild(buttonElement);


    document.querySelector(".display").appendChild(contentDiv);


    buttonElement.addEventListener("click", function (): void {
        deleteEvent(contentDiv);
    });

    check.addEventListener("click", function (): void {
        k = JSON.parse(contentDiv.getAttribute("id"));

        checkEvent();
    });


    document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
}



function checkEvent(): void {

    if (document.getElementById(JSON.stringify(k)).style.borderColor == "black") {

        document.getElementById(JSON.stringify(k)).style.borderColor = "green";
        document.getElementById(JSON.stringify(k)).style.borderWidth = "2px";
    }

    else {
        document.getElementById(JSON.stringify(k)).style.borderColor = "black";
    }


}

function deleteEvent(parentElement: HTMLElement): void {
    console.log("deleteEvent wurde aufgerufen!");
    display.removeChild(parentElement);
    listLength--;
    document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));


}

