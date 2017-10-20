import React from 'react';

class ListNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const toList = this.props.list.map((item, i) => (
            <div>
                <a target="_blank" href={item.link}>{item.title}</a>
            </div>
        ));
        return (
            <div>
                <h2>Helsingin Sanomat:</h2>
                {toList}
            </div>
        );
    }
}

export default ListNews;