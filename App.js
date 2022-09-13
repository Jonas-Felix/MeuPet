import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Inicio from './src/Inicio';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import TelaLogado from './src/TelaLogado';
import AnimaisCadastrados from './src/AnimaisCadastrados';
import SeusAnimais from './src/SeusAnimais';
import EditarAnimal from './src/EditarAnimal';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Inicio'>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="TelaLogado" component={TelaLogado}/>
        <Stack.Screen name="SeusAnimais" component={SeusAnimais}/>
        <Stack.Screen name='AnimaisCadastrados' component={AnimaisCadastrados}/>
        <Stack.Screen name='EditarAnimal' component={EditarAnimal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}