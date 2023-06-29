// App.tsx
import React from 'react';
import HomeIcon from './home.svg'

const HomeScreen: React.FC = () => {


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>

      <div className='bg-white p-8 rounded shadow-md'>
        <img src={HomeIcon} className='w-40' />
      </div>
    </div>
  );
};

export default HomeScreen;
