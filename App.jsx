import React from 'react'
import {View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import First from './src/components/First';
import Second from './src/components/Second';
import Premiumfitnes from './src/components/Premiumfitnes';
import Live from './src/components/Live';
import Expert from './src/components/Expert';
import Badminton from './src/components/Badminton';
import Fitness from './src/components/Fitness';
import Category from './src/components/Category';
import Login from './src/components/Login';
import Signin from './src/components/Signin';
import Otp from './src/components/Otp';
import Home from './src/components/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="first" component={First} />
        <Stack.Screen options={{headerShown: false}} name="second" component={Second} />
        <Stack.Screen options={{headerShown: false}} name="premium" component={Premiumfitnes} />
        <Stack.Screen options={{headerShown: false}} name="live" component={Live} />
        <Stack.Screen options={{headerShown: false}} name="expert" component={Expert} />
        <Stack.Screen options={{headerShown: false}} name="badminton" component={Badminton} />
        <Stack.Screen options={{headerShown: false}} name="fitness" component={Fitness} />
        <Stack.Screen options={{headerShown: false}} name="category" component={Category} />
        <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="signin" component={Signin} />
        <Stack.Screen options={{headerShown: false}} name="otp" component={Otp} />
        <Stack.Screen options={{headerShown: false}} name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App
