// counterReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { getRegionFail, getRegionSuccess } from './addressAction';

interface AddressState {
  data: any,
  error: string
}

const initialState: AddressState = {
  data: null,
  error: ''
};

const addressReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRegionSuccess, (state, action) => {
      state.data = action.payload
    })
    .addCase(getRegionFail, (state, action) => {
      state.error = action.payload ? JSON.stringify(action.payload) : 'Terjadi Kesalahan'
    })
});

export default addressReducer;
