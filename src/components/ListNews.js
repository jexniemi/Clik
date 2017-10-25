import React from 'react';
import '../css/ListNews.css';

class ListNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const toList = this.props.list.map((item, i) => (
            <li><a target="_blank" href={item.link}>{item.title}</a></li>
        ));
        return (
            <div>
                <h2 className="Title">{this.props.title}</h2>
                <ol>{toList}</ol>
            </div>
        );
    }
}

export default ListNews;