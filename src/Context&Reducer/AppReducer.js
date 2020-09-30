export default (state, action) =>{
    switch(action.type){

        case 'ADD':
            return {
                ...state,
                transaction: [...state.transaction, action.payload]
            }

        case 'DELETE':
            return{
                ...state,
                transaction:state.transaction.filter((c,i)=> i !== action.payload)
            }
        default:
            return state
    }
};