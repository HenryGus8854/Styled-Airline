import { connect } from 'react-redux';
import * as actionCreators from './actions/index.js';
import FlightInfo from './component/FlightInfo.js';
import React from 'react';

class Flights extends React.Component {
  render() {
    return <FlightInfo></FlightInfo>;
  }
}

const mapStateToProps = state => {
  return {
    flights: state.flights
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFlightInfo
  };
};

export default connect(mapStateToProps, actionCreators)(Flights);
