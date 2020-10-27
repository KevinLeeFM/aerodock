import React from 'react';

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: React.Children.map(this.props.children, c => c.props.name),
            val: {},
        }
    }

    // for event bubbling
    onValueChange(key, val) {
        this.props['onValueChange'] && this.props.onValueChange(key, val);
    }

    render() {
        return (
            React.Children.map(this.props.children, x => {
                
                let validField = true;

                // TODO: implement a better way to see if it is a proper field
                const fieldName = x.props['name'] || (validField = false);

                if (!validField) {
                    return x;
                }

                // update the val state whenever the field changes its value
                let onValueChange = v => {
                    this.setState(oldState => {
                        let val = oldState.val;

                        // change only the field that was changed
                        val[fieldName] = v;

                        return {
                            val: val,
                        };
                    });

                    this.onValueChange(fieldName, v); // for event bubbling
                };

                // this in onValueChange means the Form component
                onValueChange = onValueChange.bind(this);

                return React.cloneElement(
                    x,
                    // listen for value change in this element by adding it to this field's prop
                    {
                        onValueChange: onValueChange,
                    }
                );
            })
        );
    }
}