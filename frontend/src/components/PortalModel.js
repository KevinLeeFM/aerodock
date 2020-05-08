import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modelRoot = document.getElementById('root');

export class PortalModel extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount(){
        modelRoot.appendChild(this.el);
    }

    componentWillUnmount(){
        modelRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default PortalModel
