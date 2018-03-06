import React, { PropTypes } from 'react';
import '../styles/App.css';
import Header from "./common/Header"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
