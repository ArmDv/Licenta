import React, {useState,useContext,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {View,Text,Image,Linking,Pressable,Alert,Switch,StyleSheet,TouchableOpacity,ScrollView,TextInput} from 'react-native';
import {DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import {Provider as PaperProvider, DarkTheme as PaperDarkTheme} from 'react-native-paper'
import {Avatar,Button,Icon} from 'react-native-elements'
import {colors} from '../global/styles'
import { SignInContext } from '../context/authContext';
import HelpScreen from './HelpScreen';
import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import {Auth} from 'aws-amplify'
import {User} from '../models'
import { DataStore } from '@aws-amplify/datastore';
import {launchImageLibrary} from 'react-native-image-picker';
import { result } from 'lodash';



export default function DrawerContinut({props,navigation}){

    const[image,setImage]=useState(null)
    const [user,setUser] = useState(null)
    const [Nume, setNume] = useState("")
    const [Prenume, setPrenume] = useState("")
    const [darkTheme, setDarkTheme] = React.useState(false);

    const signOut=async()=>{
        Auth.signOut()
    }

    
    useEffect(() => {
        const getCurrentUser = async () => {
            const authUser = await Auth.currentAuthenticatedUser();
            const dbUsers = await DataStore.query(
                User, u => u.sub.eq(authUser.attributes.sub)
                )
                
            if(!dbUsers || dbUsers.length === 0){
                console.warn('NEW USER !!! ')
                return;
            }
            
            const dbUser = dbUsers[0]
            setUser(dbUser)
            
            setNume(dbUser.Nume)
            setPrenume(dbUser.Prenume)
            
        }
        getCurrentUser()
    }, [])
   
    const isValid = () => {
        return Nume && Prenume
    }

    const save = async () => {

        if(!isValid()){
            console.warn('Not Valid !!! ')
            return
        }
        
        if(user){
           
            const updatedUser = User.copyOf(user, updated => {
                updated.Nume = Nume
                updated.Prenume = Prenume
               
            })
           try{
            DataStore.save(updatedUser)
            console.log('User updated: ', user)
           }
            catch(error){
                console.error('Error Updating User: ', error)
            }
        }
        else{

            const authUser = await Auth.currentAuthenticatedUser();

            const newUser = new User({
                sub: authUser.attributes.sub,
                Nume,
                Prenume
                
            })

            try {
                await DataStore.save(newUser);
                console.log('User Added !!!');
            } 
            catch (error) {
                console.error('Error Adding User: ', error);
            }
        }
    }

    const pickImage = async () => {
        await launchImageLibrary({mediaType: 'mixed'}, result => {
          if (!result.assets) {
            Alert.alert(result.errorMessage);
            return;
          }
          setImage(result.assets[0]);
        });
      };

    
    //const avatar=require('../assets/classic.png');

         return(
            <PaperProvider theme={PaperDarkTheme}>
             <View style ={styles.container}>
               <ScrollView theme={DarkTheme} >
                 <View style ={{backgroundColor:colors.buttons}}>
                <View style = {{flexDirection:'row', alignItems:'center',paddingLeft:20,paddingVertical:10}}>


                <TouchableOpacity onPress={pickImage}>
                        <Icon 
                            type ="material-community"
                            name = "plus"
                            color ="white"
                            
                          
                        />

                     </TouchableOpacity>

                    <TouchableOpacity onPress={() => setImage(null)}>
                        <Icon 
                            type ="material-community"
                            name = "minus"
                            color ="white"
                            
                          
                        />
                    </TouchableOpacity>
                    
                    <Avatar 
                        rounded
                        avatarStyle ={styles.avatar}
                        size = {75}
                        source={image}
                       // Image source ={avatar}
                        
                    /> 
                    
                    

                    
                     

                   <View style ={{flex:1}}>
                        {/* <Text style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:24,marginLeft:50 }}  >{Auth.currentAuthenticatedUser().Nume}</Text> */}
                         {/* <Text style ={{color:colors.cardbackground,fontSize:14}} >Nume:  </Text> */}

                    <View style={{flexDirection:'row'}}>
                         <TextInput
                            placeholder='Name...'
                            style={styles.nume}
                            value={Nume}
                            onChangeText={setNume}
                         />

                        <TextInput
                            placeholder='Surname...'
                            style={styles.prenume}
                            value={Prenume}
                            onChangeText={setPrenume}
                         />
                     </View>
                         <Pressable 
                             onPress={save}
                             style={styles.buton}
                        >
                        <Text style={styles.darkthemeText}>Save</Text>
                        </Pressable>
                         
                    </View> 

                </View>

                <View style ={{flexDirection:'row',justifyContent:"space-evenly",paddingBottom:5}}>

                    <View style ={{flexDirection:'row', marginTop:0,}}>
                       
                    </View>

                   

                </View>
            </View>


                
             

                


              <DrawerItem 
              
              onPress ={()=>{
                            navigation.navigate("PromotiiScreen")
                        }}
                    label = "Promotions"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "tag-heart"
                            color ="brown"
                            size ={size}
                          
                        />
                    )}
                /> 



            <DrawerItem 

                    onPress ={()=>{
                            navigation.navigate("SettingsScreen")
                        }}
                    label = "Settings"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "cog-outline"
                            color ="brown"
                            size ={size}
                        />
                    )}
                />



            <DrawerItem 
            
                onPress ={()=>{
                    navigation.navigate('HelpScreen')
                }}
            

                    label = "Help"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "lifebuoy"
                            color ="brown"
                            size ={size}
                            
                            
                        />
                    )}
                /> 




            <View style ={styles.switchText}>
                <Text style ={styles.darkthemeText}>Stress Button</Text>
                <View style ={{ paddingRight:10}}>
                        <Switch 
                            trackColor = {{false: "#767577",true : "brown"}}
                            thumbColor = "brown"
                            value={darkTheme}
                        onValueChange={(value) => setDarkTheme(value)}
                        />
                </View>
            </View>

            


            </ScrollView> 
     
              

               
                <DrawerItem 
                onPress ={()=>{signOut()}} 
                    label = "Sign Out"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "logout-variant"
                            color ="brown"
                            size ={size}
                            
                        />
                    )}
                />
             
             </View>
             </PaperProvider>
         )
     }
     





     const styles = StyleSheet.create({
        container:{
            flex:1
        },

        avatar:{
            borderWidth:4,
            borderColor:colors.pagebackground
            
            
        },

        nume:{
            flex:1,
            fontWeight:'bold',
            color:colors.cardbackground,
            fontSize:24,
            marginLeft:1
            
        },

        prenume:{
            fontWeight:'bold',
            color:colors.cardbackground,
            fontSize:24,
            marginRight:70
            
        },

        buton:{
            
            paddingLeft:200
        },

        

        switchText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingLeft:20,
            paddingVertical:5,
            paddingRight:10
        },
        darkthemeText:{
            fontSize: 16,
            color:colors.grey1,
             paddingTop:10,
             paddingLeft:0,
             fontWeight:"bold",
             
        }
        
    })