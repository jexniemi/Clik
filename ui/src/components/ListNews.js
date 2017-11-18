import React from 'react';
import '../css/ListNews.css';
import $ from "jquery";
var Panel = require('react-bootstrap').Panel;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

class ListNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{}, {}],
            imgURL: "",
            link: "",
            open: true
        }
    }

    componentDidMount() {
        this.getNews(this.props.url);
    }

    getNews(url) {
        $.get(url, function (data) {

            var $xml = $(data);
            var items = [];
            this.setState({ imgURL: $xml.find("image").find("url").text() });
            this.setState({ link: $xml.find("image").find("link").text() });

            $xml.find("item").each(function () {
                var $this = $(this);
                items.push({
                    title: $this.find("title").text(),
                    link: $this.find("link").text(),
                    description: $this.find("description").text(),
                    pubDate: $this.find("pubDate").text(),
                });
            });

            this.setState({ news: items });

        }.bind(this), 'xml');
    }

    render() {
        const toList = this.state.news.slice(0, 10).map((item, i) => (
            <ListGroupItem>
                <a className="LN-a" target="_blank" href={item.link}>{i + 1 + ". " + item.title}</a>
            </ListGroupItem>
        ));
        var header = (<a href={this.state.link} target="_blank"><img className="Logo" src={this.state.imgURL} alt="SiteLogo" /></a>);
        return (
            <div className="LN-wrapper">
                <Panel defaultExpanded header={header}>
                    <ListGroup fill>
                        {toList}
                    </ListGroup>
                </Panel>
            </div>
        );
    }
}

export default ListNews;