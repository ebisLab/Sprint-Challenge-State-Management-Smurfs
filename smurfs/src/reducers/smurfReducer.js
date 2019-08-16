import {GET_SMURFS_DATA, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, SEND_SMURFS_DATA, SEND_SMURFS_SUCCESS} from '../action/smurfsAction'


const initialState = {
    chars: [], 
    test: 'Its working', 
    isLoading: false,
    error: '',
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

export const reducer = (state = initialState, action) => {
console.log(initialState.chars, 'chars')
    switch(action.type){
        case 'GET_SMURFS_DATA':
            return{
                ...state,
                isLoading: true,
                error: ''
            };
        case 'GET_SMURFS_SUCCESS':
            return{
                ...state,
                isLoading: false,
                chars: action.payload,
                error: ''
            };
            
            case 'SEND_SMURFS_DATA':
            return{
                ...state,
                isLoading: true,
                error: ''
            }

            case 'SEND_SMURFS_SUCCESS':
            return{
                ...state,
                isLoading: true,
                chars: action.payload,
                error: ''
            }
            

        default:
            return state;
    }
}