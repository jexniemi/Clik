import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ListNews from './components/ListNews';
/*eslint-env jquery*/

class App extends React.Component {
  
      constructor(props) { 
          super(props);
          this.state = { news: [{},{}] };
      }
  
      componentDidMount() {
          this.getNews();
      }
  
      getNews() {
          $.get("https://www.hs.fi/rss/tuoreimmat.xml",function(data) {    
  
              var $xml = $(data);   
              var items = [];
  
              $xml.find("item").each(function() {
                  var $this = $(this);
                  items.push({
                      title: $this.find("title").text(),
                      link: $this.find("link").text(),
                      description: $this.find("description").text(),
                      pubDate: $this.find("pubDate").text(),
                  });
              });
  
              this.setState({ news: items });
  
          }.bind(this),'xml');    
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
                  <ListNews title="Helsingin Sanomat" list={this.state.news.slice(0,10)} />
                </div>
              </div>
          );
      }
  }

export default App;
