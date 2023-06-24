import React, {useState,useRef,useEffect, useContext} from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput,Image, ScrollView} from 'react-native'
import {colors, parameters,title} from "../../global/styles"
import { Icon , Button, SocialIcon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { SignInContext } from '../../context/authContext';
import auth from '@react-native-firebase/auth'


export default function SignInWelcome({navigation}){

  const {dispatchSignedIn} = useContext(SignInContext)

  useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
      if(user){

        dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
      }
      else{

        dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
      }
    })
    
  },[])

    return(
    <View style={{flex:1}}>

        <View style={{justifyContent:'flex-start',alignItems:'center',paddingTop:25}}>
            <Text style={styles.title}>Delicii culinare</Text>
            <Text style={styles.subtitle}>TDM-Burgers</Text>
        </View>

        <View style={{flex:1,justifyContent:"center", paddingTop:10}}>
        <Swiper autoplay ={true} >
              <View style ={styles.slide1}>
                <Image 
                        source ={{uri:'https://firebasestorage.googleapis.com/v0/b/tdm-burgers-2496c.appspot.com/o/poza1.jpg?alt=media&token=5e2c4dd9-aebd-48dc-b03d-995a57241d56&_gl=1*17ppvi6*_ga*NTg4MzAwODcuMTY4NTM3ODEwNA..*_ga_CW55HF8NVT*MTY4NjM5NTg1Mi4xNC4xLjE2ODYzOTYxOTkuMC4wLjA.'}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>  

              <View style ={styles.slide2}>
                <Image 
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/tdm-burgers-2496c.appspot.com/o/poza2.jpeg?alt=media&token=c8cfea9c-af62-465b-8bf1-0b7f2fb9e37e&_gl=1*1hmvo5f*_ga*NTg4MzAwODcuMTY4NTM3ODEwNA..*_ga_CW55HF8NVT*MTY4NjM5NTg1Mi4xNC4xLjE2ODYzOTYyODkuMC4wLjA.'}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>    


              <View style ={styles.slide3}>
                <Image 
                        source ={{uri:'https://firebasestorage.googleapis.com/v0/b/tdm-burgers-2496c.appspot.com/o/poza4.jpeg?alt=media&token=dfcef5b8-0d80-45f0-9c86-95437da26213&_gl=1*1lkp2et*_ga*NTg4MzAwODcuMTY4NTM3ODEwNA..*_ga_CW55HF8NVT*MTY4NjM5NTg1Mi4xNC4xLjE2ODYzOTY4MDEuMC4wLjA.'}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>

              <View style ={styles.slide4}>
                <Image 
                        source ={{uri:'https://firebasestorage.googleapis.com/v0/b/tdm-burgers-2496c.appspot.com/o/poza5.jpeg?alt=media&token=8cd3e8b1-5a69-4c06-bb19-c540c65eb2e3&_gl=1*q6c3k*_ga*NTg4MzAwODcuMTY4NTM3ODEwNA..*_ga_CW55HF8NVT*MTY4NjM5NTg1Mi4xNC4xLjE2ODYzOTY5MTYuMC4wLjA.'}}
                        style ={{height:"100%", width:"100%"}}
                />
              </View>

              

            </Swiper>
        </View>

        <View style={{flex:0.5, justifyContent:"flex-end",marginBottom:30}}>

        <View style={{marginHorizontal:20,marginTop:30}}>
              <Button
                title="SIGN IN"
                buttonStyle={parameters.styleButton}
                titleStyle={parameters.buttonTitle}
                onPress={()=>{
                  navigation.navigate("SignInScreen")
                }}
              />

        </View>

       <View style={{alignItems:"center",marginVertical:30}}>
                    <Button
                        title="SIGN-UP"
                        buttonStyle={styles.createButton1}
                        titleStyle={styles.createButtonTitle1}
                        onPress={()=>{navigation.navigate("SignUpScreen")}}
                    />
                </View>

        </View>

    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#964B00',
        marginBottom: 8,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#964B00',
        marginBottom: 8,
    },

    slide1: {
        height:350,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        height:400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        height:450,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    slide4: {
      height:450,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
  },

  
    createButton1:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:50,
        borderWidth:1, 
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:140,
        borderColor:colors.buttons,
        
    },
  
    createButtonTitle1:{
        color:colors.grey1,
        fontSize:20,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
    },



  })
  