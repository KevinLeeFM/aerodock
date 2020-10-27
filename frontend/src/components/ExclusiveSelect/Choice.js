import React from 'react';

export default class Choice extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.children;
    }
}