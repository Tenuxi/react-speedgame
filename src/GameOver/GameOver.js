import React from 'react';
import './GameOver.css';

const closeHandler = () => {
    window.location.reload();
}

const GameOver = (props) => {
    return (
        <div id="overlay">
            <div className="gameoverbox">
                <h3 id="gameover">Game over!</h3>
                <p>Final score: {props.score}</p>
                <button onClick={closeHandler}>Aloita alusta</button>
            </div>

        </div>
    );
}

export default GameOver;