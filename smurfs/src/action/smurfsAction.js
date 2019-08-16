import axios from 'axios'

export const GET_SMURFS_DATA =  'GET_SMURFS_DATA';
export const GET_SMURFS_SUCCESS =  'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE=  'GET_SMURFS_FAILURE';

export const getData = () => {
    return dispatch => {
        //transition to loading stage
        dispatch({type: 'GET_SMURFS_DATA'});
        axios.get('http://localhost:3333/smurfs')
        .then(res => {dispatch({type: GET_SMURFS_SUCCESS, payload:  res.data})})
        .catch(err => {dispatch({type: GET_SMURFS_FAILURE, payload:  err.response})})
    }
}