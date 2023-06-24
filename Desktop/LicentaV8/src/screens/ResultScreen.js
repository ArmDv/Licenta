import React from 'react'
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import RezultatCautare from '../componente/RezultatCautare'
import {colors} from "../global/styles";
import {offersData} from "../global/Data"

const SCREEN_WIDTH = Dimensions.get('window').width;


const ResultScreen = ({navigation,route}) => {
    return (
        <View style ={styles.container}>

           

            <View>
                <FlatList 
                     style ={{backgroundColor:colors.cardbackground}}
                    data = {offersData}
                    keyExtractor ={(item,index)=>index.toString()}
                    renderItem ={({item,index})=> (

                        <RezultatCautare
                            screenWidth = {SCREEN_WIDTH}
                            images = {item.images}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberOfReview}
                            offersData ={item.offersData}
                            OnPressOffers ={()=>{navigation.navigate("UserHomeScreen",{id:index,offers:item.burgerName})}}
                        />
                                    
                          )}

                     

                     showsVerticalScrollIndicator ={false}
                />
            </View>
           
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
      paddingTop:20
    },

    listHeader:{color :colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
}
})

