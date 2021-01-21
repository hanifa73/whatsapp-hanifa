import React from 'react'
import './css/sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat.js';
function Sidebar() {
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <Avatar src="https://images.ctfassets.net/9jo6nfkxfkk7/1yMQxYoIFm7jBDRMjcPHuz/55fb06e02bd8be06ffdc584e8e1cf3b9/fiko.jpg?w=30&h=30&fit=thumb" alt='fico'/>
                <div className="sidebar_headerRight">
                    <IconButton   className="MuiSvgIcon-root" >
                    <DonutLargeIcon/> 
                    
                    </IconButton>

                    <IconButton className="MuiSvgIcon-root">
                       <ChatIcon/>  
                    </IconButton>
                   
                   <IconButton className="MuiSvgIcon-root">
                       <MoreVertIcon />
                   </IconButton>
                   
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidrbar_searchContainer">
                    <IconButton className="MuiSvgIcon-root">
                    <SearchOutlinedIcon/>
                    </IconButton>
                    <input placeholder="search or start new chat" type="text"></input>

                </div>
            </div>

            <div className="sidebar_chats">
             
                <SidebarChat/>
                 <SidebarChat/>
                  
            </div>
        </div>
    )
}

export default Sidebar
