import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ListNews from './ListNews'

function handleActive(tab) {
}

const TabsExampleSimple = () => (
  <Tabs >
    <Tab label="Finland"
    style={{backgroundColor: ""}} 
    onActive={handleActive}>
        <div className="Lists">
      <ListNews title="Helsingin Sanomat" url="https://www.hs.fi/rss/tuoreimmat.xml" />
      <ListNews title="Ilta-Sanomat" url="https://www.is.fi/rss/tuoreimmat.xml" />
      <ListNews title="MTV.fi" url="https://www.mtv.fi/api/feed/rss/uutiset_uusimmat" />
      </div>
    </Tab>
    <Tab label="World" 
    style={{backgroundColor: ""}} 
    onActive={handleActive}>
      <div className="Lists">
      <ListNews title="The Guardian" url="https://www.theguardian.com/international/rss" />
      <ListNews title="Sky News" url="http://feeds.skynews.com/feeds/rss/world.xml" />
      <ListNews title="Daily Mail" url="http://www.dailymail.co.uk/articles.rss" />
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;