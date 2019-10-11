import React, {Component} from 'react';
import './App.css';
import Circle from './Circle/Circle.js';
import GameOver from './GameOver/GameOver.js';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



class App extends Component {

  state = {
    score: 0,
    current: 0,
    showGameOver: false
  };


  pace = 1500;
  timer = undefined;





  next = () => {
    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current:nextActive,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next.bind(this), this.pace);

    console.log(this.state.current, this.pace);

  };




  


  clickhandler = (btnid) => {
    console.log ('Klikki', btnid);



    if (this.state.current !== btnid) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score +1
    })

  }



  startHandler = () => {
    this.next();
  }


  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameOver:true
    })
  }




  render () {
    return (
      <div>
        <h1>Nopeuspeli</h1>
        <p>Scores: <strong>{this.state.score}</strong></p>

        <Circle 
        buttonColor='green'
        active={this.state.current === 1}
        click={() => this.clickhandler(1)}  
        />


        <Circle 
        buttonColor='violet'
        active={this.state.current === 2}
        click={() => this.clickhandler(2)}
        />


        <Circle
        buttonColor='blue'
        active={this.state.current === 3}
        click={() => this.clickhandler(3)}
        />


        <Circle
        buttonColor='brown'
        active={this.state.current === 4}
        click={() => this.clickhandler(4)}
        />

        <div id="napit">
          <button onClick={this.startHandler}>Aloita peli</button>
          <button onClick={this.endHandler}>Lopeta peli</button>
        </div>


        {this.state.showGameOver && <GameOver score={this.state.score} />}
        

      </div>
    );
  }
   
}

export default App;
