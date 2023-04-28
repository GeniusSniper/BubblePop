import Bubble from './bubble';

const Game = () => {
    const parent = document.querySelector('body');
    const bubbles = Bubble();
    parent.appendChild(bubbles);
};

export default Game;