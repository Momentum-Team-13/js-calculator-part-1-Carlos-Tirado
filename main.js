let display = document.getElementById("buttondisplay");

let buttons = document.querySelectorAll(".button");

document.addEventListener("keydown", (event) => {
    document.body.append(event.key);
    if (event.key == "0") {document.body.append("0")}
    if (event.key == "1") {document.body.append(1)}
    if (event.key == "2") {document.body.append("2")}
    if (event.key == "3") {document.body.append("3")}
    if (event.key == "4") {document.body.append("4")}
    if (event.key == "5") {document.body.append("5")}
    if (event.key == "6") {document.body.append("6")}
    if (event.key == "7") {document.body.append("7")}
    if (event.key == "8") {document.body.append("8")}
    if (event.key == "9") {document.body.append("8")}
    if (event.key == "+") {document.body.append("+")}
    if (event.key == "-") {document.body.append("-")}
    if (event.key == "*") {document.body.append("*")}
    if (event.key == "/") {document.body.append("/")}


});




for (let button of buttons) {
    button.addEventListener("click", function (event) {
        switch (event.target.textContent) {
            case "C":
                display.textContent = "";
                break;
            case "=":
                display.textContent = eval(display.textContent); 
                break;   
            default:
            display.textContent += event.target.textContent;
        }
    });
};
























/*calculationResult = eval("result");

equalbutton.addEventListener("click", function() {
const calculationResult = eval(result)
display.textContent = calculationResult
});
*/



















/*let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
    button.addEventListener("click", (event) => {
        console.log("click");
        console.log(event);
        console.log(event.target);
        console.log(event.target.textContent);
    });
});

buttons.map( button => {
    button.addEventListener("click", (event) => {
        switch (event.target.textContent){
            default:
                display.textContent += event.target.textContent;
        }
    });
    });*/




























/*buttons.map( button => {
    button.addEventListener("click", (e) => {
        console.log("clicked");
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    });
});*/