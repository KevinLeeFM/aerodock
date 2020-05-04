import React, { Component } from 'react'
import AppDock from "./AppDock"
import Background from "./Background"
import PanelView from "./PanelView"

export class dashboard extends Component {
    render() {
        return (
            <div className="App">
                <Background />
                <PanelView />
                <AppDock className='fixed'/>
            </div>
        )
    }
}

export default dashboard
