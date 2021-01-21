// import React, { useState } from 'react';
import './css/login.css';
// import { Link, useHistory}  from 'react-router-dom';
// import { auth } from './firebase';

function Login() {
    
    // const histroy=useHistory();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    
    
    // const signIn = e=>{
    //     e.preventDefault();
    //     //firebase login hereeee
    //     auth
    //      .signInWithEmailAndPassword(email, password)
    //         .then((auth)=>{
             
    //          if (auth){
    //              histroy.push('/')
    //          }
    //        })
    //         .catch(error=> alert(error.message));

    //     }

    // const register =e =>{
    //     e.preventDefault();
    //     //firebas register hereeee
    //     auth
    //        .createUserWithEmailAndPassword(email, password)
    //        .then((auth)=>{
    //          console.log(auth)
    //          if (auth){
    //              histroy.push('/')
    //          }
    //        })
    //         .catch(error=> alert(error.message));
    // }

    return (
        // <div className="login">
        //     <Link   to ='/'>
        //    <img   className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=" logo"/>
        //    </Link>
        //    <div className="login_contanier">
        //        <h1>sign in</h1>
        //        <form>
        //            <h5>E-mail</h5>
        //            <input type='text' value={email} onChange={e=> setEmail(e.target.value)}/>
        //             <h5>password</h5>
        //            <input type='password'value={password} onChange={e=> setPassword(e.target.value)}/><br/>
        //            <button  type='submit' className="login_signInButton" onClick={signIn}>sign in</button>
                   

        //        </form><br/>
        //              <p>By using Amazon_clone Services, you agree to these conditions.
        //                   Please read them carefully. Please read them carefully. Please read them carefully.
        //              </p>

        //          <button type='submit' className="login_registerButton" onClick={register}>create your amazon account</button>    
        //    </div>
        // </div>
        <p>hello</p>

       
    )
}

export default Login