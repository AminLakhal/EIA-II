var L04;
(function (L04) {
    function generateContent(_data) {
        for (let i = 0; i < _data.initialProduct.length; i++) {
            let contentDiv = document.createElement("div");
            let buttonElement = document.createElement("i");
            let check = document.createElement("i");
            let _initName = document.createElement("p");
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
            let initMenge = String(_data.initialProduct[i].quantity);
            let initName = String(_data.initialProduct[i].name);
            let initComment = String(_data.initialProduct[i].comment);
            let initDate = String(_data.initialProduct[i].date);
            //console.log(currentDate)
            for (let i = L04.display.childElementCount; i <= L04.display.childElementCount; i++) {
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
            buttonElement.addEventListener("click", function () {
                L04.deleteEvent(contentDiv);
            });
            check.addEventListener("click", function () {
                L04.idNumber = JSON.parse(contentDiv.getAttribute("id"));
                L04.checkEvent();
            });
            document.getElementById("counter").textContent = (JSON.stringify(L04.display.childElementCount));
        }
    }
    L04.generateContent = generateContent;
})(L04 || (L04 = {}));
//# sourceMappingURL=GenerateContent.js.map