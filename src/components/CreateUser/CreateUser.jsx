import React, { useContext, useState } from 'react';
import { updateData } from '../../services/CRUDops'
import { ReactComponent as BigLogo } from '../../assets/logoBig.svg';
import './CreateUser.css'
import { userContext } from '../../contexts/userProvider';

export const CreateUser = () => {

    const { uid } = useContext(userContext);
    const [ username, setUsername ] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleSetData = async () => {
        await updateData("users", uid, {
            username
        });
        setUsername('');
    };

     return (
         <div className='mainSignInContainer'>
             <div className="logoContainer">
                <BigLogo className='bigLogo'/>
             </div>
            <div className='createUserContainer'>
                <h2 className='createUserTitle'>Welcome <span className='colorBeta'>name!</span></h2>
                <input className='createUserInput' type="text" placeholder='Type your username' onChange={handleUsername} value={username}/>
                <p>Select your favorite color</p>
                <div className="colorsContainer">
                    <div className='color red'></div>
                    <div className='color orange'></div>
                    <div className='color yellow'></div>
                    <div className='color green'></div>
                    <div className='color blue'></div>
                    <div className='color violet'></div>
                </div>
                <button className='createUserButton' onClick={handleSetData}>continue</button>
                <p className="copyright">© 2021 Devs_United - <span className="colorBeta">BETA</span></p>
            </div>
         </div>
     )
}