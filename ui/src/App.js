import React from 'react';
import './css/App.css';
import './css/MobileApp.css';
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
            <h1 className="Site-Title">Clik!</h1>
          </ul>
        </div>
        <div className="Content">
          <ListNews title="Helsingin Sanomat" url="https://www.hs.fi/rss/tuoreimmat.xml" />
          <ListNews title="Ilta-Sanomat" url="https://www.is.fi/rss/tuoreimmat.xml" />
          <ListNews title="MTV.fi" url="https://www.mtv.fi/api/feed/rss/uutiset_uusimmat" />
        </div>
        <div className="Footer">
        </div>
      </div>
    );
  }
}

export default App;
