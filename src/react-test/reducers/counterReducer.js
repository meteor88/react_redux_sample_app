import { PLUS, MINUS, MULTIPLY, DIVISION, SET_A, SET_B } from '../actions/counterAction';
import { fromJS } from 'immutable';

const initialState = fromJS({
  inputA: 0,
  inputB: 0,
  result: 0
});

const _executePlus = (a, b) => {
  return parseInt(a) + parseInt(b);
}

const _executeMinus = (a, b) => {
  return a - b;
}

const counterApp = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return state.set('result', _executePlus(state.get('inputA'), state.get('inputB')));
    case MINUS:
      return state.set('result', _executeMinus(state.get('inputA'), state.get('inputB')));
    case MULTIPLY:
      return state.set('result', state.get('inputA') * state.get('inputB'));
    case DIVISION:
      return state.set('result', state.get('inputA') / state.get('inputB'));
    case SET_A:
      return state.set('inputA', action.value);
    case SET_B:
      return state.set('inputB', action.value);
    default:
      return state;
  }
};

// const counterApp = counter;

export default counterApp;