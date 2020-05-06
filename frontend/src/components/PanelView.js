import React, { Component } from 'react'
import Panels from './Panel'
import { Link } from 'react-router-dom'
import setting from '../assets/svg/icon-cog.svg'
import plus from '../assets/svg/icon-plus-circle.svg'

export class PanelView extends Component {
    state = {
        panels: [
            {
                id: 1,
                size: 'small',
                link: 'http://192.168.1.3/nextcloud',
            },
            {
                id: 2,
                size: 'medium',
                link: 'https://na.op.gg/',
            },
            {
                id: 3,
                size: 'large',
                link: "https://www.youtube.com/embed/iA0e_nWKjGM",
            }
        ]
    }

    render() {
        return (
            <div className='z-10 w-full h-full py-40 fixed p-5 flex overflow-x-auto'>
                {this.state.panels.map((panel) => (
                    <Panels link={panel.link} size={panel.size}></Panels>
                ))} 
                <div>
                    <Link className='rounded-full' to={"/users/"}>
                        <div className='bg-green-300 m-3 w-10 h-10 rounded-full flex shadow-panelStatic hover:bg-green-200'>   
                            <img className='m-auto rounded-full' src={setting} />
                        </div>
                    </Link>
                    <Link className='rounded-full' to={"/users/"}>
                        <div className=' bg-primary-300 m-3 w-10 h-10 rounded-full flex shadow-panelStatic hover:bg-primary-200'>
                            <img className="m-auto rounded-full"  src={plus} />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PanelView