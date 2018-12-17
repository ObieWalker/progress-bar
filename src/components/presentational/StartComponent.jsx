import React from "react";

import { 
  Text,
  DoneStep,
  theme 
} from '../../styles/stylesComponent';

const StartComponent = (props) => {

  return (
    <DoneStep filled theme={theme}>
      <Text>Start</Text>
    </DoneStep>
  )
}

export default StartComponent;