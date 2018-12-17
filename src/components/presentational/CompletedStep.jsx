import React from "react";

import {
  Text,
  Progress,
  CompleteStep,
  theme
} from '../../styles/stylesComponent';

const CompletedStep = (props) => {
  const { currentStep, stepNumber } = props
  const completed = currentStep >= stepNumber ? 'filled': ''

  return (
    <>
      <Progress completed={completed} theme={theme}></Progress>
      <CompleteStep completed={completed} theme={theme}>
      <Text>Step {props.stepNumber}</Text>
      </CompleteStep>
    </>
  )
}

export default CompletedStep;