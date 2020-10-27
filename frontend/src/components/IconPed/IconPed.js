import React from 'react';
import PropTypes from 'prop-types';

export class IconPed extends React.Component {

    static propTypes = {
        // The URL of the svg
        src: PropTypes.string,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='w-20 flex flex-col'>
                <img className='justify-center' src={this.props.src}></img>
                <div className='text-center'>{this.props.children}</div>
            </div>
        )
    }
}