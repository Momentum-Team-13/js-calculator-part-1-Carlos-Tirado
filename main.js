//defining display and buttons

let display = document.getElementById("buttondisplay")
let buttons = document.querySelectorAll(".button")
// let keyboardInput = document.getElementById('keyboard-input');

//for loop, buttons array
for (let button of buttons) {
    button.addEventListener("click", function (event) {     //event called click

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



document.addEventListener("keypress", (event) => {
    console.log(event);

    switch (event.key) {

        case "C":
            display.textContent = "";
            break;
        case "=":
            display.textContent = eval(display.textContent); 
            break; 
        case "Enter":
            display.textContent = eval(display.textContent);
            break;

        default:
        display.textContent += event.key;
    }

})












// document.onkeyup = e => {
//     if(e.key == "0" || e.key == "Num0"){
//         type_to(0);
//     } 
//     else if (e.key == "1" || e.key == "Num1"){
//         type_to(1);
//     }
//     else if (e.key == "2" || e.key == "Num2"){
//         type_to(2);
//     }
//     else if (e.key == "3" || e.key == "Num3"){
//         type_to(3);
//     }
//     else if (e.key == "4" || e.key == "Num4"){
//         type_to(4);
//     }
//     else if (e.key == "5" || e.key == "Num5"){
//         type_to(5);
//     }
//     else if (e.key == "6" || e.key == "Num6"){
//         type_to(6);
//     }
//     else if (e.key == "7" || e.key == "Num7"){
//         type_to(7);
//     }
//     else if (e.key == "8" || e.key == "Num8"){
//         type_to(8);
//     }
//     else if (e.key == "9" || e.key == "Num9"){
//         type_to(9);
//     }
// }






































































/*

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