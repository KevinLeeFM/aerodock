import React, { Component } from 'react'
import PortalModel from './PortalModel'

export class PanelSetting extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PortalModel>
                <div className='z-20 w-full h-full bg-black fixed bg-opacity-50'>
                    <div className='bg-white rounded-md m-56 h-64 shadow-panelStatic'>
                        <div></div>
                    </div>
                </div>
            </PortalModel>
        )
    }
}

export default PanelSetting
