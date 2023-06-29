// App.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegion } from '../../reducer/address/addressAction';
import { Dispatch } from 'redux';
import icon_logo from './logo_icon.svg'



const LoginScreen: React.FC = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const isEffectExecuted = useRef(false);
  const [isLogin, setIslogin] = useState(true)

  useEffect(() => {
    if (!isEffectExecuted.current) {
      dispatch(fetchRegion())
      isEffectExecuted.current = true
    }
  }, [])


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <img
        className='object-cover w-40 mb-5'
        src={icon_logo}
        alt="logoLogin"
      />
      <div className='bg-white p-8 rounded shadow-md'>
        {isLogin ? <form className='space-y-4'>
          <div>
            <label htmlFor='username' className='block mb-1'>Username: </label>
            <input type='text' id='username' className='w-full px-4 py-2 border-gray-400 border-2 rounded' placeholder='Masukan Username' />
          </div>
          <div>
            <label htmlFor='password' className='block mb-1'>Password: </label>
            <input type='password' id='password' className='w-full px-4 py-2 border-gray-400 border-2 rounded' placeholder='Masukan Password' />
          </div>
          <button type="submit" className='w-full py-2 bg-primary text-white rounded '>Login</button>
        </form> :
          <form className='space-y-4'>
            <div>
              <label htmlFor='username' className='block mb-1'>Username: </label>
              <input type='text' id='username' className='w-full px-4 py-2 border-gray-400 border-2 rounded' placeholder='Masukan Username' />
            </div>
            <div>
              <label htmlFor='password' className='block mb-1'>Password: </label>
              <input type='password' id='password' className='w-full px-4 py-2 border-gray-400 border-2 rounded' placeholder='Masukan Password' />
            </div>
            <div>
              <label htmlFor='password' className='block mb-1'>Konfirmasi Password: </label>
              <input type='password' id='password' className='w-full px-4 py-2 border-gray-400 border-2 rounded' placeholder='Masukan Password' />
            </div>
            <button type="submit" className='w-full py-2 bg-primary text-white rounded '>Register</button>
          </form>}
      </div>
      <button onClick={() => setIslogin(!isLogin)}
        type="submit" className='py-2 px-20 mt-5 bg-primary text-white rounded'>{isLogin ? 'Register' : 'Kembali'}</button>
    </div>
  );
};

export default LoginScreen;
