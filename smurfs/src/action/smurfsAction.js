import axios from 'axios'

export const GET_SMURFS_DATA =  'GET_SMURFS_DATA';
export const GET_SMURFS_SUCCESS =  'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE=  'GET_SMURFS_FAILURE';
//=========
export const SEND_SMURFS_DATA =  'SEND_SMURFS_DATA';
export const SEND_SMURFS_SUCCESS =  'SEND_SMURFS_SUCCESS';
export const SEND_SMURFS_FAILURE=  'SEND_SMURFS_FAILURE';


export const getData = () => {
    return dispatch => {
        //transition to loading stage
        dispatch({type: 'GET_SMURFS_DATA'});
        axios.get('http://localhost:3333/smurfs')
        .then(res => {dispatch({type: GET_SMURFS_SUCCESS, payload:  res.data})
        console.log(res)
    }
        )
        .catch(err => {dispatch({type: GET_SMURFS_FAILURE, payload:  err.response})})
    }
}

export const sendData = creds => {
    return dispatch => {
        //transition to loading stage
        // dispatch({type: 'GET_SMURFS_DATA'});
        axios.post('http://localhost:3333/smurfs', creds)
        .then(res => {dispatch({type: GET_SMURFS_SUCCESS, payload:  res.data})
        console.log(res)
    }
        )
        .catch(err => console.log(err))
    }
}