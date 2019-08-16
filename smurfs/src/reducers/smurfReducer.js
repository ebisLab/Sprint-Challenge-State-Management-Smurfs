import {GET_SMURFS_DATA, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE} from '../action/smurfsAction'


const initialState = {
    chars: [], 
    // test: 'Its working', 
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'GET_SMURFS_DATA':
            return{
                ...state,
                isLoading: true,
                error: ''
            }

        default:
            return state;
    }
}