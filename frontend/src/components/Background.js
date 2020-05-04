import React, { Component } from 'react'
import SkyGradient from './SkyGradient'

export class Background extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: this.props['date'] || new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            60000 // ticks once a minute
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState((state, props) => (
            {
                date: props.date || new Date()
            }
        ));
    }

    render() {
        return (
            <div className='bg-opacity-50 h-screen w-screen fixed' style={{background: SkyGradient.getCSS(this.state.date)}}></div>
        )
    }
}

export default Background

