//defining display and buttons

let display = document.getElementById("buttondisplay")
let buttons = document.querySelectorAll(".button")



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


document.addEventListener("keydown", (event) => { //keydown event
    console.log(event);

    switch (event.key) {
        
        case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight": case "a": case "b": case "c":
        case "d": case "e": case "f": case "g": case "h": case "i": case "j": case "k": case "l": case "m":
        case "n": case "o": case "p": case "q": case "r": case "s": case "t": case "u": case "v": case "w":
        case "x": case "y": case "z":
        case "tab": case "CapsLock": case "Shift": case "Control": case "Alt": case "Meta": case "Tab":
        case "`": case "~": case "_": case "^": case "&": case "#": case "@": case "!": case "?": case "{":
        case "}": case "[": case "]": case "|": case "\\": case ":": case ";": case "'": case '"':
        break;

        case "C":
        case "Backspace":
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
});

// TOD0

// LIMITAR NUMERO DE CARACTERES EN DISPLAY OUTPUT.
// desabilitar teclado (a-z) short way














































































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