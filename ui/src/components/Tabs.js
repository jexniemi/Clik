import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ListNews from './ListNews'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Finland" 
    onActive={handleActive}>
      <ListNews title="Helsingin Sanomat" url="https://www.hs.fi/rss/tuoreimmat.xml" />
      <ListNews title="Ilta-Sanomat" url="https://www.is.fi/rss/tuoreimmat.xml" />
      <ListNews title="MTV.fi" url="https://www.mtv.fi/api/feed/rss/uutiset_uusimmat" />
    </Tab>
    <Tab label="World" 
    onActive={handleActive}>
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;