let userInput1 = document.getElementById("userInput")
let keyCodeList1 = document.getElementById("keyCodeList")

function keycode(event) {
    console.log(event.keyCode)
    let valueget = event.keyCode
    let li = document.createElement("li")
    li.textContent = valueget
    keyCodeList1.appendChild(li)


}


userInput1.addEventListener("keydown", keycode)