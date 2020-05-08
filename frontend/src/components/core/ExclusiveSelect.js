import React from 'react';
import Button from './Button';

export default class ExclusiveSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,

            // name of each choice
            choiceList: React.Children.map(
                this.props.children, (x) => {
                    try {
                        x.props.name;
                    } catch(e) {
                        throw 'TypeError: ExclusiveSelect only allow Choice components as its children!'
                    }

                    return x.props.name
                }
            ),
            choiceLevel: {},
        };
        this.onSelect.bind(this);
    }

    // fired when a choice is selected
    onSelect(selected) {
        this.setState({selected: selected});

        try {
            this.props.onValueChange(selected);
        } catch(e) {
            throw `TypeError: ExclusiveSelect doesn't exist or it isn't a function. It is of type: ${typeof(this.props.onValueChange)}.`;
        }

        let choiceLevel = {};
        
        // update the level style for each button
        for (const k of this.state.choiceList) {
            choiceLevel[k] = (k === selected ? 'primary' : 'low');
        }

        this.setState({choiceLevel: choiceLevel});
    }

    render() {
        return(
            // make each children Choice component a button that return the choice's name if chosen
            <div className="flex">
                {React.Children.map(this.props.children, x => {

                    let onClick = () => {
                        this.onSelect(x.props.name);
                    }

                    // this in onClick means the ExclusiveSelect component
                    onClick = onClick.bind(this);

                    return(
                        <Button
                            onClick={onClick}
                            // use primary button style if this choice is selected
                            level={this.state.choiceLevel[x.props.name]}
                        >
                            {x.props.children}
                        </Button>
                    )
                })}
            </div>
        )
    }
}