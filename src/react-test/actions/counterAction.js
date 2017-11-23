export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const MULTIPLY = 'MULTIPLY';
export const DIVISION = 'DIVISION';
export const SET_A = 'SET_A';
export const SET_B = 'SET_B';

export function plus() {
  return { type: PLUS };
};

export function minus() {
  return { type: MINUS };
};

export function multiply() {
  return { type: MULTIPLY };
};

export function division() {
  return { type: DIVISION };
};

export function setA(value) {
  return {
    type: SET_A,
    value: value
  }
};

export function setB(value) {
  return {
    type: SET_B,
    value: value
  }
};