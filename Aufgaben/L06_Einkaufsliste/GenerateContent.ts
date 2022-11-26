namespace L06 {

  export interface Product {

    quantity: number;
    name: string;
    comment: string;
    date: string;
  }

  export interface Data {
    [category: string]: Product[];
  }
  

  export function generateContent(_data:Data) {
    
    for (let i = 0; i < _data.data.Product.length; i++) {
      let contentDiv: HTMLElement = document.createElement("div");
      let buttonElement: HTMLElement = document.createElement("i");
      let check: HTMLElement = document.createElement("i");
      let _initName: HTMLElement = document.createElement("p");
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

      let initMenge = String(_data.data.Product[i].quantity);
      let initName = String(_data.data.Product[i].name);
      let initComment = String(_data.data.Product[i].comment);
      let initDate = String(_data.data.Product[i].date);
      //console.log(currentDate)

      for (let i = display.childElementCount; i <= display.childElementCount; i++) {
        contentDiv.setAttribute("id", JSON.stringify(i));
      }

      _menge.innerText = initMenge;
      _initName.innerText = initName;
      _comment.innerText = initComment;
      datum.innerText = ("gekauft am" + "\xa0" + initDate.toString());

      contentDiv.appendChild(check);
      contentDiv.appendChild(_menge);
      contentDiv.appendChild(_initName);
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
  }

}