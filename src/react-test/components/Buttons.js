import React from 'react';
import { plus, minus, multiply, division } from '../actions/counterAction';
import { connect } from 'react-redux';

class Buttons extends React.Component {

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.props.plus}>더하기</button>
        <button type="button" className="btn btn-secondary" onClick={this.props.minus}>빼기</button>
        <button type="button" className="btn btn-success" onClick={this.props.multiply}>곱하기</button>
        <button type="button" className="btn btn-danger" onClick={this.props.division}>나누기</button>

      </div>
    );
  }
}

let sendAction = (dispatch) => {
  return {
    plus: () => dispatch(plus()),
    minus: () => dispatch(minus()),
    multiply: () => dispatch(multiply()),
    division: () => dispatch(division())
  }
};

Buttons = connect(undefined, sendAction)(Buttons);

export default Buttons;