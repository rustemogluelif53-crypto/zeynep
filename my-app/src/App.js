import React, { Component } from 'react';
class App01 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React!
      </h1>
    );
  }
}

class App02 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React 2!
      </h1>
    );
  }
}

class App03 extends Component {
  render() { return (
  <div className="test">
    <App02 />
    <App01 />
  </div>
  );
  }
}

export {App01, App02, App03}
export default App03;