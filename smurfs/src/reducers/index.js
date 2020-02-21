
//import action types
import{FETCH_DATA,
FETCH_SUCCESS,
FETCH_FAIL} from '../actions'
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
        
        default:
            return state;
    }

}


export default smurfReducer;