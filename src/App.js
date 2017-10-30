import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ListNews from './components/ListNews';
/*eslint-env jquery*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "finland"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <div className="Navbar">
            <ul className="Nav-ul">
              <li className="Nav-li"><h1 className="Site-Title">Clik!</h1></li>
            </ul>
          </div>
        </header>
        <div className="Lists">
          <ListNews title="Helsingin Sanomat" url="https://www.hs.fi/rss/tuoreimmat.xml" />
          <ListNews title="Ilta-Sanomat" url="https://www.is.fi/rss/tuoreimmat.xml" />
          <ListNews title="Iltalehti" url="http://www.iltalehti.fi/rss/uutiset.xml" />
        </div>
      </div>
    );
  }
}

export default App;
