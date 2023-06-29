// App.tsx
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../../types';
import { fetchRegion } from '../../reducer/address/addressAction';
import { Dispatch } from 'redux';



const HomeScreen: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<Dispatch<any>>();
  const isEffectExecuted = useRef(false);

  useEffect(() =>{
    if(!isEffectExecuted.current){
      dispatch(fetchRegion())
      isEffectExecuted.current = true
    }
  },[])


  return (
    <div className='bg-slate-800'>
      <h1>Counter: {count}</h1>
      <button onClick={()=>0}>Increment</button>
      <button onClick={()=>0}>Decrement</button>
    </div>
  );
};

export default HomeScreen;
