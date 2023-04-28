import Bubble from './bubble';

const Game = () => {
    const parent = document.querySelector('body');
    const bubbles = Bubble();
    bubbles.addEventListener("click", e => parent.removeChild(bubbles));
    parent.appendChild(bubbles);
};

export default Game;