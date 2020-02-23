//axios imported data
import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL'

export const fetchSmurfs = () => dispatch =>{
    dispatch({type: FETCH_DATA})

    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        console.log(res.data);
        dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err =>{
        console.log(err);
        dispatch({type: FETCH_FAIL, payload: err})
    })

}


export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL'

export const postSmurfs = (smurfCharacter) => dispatch =>{
    dispatch({type: POST_DATA})

    axios
    .post(`http://localhost:3333/smurfs`, smurfCharacter)
    .then(res => {
        console.log(res.data);
        dispatch({type: POST_SUCCESS, payload: res.data})
    })
    .catch(err =>{
        console.log(err);
        dispatch({type: POST_FAIL, payload: err})
    })

}


export const DELETE_STARTED = 'DELETE_STARTED';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL'


export const deleteSmurfs = (smurfsId) => dispatch =>{
    console.log('HELLO FROM INSIDE THE ACTION DISPATCH')
  
    dispatch({type: DELETE_STARTED})

    axios
    .delete(`http://localhost:3333/smurfs/${smurfsId}`)
    .then(res => {//res. header - status 
        dispatch({type: DELETE_SUCCESS, payload: smurfsId})
    })
    .catch(err =>{
        dispatch({type: DELETE_FAIL, payload: err})
    })



}