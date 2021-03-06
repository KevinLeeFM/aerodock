import React from 'react';
import PropTypes from 'prop-types'

export default class Button extends React.Component {

    static propTypes = {
        // The function being called when the button is clicked. The function must be binded or passed as an arrow function in order for the `this` keyword to work.
        onClick: PropTypes.func,
        // The level of severity displayed by the button. May be 'min', 'low', primary', or 'critical'. Defaults to 'low'.
        level: PropTypes.string,
        // Whether it can be clicked
        disabled: PropTypes.bool,
    }

    static levelStyle = {
        global: "m-1 px-2 py-1 text-base text-fgcolor-900 rounded transition duration-200",
        min: "bg-bgcolor hover:bg-fgcolor-100",
        low: "bg-bgcolor hover:bg-fgcolor-100 border border-fgcolor-300 hover:shadow",
        primary: "bg-primary-100 hover:bg-bgcolor border border-primary-400 hover:shadow",
        critical: 'bg-critical-100 hover:bg-bgcolor border border-critical-400 hover:shadow',
        disabled: 'bg-fgcolor-100 text-opacity-50 cursor-default',
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let level = this.props.disabled ? 'disabled' : (this.props['level'] || 'low'); // defaults to low

        let onClick = this.props['onClick'] || (() => {});
        
        let className = Button.levelStyle.global + ' ' + Button.levelStyle[level];

        return (
            <button className={className} onClick={onClick} disabled={this.props.disabled}>
                {this.props.children}
            </button>
        );
    }
}