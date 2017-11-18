import React from 'react';
import '../css/ListNews.css';
import $ from "jquery";

class ListNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{}, {}],
            imgURL: "",
            link: ""
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
            <li className="LN-li" key={i}><a className="LN-a" target="_blank" href={item.link}>{item.title}</a></li>
        ));
        return (
            <div className="NewsList">
                <a href={this.state.link} target="_blank"><img className="Logo" src={this.state.imgURL} alt="SiteLogo" /></a>
                <ol>{toList}</ol>
            </div>
        );
    }
}

export default ListNews;