namespace L06 {
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
    let produkt: HTMLInputElement = <HTMLInputElement>document.getElementById("produkt");
    let menge: HTMLInputElement = <HTMLInputElement>document.getElementById("menge");
    let comment: HTMLInputElement = <HTMLInputElement>document.getElementById("comment");
    export let display: HTMLElement = <HTMLElement>document.querySelector(".display");
    export let idNumber: number;
    export let listLength: number = display.childElementCount;

    let inputMenge: string;
    let inputName: string;
    let inputComment: string;
    let currentDate;
    let myForm = <HTMLFormElement>document.getElementById("sendform");
    let button = document.getElementById("button");
    button.addEventListener("click", addItem);


    window.addEventListener("load", handleLoad);
    async function handleLoad(_event: Event): Promise<void> {

        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~lakhalam/Database/index.php/?command=find&collection=Data");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);
        generateContent(data);

        const collection = document.getElementsByClassName("collection");
        for (let i = 0; i < collection.length; i++) {
            collection[i].addEventListener("keypress", function (event) {
                if (event.key === "Enter" && produkt.value != "" && menge.value != "") {
                    event.preventDefault();
                    mybuttonHandler();
                    console.log(button)
                    button.click();
                    clearInput();
                }
            });
        }
    }


    function mybuttonHandler(): void {
        console.log("init");


        let contentDiv: HTMLElement = document.createElement("div");
        let buttonElement: HTMLElement = document.createElement("i");
        let check: HTMLElement = document.createElement("i");
        let _inputName: HTMLElement = document.createElement("p");
        let _menge: HTMLElement = document.createElement("p");
        let datum: HTMLElement = document.createElement("p");
        let _comment: HTMLElement = document.createElement("p");
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

        for (let i = display.childElementCount; i <= display.childElementCount; i++) {
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

        buttonElement.addEventListener("click", function (): void {
            deleteEvent(contentDiv);
        });

        check.addEventListener("click", function (): void {
            idNumber = JSON.parse(contentDiv.getAttribute("id"));

            checkEvent();
        });

        document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
    }

    function clearInput(): void {
        produkt.value = null;
        menge.value = null;
        comment.value = null;
    }

    export function checkEvent(): void {

        if (document.getElementById(JSON.stringify(idNumber)).style.borderColor == "black") {

            document.getElementById(JSON.stringify(idNumber)).style.borderColor = "green";
            document.getElementById(JSON.stringify(idNumber)).style.borderWidth = "2px";
        }

        else {
            document.getElementById(JSON.stringify(idNumber)).style.borderColor = "black";
        }
    }

    export function deleteEvent(parentElement: HTMLElement): void {
        console.log(parentElement + "deleted");
        display.removeChild(parentElement);
        listLength--;
        document.getElementById("counter").textContent = (JSON.stringify(display.childElementCount));
    }

    async function addItem(): Promise<void> {

        interface FormDataJSON {
            [key: string]: FormDataEntryValue | FormDataEntryValue[];
        }
        let formData: FormData = new FormData(myForm);

        let json: FormDataJSON = {};

        for (let key of formData.keys())
            if (!json[key]) {
                let values: FormDataEntryValue[] = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }



        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Data");
        query.set("data", JSON.stringify(json));

        console.log(query.toString())
        let response: Response = await fetch(url + "?" + query.toString());

        console.log(response)
        let responseText: string = await response.text();
        console.log(responseText);

        if (responseText.includes("success")) {
            alert("Item added!");
        }
        else {
            alert("Error! Try again!");
        }
    }

}