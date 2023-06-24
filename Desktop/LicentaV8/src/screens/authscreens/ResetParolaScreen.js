import React from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import {colors, parameters,title} from "../../global/styles"
import { useNavigation } from '@react-navigation/native';



const ResetParolaScreen=()=>{
    const [email, setEmail]=React.useState('');  //     (1)

    const handleResetParola=()=>{               //      (2)
        navigation.goBack();

    };
    const navigation = useNavigation();

    return(
        <View style={styles.ecran}>
            <Text style={styles.text}>Introduceti emailul:</Text>
            <TextInput style={styles.text1}
                placeholder='Adresa de email'
                value={email}
                onChangeText={setEmail}
                />
                <Button
                    style={styles.button}
                    title="Reset parola"
                    onPress={handleResetParola}
                />
        </View>
    )

}

export default ResetParolaScreen;

const styles = StyleSheet.create({

    ecran:{
        paddingTop:190
    },

    text:{
        paddingLeft:120,
        fontSize:22,
        paddingTop:25
    },

    text1:{
        paddingLeft:120,
        fontSize:22,
        paddingTop:25
    },

    button: {
        backgroundColor: 'brown',
        paddingTop: 50,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
      },


})