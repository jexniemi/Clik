import React from 'react';

class ListNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const toList = this.props.list.map((item, i) => (
            <div>
                <a href={item.link}>{item.title}</a>
            </div>
        ));
        return (
            <div>
                {toList}
            </div>
        );
    }
}

export default ListNews;