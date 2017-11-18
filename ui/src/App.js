import React from 'react';
import './css/App.css';
import ListNews from './components/ListNews';

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
        <div className="Navbar">
          <ul className="Nav-ul">
            <li className="Nav-li"><h1 className="Site-Title">Clik!</h1></li>
            <li className="Nav-button"><button className="button3">World</button></li>
          </ul>
        </div>
        <div className="Content">
          <div className="Lists">
            <ListNews title="Helsingin Sanomat" url="https://www.hs.fi/rss/tuoreimmat.xml" />
            <ListNews title="Ilta-Sanomat" url="https://www.is.fi/rss/tuoreimmat.xml" />
            <ListNews title="MTV.fi" url="https://www.mtv.fi/api/feed/rss/uutiset_uusimmat" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
