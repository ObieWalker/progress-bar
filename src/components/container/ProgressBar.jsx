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
      noOfSteps: 3,
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
    const array = [...Array(this.state.noOfSteps).keys()]
    console.log("steps", this.state.currentStep )
    return (
      <div className="full-bar" >
        <div style={{ display: 'flex'}}>
          <StartComponent />
          {
            array.map((i) => (
              <CompletedStep
                key={i}
                index={i}
                stepNumber={i+1}
                currentStep={this.state.currentStep}
              />
          ))}
        </div>
        <button className="step-btn" onClick={this.nextStep}>Next Step</button>
      </div>
    );
  }
}

export default ProgressBar;
