import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import * as actionCreator from '../actions/index.js';
import { connect } from 'react-redux';

function getCarrierIcon(code) {
  return `https://wf-deploy-assets.whereto.com/airlines/${code}.png`;
}

const theme = {
  font: 'Helvetica Neue',
  fontSize: '1em'
};

const Div1 = styled.div`
  border: 1px solid black;
  border-color: #000000;
  background: #fbfcfc;
  height: 100px;
  width: 950px;
  display: flex;
  border-radius: 5px;
  &:hover {
    background: #cefefe;
  }
`;

const DivM = styled.div``;

const DivImg = styled.div`
  height: 60px;
  width: 60px;
`;

const DivName = styled.div`
  margin: 0px;
`;

const DivDateTime = styled.div`
  padding-top: 12px;
`;

const DivAirport = styled.div`
  padding-top: 12px;
`;

const DivC = styled.div`
  padding: 10px 24px;
  box-sizing: border-box;
  height: 100px;
  width: 25%;
`;

const Div2 = styled.div`
  padding: 10px 24px;
  box-sizing: border-box;
  height: 100px;
  width: 37.5%;
`;

const Pc = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
  padding-left: 17px;
`;
const Pa = styled.span`
  font-size: 2rem;
  font-family: ${props => props.theme.font};
`;
const Pdt = styled.span`
  font-size: ${props => props.theme.fontSize};
  font-family: ${props => props.theme.font};
  color: #000000;
`;

const Li = styled.li`
  display: flex;
  position: relative;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin: 1px;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
`;

const mapStateToProps = state => {
  return {
    flights: state.flights
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFlightInfo: () => dispatch(actionCreator.getFlightInfo())
  };
};

class FlightInfo extends Component {
  componentDidMount(e) {
    this.props.getFlightInfo();
  }

  render() {
    const theresult = this.props.flights.flightInfo;
    return (
      <ThemeProvider theme={theme}>
        <DivM>
          {theresult.map((model, index) => (
            <div key={index}>
              <Li>
                <Div1>
                  <DivC>
                    <DivImg>
                      <Img src={getCarrierIcon(model.carrier)} />
                    </DivImg>
                    <DivName>
                      <Pc>{model.carrier}</Pc>
                    </DivName>
                  </DivC>
                  <Div2>
                    <DivAirport>
                      <Pa>{model.origin}</Pa>
                    </DivAirport>
                    <DivDateTime>
                      <Pdt>{model.departureTime}e</Pdt>
                    </DivDateTime>
                  </Div2>
                  <Div2>
                    <DivAirport>
                      <Pa>{model.destination}</Pa>
                    </DivAirport>
                    <DivDateTime>
                      <Pdt>{model.arrivalTime}</Pdt>
                    </DivDateTime>
                  </Div2>
                </Div1>
              </Li>
            </div>
          ))}
        </DivM>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightInfo);
