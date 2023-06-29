// counterActions.ts
import { createAction } from '@reduxjs/toolkit';
import { GET, GETREGIONFAIL, GETREGIONSUCCESS } from '../../common';
import rinapi from '../../restfull/api';

export const getRegionSuccess = createAction(GETREGIONSUCCESS);
export const getRegionFail = createAction(GETREGIONFAIL);

export const fetchRegion = () => {
    return async (dispatch: any) => {
        try {
            await rinapi(GET, '/region').then(value => {
                dispatch(getRegionSuccess(value?.data))
            }).catch(error => {
                dispatch(getRegionFail(error))
            })
        } catch (error) {
            dispatch(getRegionFail())
        }
    }
}