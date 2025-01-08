
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
    container.appendChild(div);

}
