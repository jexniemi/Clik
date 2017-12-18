import React from 'react';
import './css/App.css';
import './css/MobileApp.css';
import ListNews from './components/ListNews';
import Tabs from './components/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
          <MuiThemeProvider>
          <Tabs className="Tabs"/>
          </MuiThemeProvider>
          </div>
        </div>
        <div className="Footer">
        </div>
      </div>
    );
  }
}

export default App;
