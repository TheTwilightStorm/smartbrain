import React from 'react';
import logo from './logo.png';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <header style={{top: 0,}} className='bg-black-90 fixed w-100 ph1 pv1 pv2-ns ph4-m ph5-l'>
                <nav className='db dt-l w-100 border-box'>
                    <div className='db dtc-l v-mid mid-gray link w-100 w-25-l tc tl-l mb2 mb0-l'>
                        <img src={logo} className="dib w3 h3 br-100" alt="Site Name"></img>
                    </div>
                    <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
                        <p onClick={() => onRouteChange('signout')} className='link dim white f5 f4-l dib mr3 mr4-l pointer'>Sign Out</p>
                    </div>
                </nav>
            </header>
        );
    } else {
        return (
            <header style={{top: 0,}} className='bg-black-90 fixed w-100 ph1 pv1 pv2-ns ph4-m ph5-l'>
                <nav className='db dt-l w-100 border-box'>
                    <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
                        <p onClick={() => onRouteChange('signin')} className='link dim white f5 f4-l dib mr3 mr4-l pointer'>Sign In</p>
                        <p onClick={() => onRouteChange('register')} className='link dim white f5 f4-l dib pointer'>Register</p>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navigation;