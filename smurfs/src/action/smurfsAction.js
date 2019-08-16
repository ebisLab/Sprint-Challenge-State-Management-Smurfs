export const GET_SMURFS_DATA =  'GET_SMURFS_DATA';

export const getData = () => {
    return dispatch => {
        //transition to loading stage
        dispatch({type: 'GET_SMURFS_DATA'})
    }
}