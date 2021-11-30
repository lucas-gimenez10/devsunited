import React from 'react'
import { ReactComponent as SmallLogo } from '../../assets/logoSmall.svg';
import { ReactComponent as TitleHeader } from '../../assets/title.svg';
import { ReactComponent as UserLogo } from '../../assets/userLogo.svg';
import './Header.css'
export const Header = () => {
    return (
        <>
        <header className='header'>
            <div>
                <UserLogo className='logoUser' />
                <SmallLogo className='smallLogo'/>
                <TitleHeader/>
            </div>
        </header>
        </>
    )
    
}