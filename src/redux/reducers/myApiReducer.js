
const initialState = {
    procucts: [],
    individual:[],
}

const MyApiReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_ALL_DATA":
            return {
                ...state,
                procucts:action.payload
            }
        case "GET_INDIVIDUAL_DATA":
            return{
                ...state,
                individual:action.payload
            }
        default:
            return state;
    }
}
export default MyApiReducer