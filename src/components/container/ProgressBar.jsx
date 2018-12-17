import React, { Component } from 'react';
import swal from 'sweetalert';

import CompletedStep from '../presentational/CompletedStep';
import StartComponent from '../presentational/StartComponent';
import { 
  Button, 
  ButtonWrapper, 
  Select, 
  Steps, 
  FullBar,
  AlignBar
 } from '../../styles/stylesComponent';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      noOfSteps: 2,
      progessComplete: false,
    };
  }

  nextStep = () => {
    const { progessComplete, noOfSteps } = this.state
    if (progessComplete === true){
      this.progressDone()
    } else {
      this.setState(prevState => {
        return { currentStep: prevState.currentStep + 1 }
      }, () => {
        const { currentStep } = this.state
        if (currentStep === noOfSteps) {
          this.setState({
            progessComplete: true
          })
          this.progressDone()
        }
      })
    }
  }

  progressDone = () => {
    swal("Steps Complete. Click Reset!", {
      buttons: false,
      timer: 3000,
    });
  }

  reset = () => {
    this.setState({
      currentStep: 0,
      noOfSteps: this.state.noOfSteps,
      progessComplete: false
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
    const { noOfSteps, currentStep} = this.state
    const steps = [...Array(noOfSteps).keys()]
    return (
      <FullBar>
        <Steps>
          <span>Select the number of steps:</span>
          <Select onChange={this.handleSelectSteps}>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Select>
        </Steps>
        <AlignBar>
          <StartComponent />
          {
            steps.map((i) => (
              <CompletedStep
                key={i}
                index={i}
                stepNumber={i+1}
                currentStep={currentStep}
              />
          ))}
        </AlignBar>
        <ButtonWrapper>
          <Button next onClick={this.nextStep}>Next Step &#8658;</Button>
          <Button reset onClick={this.reset}>Reset &#8635;</Button>
        </ButtonWrapper>
      </FullBar>
    );
  }
}

export default ProgressBar;
