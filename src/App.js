import React, { Component } from 'react';
import { render } from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import SidebarControls from './SidebarControls';

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