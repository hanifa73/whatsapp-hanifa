import React, { useState } from 'react'
import './css/chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
function Chat({messages,key}) {
       
    const [input, setInput] = useState("");

    const sendMessage = async(event)=>{
       event.preventDefault();
      
       await axios.post("/messages/new",{
          "message":input,
        "name": "Demo app",
        "timestamp":(new Date().toUTCString()),
        "received": true,
        })
        setInput([])
        
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>

            
            <div className="chat_headerInfo">
            <h3>Room name</h3>
            <p>Last seen....</p>

            </div>

            <div className='chat_headerRight'>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                 <IconButton>
                     <AttachFileIcon/>
                 </IconButton>
                 <IconButton>
                     <MoreVertIcon/>
                 </IconButton>

            </div>
            </div>

            <div className="chat_body">
                
                <p className="chat_message  ?{message.received &&  chat_reciever }"> 
                <span className="chat_name">name</span>
                message
                <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>  
              
                {messages.map((message)=>(
                <p className=" chat_message ?{message.received && chat_message  }"> 
                <span className="chat_name">{message.name}</span>
                
                 {message.message}
                <span className="chat_timestamp">{message.timestamp}</span>
                
                </p>))}  
            </div>


            <div className="chat_footer">
                 <IconButton>

                <InsertEmoticonIcon/>
                 </IconButton>

                <form>
                    <input value={input} onChange={(event)=>setInput(event.target.value)} placeholder="type message" type="text">
                        
                    </input>
                    
                    <button type="submit" onClick={sendMessage} >send a message</button>
                </form>
                 <IconButton>

                <MicIcon/>
                 </IconButton>


            </div>
        </div>
    )
}

export default Chat
