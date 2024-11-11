import { createFeature, createReducer, on } from "@ngrx/store";
import { GlobalState } from "./State";
import NgrxActions from "./Actions";

let initialState:GlobalState = {
     message: "hey"
}

export const globalAppReducer = createReducer(initialState,

    on(NgrxActions.sendMessage,(state,{message})=> {
        
        
        return  {
             ...state,
             message: message
        }
    })
)



export const appFeature = createFeature({
    name: "app-feature",
    reducer: globalAppReducer
})

