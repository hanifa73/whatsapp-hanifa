import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/sidebarChat.css'

function Sidebarchat() {
    return (
        <div className='sidebarChat'>
            <Avatar/>
            <div className="sidebarChat_info">
                <h2>room name</h2>
                <p>the last massege in the room</p>

            </div>
        </div>
    )
}

export default Sidebarchat
