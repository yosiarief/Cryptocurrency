import axios from 'axios';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';
import { apiBaseUrl } from './../Utils/Constants';

export default function FetchCoinDatav(){
    return dispatch =>{

        dispatch({type: FETCHING_COIN_DATA})

        return axios.get(`${apiBaseUrl}/v1/ticker/?start=100&limit=10`)
            .then(res => {
                dispatch({type: FETCHING_COIN_DATA_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: FETCHING_COIN_DATA_FAIL, payload: err.data})
            });
    }
}