import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import PhoneNumberScreen from './screens/PhoneNumberScreen';
import VerificationScreen from './screens/VerificationScreen';
import NameScreen from './screens/NameScreen';
import InterestScreen from './screens/InterestScreen';
import UploadPhotoScreen from './screens/UploadPhotoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Name" component={NameScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Interest" component={InterestScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UploadPhoto" component={UploadPhotoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
