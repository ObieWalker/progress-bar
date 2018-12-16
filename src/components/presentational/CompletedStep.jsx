import React from "react";

import '../../styles/App.css'

const CompletedStep = (props) => {

  return (
    <>
    <div className="progress-bar"></div>
    <div className="completed-step">
    <p style={{ fontSize: '15px', marginTop: '40px', textAlign: 'center'}}>{props.stepNumber ? `Step ${props.stepNumber}`: 'Start'}</p>
    </div>
    </>
  )
}

export default CompletedStep;