import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';



import Home from './src/Pages/Home';
import MelhoresProdutores from './src/Componente/MelhoreProdutores';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Melhores Produtores"component={MelhoresProdutores}/>
        </Tab.Navigator>
        <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
});
