import React from 'react';
import './LoggedOut.css'
import { ReactComponent as BigLogo } from '../../assets/logoBig.svg';
import { SignIn } from '../SignIn/SignIn'

export const LoggedOut = () => {
     return (
         <div className='mainSignInContainer'>
             <div className="logoContainer">
                <BigLogo className='bigLogo'/>
             </div>
            <div className='signInContainer'>
                <h2 className='loginTitle'>Lorem Ipsum Dolor</h2>
                <p className='loginPar'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                <SignIn/>
                <p className="copyright">© 2021 Devs_United - <span className="colorBeta">BETA</span></p>
            </div>
         </div>
     )
}