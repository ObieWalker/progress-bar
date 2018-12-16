import React from "react";

import '../../styles/App.css'

const CompletedStep = (props) => {

  const completed = props.currentStep >= props.stepNumber ? 'filled-step': ''

  return (
    <>
    <div className={`progress-bar ${completed}`}></div>
    <div className={`completed-step ${completed}`}>
    <p style={{ fontSize: '15px', marginTop: '40px', textAlign: 'center'}}>{props.stepNumber ? `Step ${props.stepNumber}`: 'Start'}</p>
    </div>
    </>
  )
}

export default CompletedStep;