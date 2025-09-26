import React, { Component } from 'react';
import propTypes from 'prop-types';
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



class App05 extends Component {
  render() { return (
    <h1 style={{
      backgroundColor: this.props.renk ? 'red' : 'white',
      fontSize: this.props.boyut + 'px'
    }}>Merhaba2, {this.props.ad} {this.props.soyad}</h1>
  );
  }
}
 
App05.propTypes = { 
  ad: propTypes.string.isRequired,
  soyad: propTypes.string,
  renk: propTypes.bool,
  boyut: propTypes.number
};
 
App05.defaultProps = { 
  ad: "Erdinç",
  soyad: "Uzun",
  renk: true,
  fontSize: 20
};
 

class App06 extends Component {
  render() { return (
    <div style={{
      backgroundColor: this.props.renk ? 'red' : 'pink',
      fontSize: this.props.boyut + 'px'
    }}>Merhaba2, {this.props.ad} {this.props.soyad}
     <div className="test">{this.props.children}</div>
    </div>
  );
  }
}

App06.propTypes = { 
  ad: propTypes.string.isRequired,
  soyad: propTypes.string,
  renk: propTypes.bool,
  boyut: propTypes.number,
  children: propTypes.node.isRequired
};

class App07 extends Component {
  render() { return (
    <App06 ad= "Erdinç" soyad= "Uzun" renk={false} fontsize={30}>
    <p>Deneme</p>
    </App06>
  );
  }
}

class App08 extends Component {
  handleClick() {
    console.log('Tiklandi...');
  }

  render() { return (
    <button onClick={this.handleClick}>
        Tikla
    </button>
  );
  }
}
class App09 extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

   
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export {App01, App02, App03, App05, App06, App07, App08, App09}
export default App09;

