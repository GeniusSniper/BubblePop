

// export default class Bubble {
//     constructor() {
//         this.element = 
//     }
// }

const Bubble = (name, offset = 1) => {
    const element = document.createElement("div");
    element.innerHTML = "";
    element.style.border = "1px solid black";
    element.style.borderRadius = '50%';
    element.style.height = '25px';
    element.style.width = '25px';
    element.style.background = 'black';
    element.addEventListener("click", e => {
        // parent.removeChild(element); //remove element from body not the page
        element.remove();// remove element from the root decreasing elements on page
    });
    element.className = 'test';
    element.style.position = 'relative';
    element.style.top = '100px';
    setInterval(() => {
        element.style.top = element.offsetTop - 8 - offset + "px";// default = 8
    }, 1000);
    return element;
};

export default Bubble;