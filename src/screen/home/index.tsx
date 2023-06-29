// App.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../reducer/counter/counterAction';
import RootState from '../../types';
import { fetchRegion } from '../../reducer/address/addressAction';
import { Dispatch } from 'redux';



const HomeScreen: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<Dispatch<any>>();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  useEffect(() =>{
    dispatch(fetchRegion())
  },[dispatch])

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default HomeScreen;
