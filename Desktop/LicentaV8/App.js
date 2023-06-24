import '@azure/core-asynciterator-polyfill'
import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import { colors } from './src/global/styles'
import RootNavigare from './src/navigare/rootNavigare'
import awsExports from './src/aws-exports'
import {Amplify,SignInButton,Auth} from 'aws-amplify'
import {withAuthenticator,Authenticator} from '@aws-amplify/ui-react-native'
import AuthScreen from './src/screens/authscreens/SignInScreen'
import SignInScreen from './src/screens/authscreens/SignInScreen'

Amplify.configure({
  ...awsExports,
  Analytics: {
    disabled: true,
  }
});



const App=()=>{
  return(

    <View style={styles.container}> 

   {/*</View> {!Auth.user ? (
     <SignInScreen/> 
     ) : (
      <> */}
      <StatusBar barStyle="light-content" backgroundColor ="#964B00"/>
    <RootNavigare/>
    {/*  </>
    )} */}
    

    </View>
  )
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
 
});



