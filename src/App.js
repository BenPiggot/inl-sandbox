import React, { Component } from 'react';
import { render } from 'react-dom';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));