import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img from "../assets/maps-and-location.png"

class AppDock extends Component {
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
            <div className="flex w-screen z-10 absolute px-4 bg-gray-900 rounded-b-lg object-contain">
                {this.state.apps.map((app) => (
                    <div className="px-1 h-full border rounded border-transparent hover:shadow-dock hover:border-white hover:border-opacity-50 transition duration-700">
                        <Link to={"/users/"}>
                            <img className="m-2" src={img} />
                        </Link>
                    </div> 
                ))} 
            </div>
        )
    }
}

export default AppDock
