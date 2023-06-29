import React, { useState } from 'react';
import HomeScreen from './home';
import ProfileScreen from './profile';
import { useLocation, useNavigate } from 'react-router-dom';

function Landscape() {
    const location = useLocation()
    const navigate = useNavigate()

    const ScreenShow = () => {
        switch (location.pathname) {
            case '/':
                return <HomeScreen />

            default:
                return <ProfileScreen />
        }
    }
    return (
        <div>
            <ScreenShow />
            <nav className='fixed bottom-0 left-0 right-0  text-white flex'>
                <ButtonView title='Home' onClick={async () => navigate('/')} />
                <div className='w-1 bg-white' />
                <ButtonView title='Profile' onClick={async () => navigate('/profile')} />
            </nav>

        </div>
    )
}

type ButtonType = {
    title: string,
    onClick: () => {}
}
const ButtonView = ({ title, onClick }: ButtonType) => {
    return (
        <button className='text-white bg-gray-900 flex-1 py-4' onClick={onClick}>{title}</button>
    )
}

export default Landscape

{/* <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between">
<Link to="/" className="text-white">Beranda</Link>
<Link to="/about" className="text-white">Tentang</Link>
<Link to="/contact" className="text-white">Kontak</Link>
</nav> */}