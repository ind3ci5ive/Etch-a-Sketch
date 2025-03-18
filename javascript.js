
// initialize variables to use document.querySelectors

// use a loop to create and append 256 child divs to
// the container dive

// organize them afterwards with flex styles to make
// a 16x16 grid





const container = document.querySelector("#container");


for (let i = 0; i < 256; i++) {


    const div = document.createElement("div");
    div.style.width = "16px";
    div.style.height = "16px";
    div.style.margin ="0px";
    container.appendChild(div);

    // add styles to object initialization instead of the CSS sheet

}

let body = document.querySelector("body");

let sizeButton = document.createElement("button");
sizeButton.innerHTML = "Change Grid Size";
body.appendChild(sizeButton);

