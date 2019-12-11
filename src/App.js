import React, { Component } from 'react';
import FlightInfo from './components/FlightInfo';
import styled from 'styled-components';

const Div1 = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: '',
      depatureTime: '',
      arrivalTime: '',
      carrier: '',
      origin: ''
    };
  }

  render() {
    return (
      <Div1>
        <FlightInfo />
      </Div1>
    );
  }
}

export default App;
