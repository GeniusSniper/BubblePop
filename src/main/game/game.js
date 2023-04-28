import Bubble from './bubble';

const Game = () => {
    let bubbles = Bubble();
    document.querySelector('body').appendChild(bubbles);
};

export default Game;