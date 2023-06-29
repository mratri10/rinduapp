// counterActions.ts
import { createAction } from '@reduxjs/toolkit';
import { GET, GETREGIONFAIL, GETREGIONSUCCESS } from '../../common';
import rinapi from '../../restfull/api';

export const getRegionSuccess = createAction(GETREGIONSUCCESS);
export const getRegionFail = createAction(GETREGIONFAIL);

export const fetchRegion = () => {
    console.log("++++++++++++++++++++ ", 1)
    return async (dispatch: any) => {
        try {
            console.log("++++++++++++++++++++ ", 2)
            await rinapi(GET, '/region').then(value => {
                console.log("++++++++++++++++++++ 3", value)
                dispatch(getRegionSuccess(value?.data))
            }).catch(error => {
                console.log("++++++++++++++++++++ 2.5", error)
                dispatch(getRegionFail(error))
            })
        } catch (error) {
            console.log("++++++++++++++++++++ ", 1.5)
            dispatch(getRegionFail())
        }
    }
}