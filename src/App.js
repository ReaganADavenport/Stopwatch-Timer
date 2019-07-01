//import libraries
import React, {
  Component
} from 'react';

//import Components
import Button from './button'
//import CSS
import './App.css';

class App extends Component {
  state = {
    timer: 0,
    countdown: 10
  }

  countDownInterval = 0;

  addTime = () => {
    let newTime = this.state.timer + 1;
    this.setState({
      timer: newTime
    });
  };

  startStopwatch = () => {
    this.countDownInterval = setInterval(this.addTime, 1000);
  };

  stopStopwatch = () => {
    clearInterval(this.countDownInterval);
  };

  resetStopwatch = () => {
    clearInterval(this.countDownInterval);
    this.setState({
      timer: 0
    });
  };

  minusTime = () => {
    let newTime = this.state.countdown -1;
    this.setState({
      countdown: newTime
    });
  };

  startTimer = () => {
    this.countDownInterval = setInterval(this.minusTime, 1000);
  };

  stopTimer = () => {
    clearInterval(this.countDownInterval);
  };

  resetTimer= () => {
    clearInterval(this.countDownInterval);
    this.setState({
      countdown: 10
    });
  }

  render() {
    const {
      timer, countdown
    } = this.state;
    return ( 
      <div className="App">
      <p> Stopwatch: {timer} </p> 
      <Button clickHandler={this.startStopwatch} name={'Start'}/> 
      <Button clickHandler={this.stopStopwatch} name={'Stop'}/> 
      <Button clickHandler={this.resetStopwatch} name={'Reset'}/>
      <p>Timer: {countdown}</p>
      <Button clickHandler={this.startTimer} name={'Start'}/>
      <Button clickHandler={this.stopTimer} name={'Stop'}/> 
      <Button clickHandler={this.resetTimer} name={'Reset'}/>
      </div>
    );
  };
};

export default App;