import React, { Component } from 'react';
import BasicInfos from './BasicInfos';
import WoodDetails from './WoodDetails';
import StartForm from './StartForm';
import ThankYou from './ThankYou';

export class Form extends Component {
  state = {
    step: 1,
    specie: '',
    other: '',
    density: '',
    cutType: '',
    planer: '',
    weight: '',
    sandpaper: '',
    lathe: '',
    imageUrl: '',
    imageUpload: '',
    width: '',
    height: '',
    view: ''
  };

  nextStep = () => {
      const { step } = this.state;
      this.setState({ step: step + 1 });
  };

  prevStep = () => {
      const { step } = this.state;
      this.setState({ step: step - 1 });
  };

  inputChange = input => element => {
      if(input === 'imageUrl') {
        this.setState({
          imageUrl: element.target.files[0]
        });
        this.setState({
          imageUpload: URL.createObjectURL(element.target.files[0])
        }); 
      } else {
        this.setState({
          [input]: element.target.value
        });
      }
  };

  newRegister = () => {
		const { step } = this.state;
		this.setState({ step: step - 2 });
	};

  render() {
    const { step } = this.state;
    const { specie, other, density, cutType, planer, weight, sandpaper, lathe, imageUrl, imageUpload, width, height, view } = this.state;
    const values = { specie, other, density, cutType, planer, weight, sandpaper, lathe, imageUrl, imageUpload, width, height, view };

    switch (step) {
      case 1:
        return (
          <StartForm
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <BasicInfos
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 3:
        return (
          <WoodDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 4:
        return (
          <ThankYou
            newRegister={this.newRegister}
          />
        );
      default:
    }
  }
}

export default Form