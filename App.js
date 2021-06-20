import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CiboScreen from './screens/CiboScreen';
import EserciziScreen from './screens/EserciziScreen';
import AcquaScreen from './screens/AcquaScreen';
import PesoScreen from './screens/PesoScreen';
import ProfiloScreen from './screens/ProfiloScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profilo"
        activeColor="#f0edf6"
        inactiveColor="#444444"
        barStyle={{ backgroundColor: '#171717' }}
      >
        <Tab.Screen name="Cibo" component={CiboScreen}
          options={{
            tabBarLabel: 'Cibo',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="fast-food-outline" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen name="Esercizi" component={EserciziScreen}
          options={{
            tabBarLabel: 'Esercizi',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="barbell-outline" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen name="Acqua" component={AcquaScreen}
          options={{
            tabBarLabel: 'Acqua',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="water-outline" color={color} size={20} />
            ),
          }} />
        <Tab.Screen name="Peso" component={PesoScreen}
          options={{
            tabBarLabel: 'Peso',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="bar-chart-outline" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen name="Profilo" component={ProfiloScreen}
          options={{
            tabBarLabel: 'Profilo',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name="person-circle-outline" color={color} size={20} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer >
  );
}
