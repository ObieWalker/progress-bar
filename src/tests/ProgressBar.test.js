import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ProgressBar from '../../src/components/container/ProgressBar'

let mountedForm, props, wrapper;

const getComponent = () => {
  if (!mountedForm) {
    mountedForm = shallow(<ProgressBar {...props} />);
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
  it('should have a method that handles nextStep', () => {
    expect(wrapper.instance().nextStep).toBeDefined();
  });
  it('should have a method that handles progressDone', () => {
    expect(wrapper.instance().progressDone).toBeDefined();
  });
  it('should have a method that handles reset', () => {
    expect(wrapper.instance().reset).toBeDefined();
  });
  it('should have a method that handles handleSelectSteps', () => {
    expect(wrapper.instance().handleSelectSteps).toBeDefined();
  });
  it('should have a method that handles progressCompleted', () => {
    expect(wrapper.instance().progressCompleted).toBeDefined();
  });
  it('should have a method that handles setSteps', () => {
    expect(wrapper.instance().setSteps).toBeDefined();
  });
  it('testing nextStep function', () => {
    wrapper.instance().nextStep();
    expect(wrapper.state().currentStep).toEqual(1);
  });
  it('testing nextStep function when completed after clicking next', () => {
    wrapper.setState({
      currentStep: 2,
      noOfSteps: 3
    });
    wrapper.instance().nextStep();
    expect(wrapper.state().progessComplete).toEqual(true);
  });
  it('testing nextStep function when complete', () => {
    wrapper.setState({
      progessComplete: true
    });
    wrapper.instance().nextStep();
    expect(wrapper.state().progessComplete).toEqual(true);
  });
  it('testing reset function', () => {
    wrapper.setState({
      noOfSteps: 2
    });
    wrapper.instance().reset();
    expect(wrapper.state().currentStep).toEqual(0);
    expect(wrapper.state().noOfSteps).toEqual(2);
    expect(wrapper.state().progessComplete).toEqual(false);
  });
  it('testing progressCompleted function', () => {
    wrapper.setState({
      noOfSteps: 2,
      currentStep: 3
    });
    wrapper.instance().progressCompleted();
    expect(wrapper.state().progessComplete).toEqual(true);
  });
  it('testing setSteps function', () => {
    wrapper.instance().setSteps(5);
    expect(wrapper.state().noOfSteps).toEqual(5);
  });
});
