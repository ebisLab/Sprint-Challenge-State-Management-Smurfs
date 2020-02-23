
//import action types
import{
FETCH_DATA,
FETCH_SUCCESS,
FETCH_FAIL,
POST_DATA,
POST_SUCCESS,
POST_FAIL,
DELETE_STARTED,
DELETE_SUCCESS,
DELETE_FAIL

} from '../actions'
const initialState = {
    smurfs: [],
    isFetching: false,
    isDeleting: false,
    errors: '', 
    list: [
        {
          name: "Brainey",
          age: 200,
          height: "5cm",
          id: 0
        },
        {
          name: "Sleepy",
          age: 200,
          height: "5cm",
          id: 1
        }
      ]

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
                isFetching: false,
                errors: ''
            }
        case FETCH_FAIL:
            return{
                ...state,
                smurfs: [...state.smurfs],
                isPosting: false,
                errors: ''
            }
        case POST_DATA:
            console.log('post data action payload', action.payload)
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
                errors: ''

            }
        case POST_FAIL:
            return{
                ...state,
                isPosting: false,
                errors: action.payload
            }
        case DELETE_STARTED:

            return {
                ...state, 
                isDeleting: true,
            }
            case DELETE_SUCCESS:
                console.log('payload', action.payload)    
                return{
                    ...state,
                smurfs: state.smurfs.filter((item) => item.id !== action.payload),
                isDeleting: false,
                    errors: ''
                }
            case DELETE_FAIL:    
                return{
                    ...state,
                    isDeleting: false,
                    errors: action.payload
                }
        
        default:
            return state;
    }

}


export default smurfReducer;