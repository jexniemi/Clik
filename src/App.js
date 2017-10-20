import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListNews from './components/ListNews';
/*eslint-env jquery*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    }
    this.getNews = this.getNews.bind(this);
  }

  componentWillMount() {
    this.getNews3();
  }

  getNews() {
    $.get("https://www.is.fi/rss/tuoreimmat.xml", function (data) {
      var $xml = $(data);
      var items = [];
      $xml.find("item").each(function () {
        var each = $(this),
          item = {
            title: each.find("title").text(),
            link: each.find("link").text(),
            description: each.find("description").text(),
            pubDate: each.find("pubDate").text(),
          }
        console.log("it works");
        items.push(item);
      }.bind(this));
      this.setState({ news: items })
    }.bind(this));
  }

  getNews2() {
    $(document).ready(function () {
      $.ajax({
        type: "GET",
        url: "https://www.is.fi/rss/tuoreimmat.xml",
        dataType: "xml",
        success: function (xml) {

          var items = [];
          $(xml).find('item').each(function () {
            var each = $(this),
              item = {
                title: each.find("title").text(),
                link: each.find("link").text(),
                description: each.find("description").text(),
                pubDate: each.find("pubDate").text()
              }

            items.push(item);
          });

          return items;
        }
      });
    });
  }

  getNews3() {
    $.ajax({
      type: "GET",
      url: "https://www.is.fi/rss/tuoreimmat.xml",
      dataType: "xml",
      success: function (data) {
        var xml = $(data)
        var xmlDOM = new DOMParser().parseFromString(xml, 'text/xml');
        var jsonText = JSON.stringify(this.xmlToJson(xmlDOM));
        this.setState({ news: jsonText });
      }.bind(this)
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News</h1>
        </header>
        <div className="App-feeds">
        </div>
        {this.state.news}}
      </div>
    );
  }

  xmlToJson(xml) {

    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) { // text
      obj = xml.nodeValue;
    }

    // do children
    // If just one text node inside
    if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
      obj = xml.childNodes[0].nodeValue;
    }
    else if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }


}

export default App;
