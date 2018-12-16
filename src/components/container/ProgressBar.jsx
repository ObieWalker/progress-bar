import React, { Component } from 'react';
import swal from 'sweetalert'
import '../../styles/App.css'
import CompletedStep from '../presentational/CompletedStep'
import ProgressStep from '../presentational/ProgressStep'
import StartComponent from '../presentational/StartComponent'

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      noOfSteps: 2,
      progessComplete: false,
      stepComplete: false
    };
  }

  nextStep = () => {
    if (this.state.progessComplete === true){
      swal("Steps Completed.", {
        buttons: false,
        timer: 3000,
      });
    } else {
      this.setState(prevState => {
        return { currentStep: prevState.currentStep + 1 }
      }, () => {
        if (this.state.currentStep === this.state.noOfSteps) {
          this.setState({
            progessComplete: true
          })
          swal("Steps Completed.", {
            buttons: false,
            timer: 3000,
          });
        }
      })
    }
  }

  reset = () => {
    this.setState({
      currentStep: 0,
      noOfSteps: this.state.noOfSteps,
      progessComplete: false,
      stepComplete: false
    })
  }

  handleSelectSteps = (e) => {
    this.reset()
    this.setState({
      noOfSteps: parseInt(e.target.value)
    })
  }

  progressCompleted = () => {
    this.setState(prevState => {
      if (prevState.currentStep >= prevState.noOfSteps){
        return { progessComplete: true }
      }
    })
  }

  setSteps = (noOfSteps) => {
    this.setState({
      noOfSteps: noOfSteps
    })
  }
  
  render() {
    const steps = [...Array(this.state.noOfSteps).keys()]
    return (
      <div className="full-bar">
        <div>
          <span>Select Number of Steps:</span>
          <select onChange={this.handleSelectSteps}>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          </select>
        </div>
        <div style={{ display: 'flex', alignSelf: "center", maxWidth: "100%"}}>
          <StartComponent />
          {
            steps.map((i) => (
              <CompletedStep
                key={i}
                index={i}
                stepNumber={i+1}
                currentStep={this.state.currentStep}
              />
          ))}
        </div>
        <div className="button-container">
          <button className="step-btn" onClick={this.nextStep}>Next Step</button>
          <button className="reset-btn" onClick={this.reset}>Reset Step</button>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
