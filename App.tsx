import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, ActivityIndicator } from 'react-native';
import LoginScreen from './screens/Login';
import DashboardScreen from './screens/Dashboard';
import PredictionsScreen from './screens/Predictions';
import SignalsScreen from './screens/Signals';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Predictions" component={PredictionsScreen} />
      <Tab.Screen name="Signals" component={SignalsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  // Simple auth mock: show Login first (in real app, add state)
  const [loggedIn, setLoggedIn] = React.useState(false);

  if (!loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} onLogin={() => setLoggedIn(true)} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <MainTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
