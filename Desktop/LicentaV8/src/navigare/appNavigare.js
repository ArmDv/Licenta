
import * as React from 'react';
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import RootMainTabs from './MainTabs';
import DrawerNavigator from './DrawerNavigare'; 
import HomeScreenPork from '../screens/HomeScreenPork'
import ResetParolaScreen from '../screens/authscreens/ResetParolaScreen';


const App=createStackNavigator();

export default function AppStack(){

    return(
        <App.Navigator>
        <App.Screen
                name="App"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <App.Screen 
            name ="HomeScreenPork"
            component = {HomeScreenPork}
            options ={{
             headerShown: false,
             ...TransitionPresets.RevealFromBottomAndroid
        }}
        /> 

        <App.Screen
                name="RootMainTabs"
                component={RootMainTabs}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

           
            </App.Navigator>
    )

}

