import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,Dimensions,TouchableOpacity ,Modal} from 'react-native'
import UserHeader from '../componente/UserHeader'
import { offersData } from '../global/Data'
import {colors,fonts} from '../global/styles'
import {Icon} from 'react-native-elements'
import { TabView,TabBar } from 'react-native-tab-view';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

 const UserHomeScreen = ({navigation,route}) => {
    const {id,user} = route.params
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        {key:'1', title:'Info'},
        {key:'2', title:'Reviews'},
        {key:'3', title:'Gallery'}
    ])
    const renderTabBar = props => (
        <TabBar 
            {...props}
            indicatorStyle = {{backgroundColor:colors.cardbackground}}
            tabStyle = {styles.tabStyle}
            scrollEnabled = {true}
            style = {styles.tab}
            labelStyle = {styles.tabLabel}
            contentContainerStyle = {styles.tabContainer}
        />
    )
    const UpdateRoute1 = () => {
        return(
            <View>

            </View>
        )
    }
    return (
        <View style={styles.container}>

            

            <ScrollView>
                <View>
                    <UserHeader id={id} navigation={navigation}/>
                </View>

                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Text style={styles.text2}>{offersData[id].burgerName}</Text>
                        
                        <View style={styles.view4}>
                            <Icon 
                                name='star'
                                type='material-community'
                                color={colors.grey3}
                                size={15}
                            />
                            <Text style={styles.text4}>{offersData[id].averageReview}</Text>
                            <Text style={styles.text5}>{offersData[id].numberOfReview}</Text>
                            
                            
                        </View>
                    </View>

                    {/* <View style={styles.view8}>
                        <Text style={styles.text6}>Dogs</Text>
                        <View style={styles.view9}>
                            <Text style={styles.text9}>{offersData[id].}</Text>
                        </View>
                    </View> */}
                </View>

                <View style={styles.view10}>
                    <TabView 
                        navigationState={{index,routes}}
                        renderScene={UpdateRoute1}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={renderTabBar}
                        tabBarPosition='top'
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default UserHomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },

    view1:{ 
        padding:3,
        alignItems:"center",
        justifyContent:"center"
      },

    view2:{ 
        flexDirection:"row",
        flex:1,
        marginBottom:5,
        marginHorizontal:10,
        justifyContent:"space-between",
    },
    
    view3:{
        flex:8,
    },

    view4:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:5
    },

    view5:{ 
        flex:3,
        alignItems:"center"
    },

    view6:{
        fontSize:15,
        fontWeight:"bold",
        color:colors.grey1
    },

    view7:{
        width:40,
        height:40,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"space-around",
    },

    view8:{
        flex:3,
        alignItems:"center"
    },

    view9:{
        width:40,
        height:40,
        backgroundColor:colors.buttons,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"space-around",
    },

    view10:{
        elevation:10,
        backgroundColor:colors.pagebackground
    },
 
    view11:{
        backgroundColor:colors.buttons,
         height:50,
         alignContent:"center",
         marginBottom:0,
         justifyContent:"center"
    },
 
    view12:{
        flexDirection:"row",
         justifyContent:"space-between",
         alignItems:"center"
    },

    view13:{ 
        borderWidth:1,
        marginRight:10,
        borderColor:colors.cardbackground,
        borderRadius:6,
        paddingBottom:2
    },

    view14:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:colors.buttons,
        top:0,
        left:0,
        right:0,
        paddingTop:25
    },

    view15:{
        marginTop:5,
        paddingBottom:20
    },

    text1:{
        color:"green",
        fontSize:14,
        fontWeight:"bold"
    },

    text2:{
        fontSize:20,
        fontWeight:"bold",  
        color:colors.grey1
    },
  
    text3:{
        fontSize:15,
        color:colors.grey3
    },

    text4:{
        fontFamily:"bold",
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
    },

    text5:{
        fontFamily:"bold",
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
        marginRight:5
    },

    text6:{
        fontFamily:"bold",
        fontSize:13,
        color:colors.grey3,
        marginLeft:0,
    },

    text7:{
        fontSize:16,
        fontWeight:"bold",
        color:colors.black,
        marginTop:5
    },

    text8:{
        fontSize:13,
        color:colors.black,
        marginBottom:5
    },

    text9:{
        fontSize:15,
        fontWeight:"bold",
        color:colors.cardbackground
    },

    text10:{
        fontSize:16,
        fontWeight:"bold",
        color:colors.cardbackground,
        marginTop:5
    },

    text11:{
        fontSize:13,
        color:colors.cardbackground,
        marginBottom:5
    },

    text12:{
        padding:10,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground
    },

    text13:{
        paddingHorizontal:3,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground,
    },

    text14:{
        fontWeight:"bold",
        marginLeft:40,
        color:colors.black,
        fontSize:18
    },


    tab:{ 
        paddingTop :0,
        backgroundColor:colors.buttons,
        justifyContent:"space-between",
        alignItems:"center"
    },

    tabContainer:{ 
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },

    tabLabel:{
        fontWeight:'bold',
        color: colors.cardbackground
    },

    tabStyle:{
        width:SCREEN_WIDTH/4,
        maxHeight:45,
    },

    
})