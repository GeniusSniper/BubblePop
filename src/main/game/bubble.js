

// export default class Bubble {
//     constructor() {
//         this.element = 
//     }
// }

const Bubble = () => {
    let element = document.createElement("div");
    element.innerHTML = "";
    element.style.border = "1px solid black";
    element.style.borderRadius = '50%';
    element.style.height = '25px';
    element.style.width = '25px';
    return element;
};

export default Bubble;