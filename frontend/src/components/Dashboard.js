import React, { Component } from 'react'
import AppDock from "./AppDock"
import Background from "./Background"
import PanelView from "./PanelView"

export class dashboard extends Component {
    render() {
        return (
            <div className="App">
                <Background />
                <AppDock />
                <PanelView setOverlay={this.props.setOverlay}/>
            </div>
        )
    }
}

export default dashboard
