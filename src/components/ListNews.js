import React from 'react';
import '../css/ListNews.css';
/*eslint-env jquery*/

class ListNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [{},{}] 
        }
    }

    componentDidMount() {
        this.getNews(this.props.url);
    }

    getNews(url) {
        $.get(url,function(data) {    

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
        const toList = this.state.news.slice(0, 10).map((item, i) => (
            <li><a target="_blank" href={item.link}>{item.title}</a></li>
        ));
        return (
            <div className="NewsList">
                <h2 className="Title">{this.props.title}</h2>
                <ol>{toList}</ol>
            </div>
        );
    }
}

export default ListNews;