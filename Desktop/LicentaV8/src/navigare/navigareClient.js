import React,{useLayoutEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen'
import ResultScreen from '../screens/ResultScreen';
import UserHomeScreen from '../screens/UserHomeScreen';





const ClientSearch = createStackNavigator()

export  function NavigareClient({navigation,route}) {

    useLayoutEffect(()=>{
        const routeName =  getFocusedRouteNameFromRoute(route);
        if(routeName === 'UserHomeScreen'){
            navigation.setOptions({tabBarVisible:false})
        }
        else {
            navigation.setOptions({tabBarVisible:true})
        }
    },[navigation,route])

    return (
       <ClientSearch.Navigator>

            <ClientSearch.Screen 
                name ="SearchScreen"
                component ={SearchScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen 
                name ="ResultScreen"
                component ={ResultScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen 
                name ="UserHomeScreen"
                component ={UserHomeScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

           
             

                  

       </ClientSearch.Navigator>
    )
}