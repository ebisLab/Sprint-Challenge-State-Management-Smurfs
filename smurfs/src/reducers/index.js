
//import action types
import{
FETCH_DATA,
FETCH_SUCCESS,
FETCH_FAIL,
POST_DATA,
POST_SUCCESS,
POST_FAIL,

} from '../actions'
const initialState = {
    smurfs: [],
    isFetching: false,
    errors: ''

}

const smurfReducer = (state =initialState, action) => {

    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetching: true,
                errors: ''
            }
        case FETCH_SUCCESS:
            return{
                ...state, 
                smurfs: action.payload,
                isFetching: true,
                errors: ''
            }
        case FETCH_FAIL:
            return{
                ...state,
                smurfs: [...state.smurfs],
                isPosting: true,
                errors: ''
            }
        case POST_DATA:
            return{
                ...state,
                smurfs: [...state.smurfs],
                isPosting: true,
                errors: ''
            }
        case POST_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isPosting: false,
            }
        case POST_FAIL:
            return{
                ...state,
                isPosting: true,
                errors: action.payload
            }
        
        default:
            return state;
    }

}


export default smurfReducer;