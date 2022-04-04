
const initialState =  {
    user: ''
}

export const myReduucer = (state = initialState , action) =>{
    switch (action.type) {
        case 'STORE_DATA':
            return {
                ...state , user: action.payload
            }
             
        default:
            return state
    }
}
