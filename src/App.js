import React, { Component } from 'react';
import { render } from 'react-dom';
import Footer from './containers/Footer';
import Header from './containers/Header';
import SidebarControls from './containers/SidebarControls';
require("./styles/style.scss");

class App extends Component {
  render() {
    return (
      <div>
        <SidebarControls />
        <div className="main-container">
          <Header />
          <Footer />
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));