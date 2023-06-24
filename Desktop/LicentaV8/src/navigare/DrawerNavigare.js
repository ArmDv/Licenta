import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootMainTabs from './MainTabs';
import {Icon} from 'react-native-elements'
import {colors} from "../global/styles"
import DrawerContinut from '../screens/DrawerContinut';
import { NavigationContainer } from '@react-navigation/native';
import HelpScreen from '../screens/HelpScreen'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){

    return(
        
        <Drawer.Navigator drawerContent={props=><DrawerContinut {...props}/>}>

            <Drawer.Screen
                name="RootMainTabs"
                component={(RootMainTabs)}
                options={{
                    headerShown: false,
                    title:'Client',
                    drawerIcon:({focused,size})=>(
                        <Icon
                            type="material-comunity"
                            name="home"
                            color={focused? '#7cc' :colors.brown}
                            size={size}
                            header
                        />
                    )
                }}
            />

       
        <Drawer.Screen 
                name = "Help"
                component ={HelpScreen}

                options = {{
                    title:'Business console',
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material"
                            name = "business"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}

                        />
                    )
                }}
            />


        </Drawer.Navigator>
        
    )
}