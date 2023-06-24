import * as React from 'react';
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SignInWelcome from '../screens/authscreens/SignInWelcome';
import SignInScreen from '../screens/authscreens/SignInScreen';
import SignUpScreen from '../screens/authscreens/SignUpScreen';
import ResetParolaScreen from '../screens/authscreens/ResetParolaScreen';
import HomeScreen from '../screens/HomeScreen';
import DrawerNavigator from './DrawerNavigare';



const Auth=createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
                name="SignInWelcome"
                component={SignInWelcome}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                />

                
        <Auth.Screen
                name="ResetParolaScreen"
                component={ResetParolaScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
                />


         

        </Auth.Navigator>
    )
}