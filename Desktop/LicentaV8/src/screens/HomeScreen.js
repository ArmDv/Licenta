import React,{useState} from 'react'

import {View, Text, StyleSheet,TouchableOpacity, ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar} from 'react-native';
import { Icon} from 'react-native-elements'
import CountDown from 'react-native-countdown-component';
import HomeHeader from '../componente/HomeHeader';
import {colors,paremeters} from '../global/styles';
import {filterData,dealsData,beefoffersData} from '../global/Data'
import Promotii from '../componente/Promotii';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Oferte from '../componente/Oferte';




const SCREEN_WIDTH = Dimensions.get('window').width


export default function HomeScreen({navigation}){
 
    const [beef, setBeef] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")

    return(
    <View style ={styles.container}>
            

        <HomeHeader navigation ={navigation}/>
        <ScrollView
            stickyHeaderIndices = {[0]}
            showsVerticalScrollIndicator = {true}
        >

    <View  style ={{backgroundColor:colors.cardbackground,paddingBottom:5}}> 
        <View style ={{marginTop:10, flexDirection:'row',justifyContent:"space-evenly"}}>
                <TouchableOpacity
                        onPress ={()=>{
                            setBeef(true)
                        }}
                    >
                    <View style ={{...styles.beefButton,backgroundColor:beef?colors.buttons :colors.grey5}}>
                        <Text style ={styles.beefText}>Beef</Text>
                    </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress ={()=>{
                            setBeef(false)
                            navigation.navigate("HomeScreenPork")
                        }}
                    >
                    <View style ={{...styles.beefButton,backgroundColor:beef?colors.buttons :colors.grey5}}>
                        <Text style ={styles.beefText}>Pork</Text>
                    </View>
                    
                </TouchableOpacity>

                
       
        </View>
    </View> 


        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Categories</Text>
        </View>

        <View>
            <FlatList 
                horizontal ={true}
                showsHorizontalScrollIndicator ={false}
                data = {filterData}
                keyExtractor = {(item)=>item.id}
                extraData = {indexCheck}
                renderItem = {({item,index})=>(
                    <Pressable
                            onPress ={()=>{setIndexCheck(item.id)}}
                        >
                        <View style ={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                            <Image 
                                style = {{height:60,width:60,borderRadius:30}}
                                source = {item.image}
                            />

                            <View>
                                <Text style ={indexCheck === item.id ? {...styles.smallCardTextSected}:
                                {...styles.smallCardText}}>{item.name}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
            />
        </View>
        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Best deals</Text>
        </View>

        <View>
               
         {/*   <View style = {{flexDirection : 'row', alignItems:"center"}}>
                <Text style ={{marginLeft:15,fontSize:16,marginTop:-10,marginRight:5}} >Options changing in</Text>
                <CountDown 
                    until = {3600}
                    size ={14}
                    digitStyle = {{backgroundColor:colors.brown}}
                    digitTxtStyle ={{color:colors.cardbackground}}
                    timeToShow = {['M','S']}
                    timeLabels = {{m:'Min',s:'Sec'}}
                />
            </View>   */}

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
                           burgerName={item.burgerName}
                           
                       />
                   </View>
               )}  
            />
        </View>

        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Our Offers</Text>
        </View>

        <View style ={{width:SCREEN_WIDTH,paddingTop:20}}>
        { 
            beefoffersData.map(item =>(
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
        flex:1,
        
      
       
    },
    beefButton:{
        paddingHorizontal:20,
         borderRadius:15,
         paddingVertical:5
    },

    beefText:{
        marginLeft:5,
        fontSize:16
    },

    headerText:{
        color:colors.grey2,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10,

    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3,
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