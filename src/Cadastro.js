import { createUserWithEmailAndPassword } from 'firebase/auth';
import React,{ useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { auth } from '../components/config';


export default function Cadastro({navigation}){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function create(){
    await createUserWithEmailAndPassword (auth,email,senha).then(value =>{
      navigation.navigate("Login");
      console.log("Cadastro realizado com sucesso");
    }).catch(
      error => console.log(error)
    );
  }

  return (
    <View style={styles.background}> 
      <View style={styles.containerLogo}>
        <Text style={styles.logo}>
          MeuPet
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Cadastro</Text>
        <TextInput 
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(setEmail)}
        />
        <TextInput
          style={styles.input} 
          placeholder="Senha"
          value={senha}
          onChangeText={(setSenha)}
        />
        <TouchableOpacity style={styles.submit} onPress={() => create()}>
          <Text style={styles.submittextinput}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    padding:30,
    justifyContent:"center",

  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    width:'90%'
  },
  logo:{
    color:'#fff',
    fontSize:40,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor:'#fff',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:8,
    padding:10,
  },
  submit:{
    backgroundColor:'#FF7F50',
    width:'90%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },

  submittextinput:{
    fontSize:18,
    color:'#fff'
  
  },
  
  text:{
    color:'#fff',
    padding:18,
    fontSize:30,
  }
});
