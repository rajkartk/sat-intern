import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Page1 from './src/page1';
import Page2 from './src/page2';
import ViewList from './src/ViewList';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Select dishes' component={Page1} options={{headerTintColor:'black'}}/>
        <Stack.Screen name='Ingredients' component={ViewList} />
        <Stack.Screen name='Recepie' component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}