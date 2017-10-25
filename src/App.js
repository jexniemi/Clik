import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ListNews from './components/ListNews';
/*eslint-env jquery*/

class App extends React.Component {
      constructor(props) { 
          super(props);

          this.state = {
            language: "finnish"
          }
      }
  
      render() { 
          return (
              <div className="App">
                <header className="App-header">
                  <h1 className="App-title">Clik!</h1>
                </header>
                <div className="App-feeds">
                </div>
                <div className="panel-list">
                  <ListNews title="Helsingin Sanomat" url="https://www.hs.fi/rss/tuoreimmat.xml" /> 
                  <ListNews title="Ilta-Sanomat" url="https://www.is.fi/rss/tuoreimmat.xml" />
                  <ListNews title="Iltalehti" url="http://www.iltalehti.fi/rss/uutiset.xml" />
                </div>
              </div>
          );
      }
  }

export default App;
