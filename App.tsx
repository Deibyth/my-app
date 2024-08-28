import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentacion/views/home/Home';
import { RegisterScreen } from './src/Presentacion/views/register/Register';
import { ProfileInfoScreen } from './src/Presentacion/views/profile/info/ProfileInfo';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            title: 'registro'
          }} />
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App