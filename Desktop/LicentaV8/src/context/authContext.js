import React, {createContext,useReducer} from 'react'
import { SignInReducer } from '../reducers/authReducers'

export const SignInContext = createContext()                            //      (1)

export const SignInContextProvider = (props)=>{

const[signedIn,dispatchSignedIn] = useReducer(SignInReducer,{           //      (2)
    userToken:null,
})

return(                                                                 //      (3)
    <SignInContext.Provider value = {{signedIn,dispatchSignedIn}}>      
        {props.children}
    </SignInContext.Provider>
)

}
