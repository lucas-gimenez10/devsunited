import React from 'react';
import './CreateUser.css'
import { ReactComponent as BigLogo } from '../../assets/logoBig.svg';

export const CreateUser = () => {
     return (
         <div className='mainSignInContainer'>
             <div className="logoContainer">
                <BigLogo className='bigLogo'/>
             </div>
            <div className='createUserContainer'>
                <h2 className='createUserTitle'>Welcome <span className='colorBeta'>name!</span></h2>
                <input className='createUserInput' type="text" placeholder='Type your username' />
                <p>Select your favorite color</p>
                <div className="colorsContainer">
                    <div className='color red'></div>
                    <div className='color orange'></div>
                    <div className='color yellow'></div>
                    <div className='color green'></div>
                    <div className='color blue'></div>
                    <div className='color violet'></div>
                </div>
                <button className='createUserButton'>continue</button>
                <p className="copyright">© 2021 Devs_United - <span className="colorBeta">BETA</span></p>
            </div>
         </div>
     )
}