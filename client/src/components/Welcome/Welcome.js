import { Fragment } from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';


const Welcome=()=>{
    const [input,setInput]=useState("");
  
    const changeInput=(event)=>{
        setInput(event.target.value);
    }
    const navigate=useNavigate();



    return (
        <Fragment>
            <div className='welcomeScreen'>
                <h1>Collaborative whiteboard</h1>
            <h2>Get hands-on right away with the Web whiteboard for instant collaboration, where you can brainstorm, share ideas and manage projects without signing-up.</h2>
            <form >

            <label>
                <h3>Create or join room </h3>
                <p>Please enter code:</p>
                </label>
                <div className='blockDiv'> 
                <input onChange={changeInput} className='inputCss' type="text" name="name" />
                </div >

            <input className='submitCss' onClick={()=>{
                // window.location.href = `https://whiteboard-for-inno.herokuapp.com/whiteboard/${input}`;
                navigate(`/whiteboard/${input}`);

            }}  value="Create OR Join" />
                
            
            </form>
            </div>
        </Fragment>
    )
}

export default Welcome;