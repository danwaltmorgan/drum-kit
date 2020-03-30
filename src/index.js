import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";



class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: null
    }
    this.handleKey = this.handleKey.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.setDisplay = this.setDisplay.bind(this)
  }

  setDisplay(id) {
    this.setState({
      display: id
    })
  }

  handleClick(event) {
    let dataKey = event.target.dataset.key
    if (document.querySelector(`audio[data-key="${dataKey}"]`)) {
      const audio = document.querySelector(`audio[data-key="${dataKey}"]`)
      audio.currentTime = 0;
      this.setDisplay(event.target.id)
      audio.play();
      event.target.classList.add("playing")
    }
  }
  handleClickUp(event) {
    event.target.classList.remove("playing")
  }

  handleKey(event) {

    if (document.querySelector(`.drum-pad[data-key="${event.keyCode}"]`)) {
      const key = document.querySelector
        (`.drum-pad[data-key="${event.keyCode}"]`);
      key.classList.add("playing")
      this.setState({
        display: key.id
      })
    }
    if (document.querySelector(`audio[data-key="${event.keyCode}"]`)) {
      const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
      audio.currentTime = 0;
      audio.play();
    }
  }

  handleKeyUp(event) {
    if (document.querySelector(`.drum-pad[data-key="${event.keyCode}"]`)) {
      const key = document.querySelector(`.drum-pad[data-key="${event.keyCode}"]`);
      key.classList.remove("playing")
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey)
    document.addEventListener("keyup", this.handleKeyUp)
    document.addEventListener("mousedown", this.handleClick)
    document.addEventListener("mouseup", this.handleClickUp)

  }
  render() {
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="display">{this.state.display}</div>
        <div className="container">
          <div className="row">
            <div className="drum-pad" id="Kick" data-key="81">Q
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" data-key="81" className="clip" id="Q"/>
            </div>
            <div className="drum-pad" id="Open-HH" data-key="87">W
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" data-key="87" className="clip" id="W"/>
            </div>
            <div className="drum-pad" id="Closed-HH" data-key="69">E
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" data-key="69" className="clip" id="E"/>
            </div>
          </div>
          <div className="row">
            <div className="drum-pad" id="Kick_n_Hat" data-key="65">A
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" data-key="65" className="clip" id="A"/>
            </div>
            <div className="drum-pad" id="Clap" data-key="83">S
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" data-key="83" className="clip" id="S"/>
            </div>
            <div className="drum-pad" id="Snare" data-key="68">D
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" data-key="68" className="clip" id="D"/>
            </div>
          </div>
          <div className="row">
            <div className="drum-pad" id="Side-Stick" data-key="90">Z
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" data-key="90" className="clip" id="Z"/>
            </div>
            <div className="drum-pad" id="Shaker" data-key="88">X
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" data-key="88" className="clip" id="X"/>
            </div>
            <div className="drum-pad" id="Punchy Kick" data-key="67">C
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" data-key="67" className="clip" id="C"/>
            </div>
          </div>
          </div>
        </div>
      )
    }
  }

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
)
