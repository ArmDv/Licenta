import React from "react";
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import { useColorScheme } from "react-native";

Amplify.configure({                         //    (1)
  ...awsExports,                      
  Analytics: {                  
    disabled: true,
  }
});

const AuthScreen = () => {                  //    (2)
    const colorMode = useColorScheme()
    return (
    <ThemeProvider
      colorMode={colorMode}
      theme={{
        tokens: {
          colors: {
            brand: {
              primary: {
                10: '#964B00',
                20: '#964B00',
                40: '#964B00',
                60: '#964B00',
                80: '#964B00',
                90: '#964B00',
                100: '#964B00',
              },
            },
          },
        },

        }
      }
    >
      <Authenticator.Provider>      
        <Authenticator />               
      </Authenticator.Provider>
    </ThemeProvider>
    )                                   //    (3)
}

export default AuthScreen               //    (4)




