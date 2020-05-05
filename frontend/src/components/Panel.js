import React, { Component } from 'react'

export class Panel extends Component {

    render() {
        let className = 'rounded-md shadow-panelStatic w-'+this.props.size;
        return (
            <div className='rounded-md ml-4 mr-4 flex transition duration-200'>
                <iframe src={this.props.link} className={className} /> 
            </div>
        )
    }
}

export default Panel
