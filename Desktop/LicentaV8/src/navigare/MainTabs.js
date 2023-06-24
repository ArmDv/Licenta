import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import {colors} from '../global/styles'
import DrawerContinut from '../screens/DrawerContinut';
import { NavigareClient } from './navigareClient';
import WikiScreen from '../screens/WikiScreen';
import { createStackNavigator } from '@react-navigation/stack';



const MainTabs = createBottomTabNavigator();


export default function RootMainTabs(){

    return(
        <MainTabs.Navigator 
           
        >
            <MainTabs.Screen
                name="HomeScreen"
                component= {HomeScreen}
                options={
                    {
                        tabBarActiveTintColor:colors.buttons,           //      (1)
                        tabBarLabel:"Home",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name='home'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        headerShown:false
                    }
                }
            />


            
        <MainTabs.Screen
                name="Search"
                component= {NavigareClient}
                options={
                    {
                        tabBarActiveTintColor:colors.buttons,
                        tabBarLabel:"Search",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name='search'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        headerShown:false
                    }
                }
            />
            


        <MainTabs.Screen
                name="Wiki"
                component= {WikiScreen}
                options={
                    {
                        tabBarActiveTintColor:colors.buttons,
                        tabBarLabel:"Wiki",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name='view-list'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        headerShown:false
                    }
                }
            />


        <MainTabs.Screen
                name="Account"
                component= {DrawerContinut}
                options={
                    {
                        tabBarActiveTintColor:colors.buttons,
                        tabBarLabel:"Account",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name='person'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        headerShown:false
                    }
                }
            /> 
 

        
                
            
        </MainTabs.Navigator>



          
        
    )
}