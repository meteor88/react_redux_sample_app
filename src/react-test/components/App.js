import React from 'react';
import Inputs from './Inputs';
import Buttons from './Buttons';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="col-lg-6">
          <Inputs></Inputs>
          <br />
          <Buttons></Buttons>
          <br />
          <br />
          <div className="input-group">
            <span className="input-group-addon" id="result">RESULT</span>
            <input type="text" className="form-control" placeholder="결과 보여주는곳 ..." aria-label="Username" aria-describedby="result" value={this.props.result} />
          </div>
        </div>
      </div>
    );
  }
}

let getState = (state) => {
  return {
    result: state.get('result')
  };
};

App = connect(getState)(App);

export default App;