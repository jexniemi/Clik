import React from 'react';

class ListNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const toList = this.props.list.map((item, i) => (
            <div>
                <h2>{item.title}</h2>
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