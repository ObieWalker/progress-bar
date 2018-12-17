import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CompletedStep from '../../src/components/presentational/CompletedStep';

let mountedForm, props, wrapper;
const currentStep = 5
const stepNumber = 4

const getComponent = () => {
  if (!mountedForm) {
    props = {
      currentStep,
      stepNumber 
    };
    mountedForm = shallow(<CompletedStep {...props} />);
  }
  return mountedForm;
};

describe('ProgressBar Component', () => {
  beforeAll(() => {
    wrapper = getComponent();
  });
  it('renders component successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});