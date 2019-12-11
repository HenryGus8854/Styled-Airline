import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
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

const DivM = styled.div`
  text-align: center;
`;

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

class FlightInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  async componentDidMount() {
    const link =
      'https://gist.githubusercontent.com/bgdavidx/132a9e3b9c70897bc07cfa5ca25747be/raw/8dbbe1db38087fad4a8c8ade48e741d6fad8c872/gistfile1.txt';
    const responce = await fetch(link);
    const data = await responce.json();
    this.setState({
      result: data
    });
  }

  mapStateProps(state) {
    return {
      result: state.result
    };
  }

  render() {
    const theresult = this.state.result;
    return (
      <ThemeProvider theme={theme}>
        <DivM>
          {theresult.map(model => (
            <div key={model.departureTime}>
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

export default FlightInfo;
