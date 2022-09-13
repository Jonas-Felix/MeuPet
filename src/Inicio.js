import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


export default function Inicio( {navigation}) {
  return (
    <KeyboardAvoidingView style={styles.background}>
    
    <View style={styles.containerLogo}>
      <Text style={styles.logo}>
         MeuPet
      </Text>
    </View>

    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={ () => navigation.navigate('Login') }>
       Adicionar animal para adoção
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={ () => navigation.navigate('AnimaisCadastrados') }> Ver animais para adoção </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#87CEEB',
  },
  containerLogo:{
    flex:1,
    justifyContent:"center",

  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'90%'
  },
  logo:{
    color:'#fff',
    fontSize:40,
    fontWeight: 'bold',
  },
  
  botao:{
    backgroundColor:'#FF7F50',
    justifyContent:'center',
    alignItems:'center',
    padding: 12,
    color:'#fff',
    borderRadius:15,
    fontSize: 19,
    margin:5,
    width:'90%',
    

  }
});

