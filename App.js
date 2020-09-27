import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { AppRegistry } from 'react-native'
import HomeScreen from './app/components/homeScreen/HomeScreen'
import LoadingScreen from './app/components/loadingScreen/LoadingScreen'
import strings from './app/src/meta/strings.json'

const Stack = createStackNavigator();

export default class myapp extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: strings.primaryLight,
                height: 36,
              },
              headerTitleStyle: {
                fontSize: 12,
              },
              headerTitleAlign: 'center',
              headerTintColor: strings.primaryDark,
              title: strings.appName
            }}
            name={strings.scrLoading}
            component={LoadingScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: strings.primaryLight,
                height: 48,
              },
              headerTitleStyle: {
                fontSize: 12
              },
              headerTitleAlign: 'center',
              headerTintColor: strings.primaryDark,
              title: strings.titleHome
            }}
            name={strings.scrHome}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

AppRegistry.registerComponent('myapp', () => myapp)
