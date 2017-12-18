import React from 'react';
import './css/App.css';
import './css/MobileApp.css';
import ListNews from './components/ListNews';

var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

class App extends React.Component {
  constructor(props) {
    super(props);

    var initialTabStates = ["1", "2"]  
    
    this.state = {
      activeTab: "finland",
      tabStates: initialTabStates
    }
    this.setActive = this.setActive.bind(this);
  }

  setActive(newActive) {
  }


  render() {
    return (
      <div className="Wrapper">
        <div className="App">
          <div className="Navbar">
            <ul className="Nav-ul">
              <h1 className="Site-Title">Clik!</h1>
            </ul>
          </div>
          <div className="Content">
          <Nav bsStyle="tabs" className="Tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey={this.state.tabStates[0]} title="finland"><b className="TabText">Finland</b></NavItem>
          <NavItem eventKey={this.state.tabStates[1]} title="uk"><b className="TabText">UK</b></NavItem>
          </Nav>
            <ListNews title="Helsingin Sanomat" url="https://www.hs.fi/rss/tuoreimmat.xml" />
            <ListNews title="Ilta-Sanomat" url="https://www.is.fi/rss/tuoreimmat.xml" />
            <ListNews title="MTV.fi" url="https://www.mtv.fi/api/feed/rss/uutiset_uusimmat" />
          </div>
        </div>
        <div className="Footer">
        </div>
      </div>
    );
  }
}

export default App;
