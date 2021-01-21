

import './css/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect,useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom" ;
import Login from './Login.js';

function App() {
   
  const [messages, setMessages] = useState([])
   const [index, setIndex] = useState('0')
  useEffect(() => {
         
    axios.get('/messages/sync')
    .then(response=>{
      
      setMessages(response.data);
    })

  }, [])  
      

  useEffect(() => {

      const pusher = new Pusher('34e9903e71ecc4fe1711', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
      setIndex([...index,index+"1"])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
    
  }, [messages,index])
      console.log(messages);
            
    //  console.log('looookkkk',index)
  return (
   
    
    <div className="app">
      <div className='app_body'>
          <Router>
            <Switch>
            <Route path="/login">
             <Login />
                 </Route> 


        <Route path="/">
         <Sidebar/>
          <Chat messages={messages} key={index}/>
          </Route>


          </Switch>
      </Router>
      </div>
      

     
    </div>
  );
}

export default App;
