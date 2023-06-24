import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './authNavigare';
import AppStack from './appNavigare';
import { SignInContext } from '../context/authContext';



export default function RootNavigare(){

   
                                                        //      (1)
    return(
    <NavigationContainer>

            <AppStack/>

    </NavigationContainer>
    )
}

