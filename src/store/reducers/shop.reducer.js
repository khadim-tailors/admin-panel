import { actionTypes } from "../actionTypes/actionTypes"

const initialState = [
    { 
        id: "12345",
        name:"Khadim tailors",
        
    }
]
export const setAllShops = (state=initialState, {action, payload}) =>{
    switch(action){
        case action === actionTypes.SET_ALL_SHOPS: return [...payload, ...state];
        default: return state
    }
}