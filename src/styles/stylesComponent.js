import styled, { css } from 'styled-components';

export const theme = {
  color: "rgb(58, 67, 141)"
}

export const AppWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`
export const FullBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: space-between;
`
export const Steps = styled.div`
  margin: 30px;
  font-family: 'Courier New', Courier, monospace;
`

export const AlignBar = styled.div`
  display: flex;
  align-self: center;
  max-width: 100%;
`

export const DoneStep = styled.div`
  font-size: 60px;
  display: flex;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.1em solid ${props => props.theme.color};
  position: relative;
  border-radius: 0.35em;
  z-index: 1;
  ${props =>
    props.filled &&
    css`
      background-color: ${props => props.theme.color};
  ` 
  };
`

export const Progress = styled.div`
  margin: 14px -5px 0 -5px;
  position: relative;
  height: 6px;
  width: 200px;
  border: 0.1em solid ${props => props.theme.color};
  z-index: 0;
  ${props =>
    props.completed &&
    css`
      background-color: ${props => props.theme.color};
  ` 
  };
`

export const CompleteStep = styled.div`
  font-size: 60px;
  display: flex;
  width: 0.4em;
  box-sizing: content-box;
  height: 0.4em;
  border: 0.1em solid ${props => props.theme.color};
  position: relative;
  border-radius: 0.35em;
  z-index: 1
  ${props =>
    props.completed &&
    css`
      background-color: ${props => props.theme.color};
  ` 
  };
`

export const Button = styled.button`
  width: 100px;
  font-size: 12px;
  align-content: center;
  color: white;
  padding: 10px 10px;
  border-radius: 15px;
  cursor: pointer;
  margin: 20px;
  ${props =>
    props.next ?
    css`
      background-color: seagreen;
    ` :
    css`
      background-color: rgb(95, 9, 20);
  ` 
  };
`

export const Text = styled.p`
  font-size: 15px;
  margin-top: 40px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
`
export const ButtonWrapper = styled.div`
  display: flex;
  margin: 60px auto 0 auto;
`

export const Select = styled.select`
  -webkit-appearance: button;
  -moz-appearance: button;
  background-color: rgb(231, 231, 231);
  background-position: center right;
  background-repeat: no-repeat;
  border: 1px solid #AAA;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #555;
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  padding: 2px 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
`