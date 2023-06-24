import React,{useState} from 'react'

import {View, Text, StyleSheet,TouchableOpacity, ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar} from 'react-native';
import { Icon} from 'react-native-elements'
import CountDown from 'react-native-countdown-component';
import HomeHeader from '../componente/HomeHeader';
import {colors,paremeters} from '../global/styles';
import {filterData,dealsData,offersData} from '../global/Data'
import Promotii from '../componente/Promotii';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from '../componente/Header'
import Oferte from '../componente/Oferte';




const SCREEN_WIDTH = Dimensions.get('window').width


export default function HomeScreenPork({navigation}){
 
    const [indexCheck, setIndexCheck] = useState("0")

    return(
    <View style ={styles.container}>
            

            <Header title="Pork Burgers" type="arrow-left" navigation={navigation}/>
       
        <ScrollView
            stickyHeaderIndices = {[0]}
            showsVerticalScrollIndicator = {true}
        >



        {/*<View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Categories</Text>
        </View>


        <View>
                 

            <FlatList 
               style ={{marginTop:10, marginBottom:10}} 
               horizontal ={true}
               data = {dealsData}
               keyExtractor = {(item,index)=>index.toString()}   
               showsHorizontalScrollIndicator = {false}
               renderItem = {({item})=>(
                   <View style ={{marginRight:5}}>
                       <Promotii
                           screenWidth  ={SCREEN_WIDTH*0.8}
                           images = {item.images}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           burgerName={item.burgerName}
                           discountAvailable={item.discountAvailable}
                           discountPercent={item.discountPercent}
                       />
                   </View>
               )}  
            />
        </View>
        */}

        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Our Offers</Text>
        </View>

        <View style ={{width:SCREEN_WIDTH,paddingTop:10}}>
        { 
            offersData.map(item =>(
                <View key ={item.id} style = {{paddingBottom:20}}>
                <Oferte
                           screenWidth  ={SCREEN_WIDTH*0.8}
                           images = {item.images}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           burgerName={item.burgerName}
                          
                           
                       />
                </View>
            )
            )
        }        
    </View>    

</ScrollView>

</View>
    )}

const styles = StyleSheet.create({

    container:{
        flex:2,
        
        
      
       
    },

    headerText:{
        color:colors.grey2,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:15,
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:20,
    },

    smallCard :{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardTextSected :{
        fontWeight:"bold",
        color:colors.cardbackground
    },

    smallCardText :{
        fontWeight:"bold",
        color:colors.grey2
    },

    floatButton:{
        position:'absolute',
        bottom:10,right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center'
    }


})