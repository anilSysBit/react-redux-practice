export  const getAllData = (val)=>{
    return{
        type:"GET_ALL_DATA",
        payload:val
    }
}
export const getIndividualData = (val)=>{
    return{
        type:"GET_INDIVIDUAL_DATA",
        payload:val
    }
}