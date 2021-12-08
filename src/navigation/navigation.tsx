import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { LoginScreen } from '../screens/LoginScreen';

const AppStack = createStackNavigator();

export const Main = () => {
    return (
       <NavigationContainer>
           <AppStack.Navigator
           headerMode="none"
           >
               <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
               <AppStack.Screen name="Login" component={LoginScreen}/>
           </AppStack.Navigator>
       </NavigationContainer>
    )
}


const styles = StyleSheet.create({})
