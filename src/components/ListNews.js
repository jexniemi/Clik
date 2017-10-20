import React from 'react';

class ListNews extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const toList = this.props.list.map((item, i) => (
            <div>
                <h3>{item.title}</h3>
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