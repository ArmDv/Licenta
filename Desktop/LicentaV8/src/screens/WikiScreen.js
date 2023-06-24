import React,{useRef} from 'react';
import {View, Text, StyleSheet, ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors,paremeters} from '../global/styles';
import {filterData,dealsData,offersData} from '../global/Data'
import Header from '../componente/Header'




export default function WikiScreen({navigation}){
 
    const scrollViewRef = useRef(null);

    const scrollToCategory = (category) => {
        if (scrollViewRef.current) {
         
          const yOffset = calculateOffset(Etymology);
          scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
        }
      };
    
      const calculateOffset = (category) => {
      
      };

    return(






        
    <View style ={styles.container}>
            

            <Header title="   Burgers-Wikipedia"/>


            <ScrollView
            
            showsVerticalScrollIndicator = {true}
        >

            <TouchableOpacity onPress={() => scrollToCategory('etymology')}>
                <Text style={styles.textScrollMain}>Etymology</Text>
            </TouchableOpacity>

             <TouchableOpacity onPress={() => scrollToCategory('history')}>
                <Text style={styles.textScroll}>History</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => scrollToCategory('today')}>
                <Text style={styles.textScroll}>Today</Text>
            </TouchableOpacity>

       
        



        <View style={styles.ViewStyle}>
            <Text style={styles.text} >A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a "special sauce", often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger patty topped with cheese is called a cheeseburger.                                  
            </Text>
        </View>

        

        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Etymology and terminology</Text>
        </View>

        <View style={styles.ViewStyle}>
            <Text style={styles.text} > The term hamburger originally derives from Hamburg, the second-largest city in Germany; however, there is no certain connection between the food and the city</Text>
        </View>


        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>History</Text>
        </View>

        <View style={styles.ViewStyle}>
            <Text style={styles.text} > As versions of the meal have been served for over a century, its origin remains obscure. The 1758 edition of the book The Art of Cookery Made Plain and Easy by Hannah Glasse included a recipe in 1758 as "Hamburgh sausage", which suggested to serve it "roasted with toasted bread under it." A similar snack was also popular in Hamburg by the name "Rundstück warm" ("bread roll warm") in 1869 or earlier, and supposedly eaten by many emigrants on their way to America, but may have contained roasted beefsteak rather than Frikadeller. It has been suggested that Hamburg steak served between two pieces of bread and frequently eaten by Jewish passengers travelling from Hamburg to New York on Hamburg America Line vessels (which began operations in 1847) became so well known that the shipping company gave its name to the dish. Each of these may mark the invention of the hamburger and explain the name.</Text>
        </View>

        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Today</Text>
        </View>


        <View style={styles.ViewStyle}>
            <Text style={styles.text} > As versions of the meal have been served for over a century, its origin remains obscure. The 1758 edition of the book The Art of Cookery Made Plain and Easy by Hannah Glasse included a recipe in 1758 as "Hamburgh sausage", which suggested to serve it "roasted with toasted bread under it." A similar snack was also popular in Hamburg by the name "Rundstück warm" ("bread roll warm") in 1869 or earlier, and supposedly eaten by many emigrants on their way to America, but may have contained roasted beefsteak rather than Frikadeller. It has been suggested that Hamburg steak served between two pieces of bread and frequently eaten by Jewish passengers travelling from Hamburg to New York on Hamburg America Line vessels (which began operations in 1847) became so well known that the shipping company gave its name to the dish. Each of these may mark the invention of the hamburger and explain the name.</Text>
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
        paddingVertical:4,
        
    },

   text:{
    fontSize:18,
    paddingBottom:15

   },

   ViewStyle:{
    paddingTop:15
   },

   textScrollMain:{
    color:'blue',
    textAlign:'center',
    fontSize:20,
    paddingTop:15
   },

   textScroll:{
    color:'blue',
    textAlign:'center',
    fontSize:20,
    
   }


})