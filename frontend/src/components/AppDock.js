import React, { Component } from 'react'
import img from "../assets/maps-and-location.png"

class appDock extends Component {
    state = {
        apps: [
            {
                id: 1,
                title: 'test',
                img: "/Users/paulgu/Development/aerodock/frontend/src/assets/maps-and-location.png"
            },
            {
                id: 2,
                title: 'test2',
                img: "/Users/paulgu/Development/aerodock/frontend/src/assets/maps-and-location.png"
            }
        ]
    }

    render() {
        return (
            <div className="pl-8 p-2 bg-gray-900 rounded-b-lg">
                    {this.state.apps.map((app) => (
                        <img className="inline m-2 rounded-full" src={img} />
                    ))}  
            </div>
        )
    }
}

export default appDock
