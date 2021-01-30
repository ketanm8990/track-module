import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrackProgress from './screen/TrackProgress';
import BodyProgress from './screen/BodyProgress';
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="TrackProgress" component={TrackProgress} />
        <Stack.Screen name="BodyProgress" component={BodyProgress} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;