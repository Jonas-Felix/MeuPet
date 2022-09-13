import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { auth } from '../components/config';


export default function Login( {navigation} ) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  async function login(){
    await signInWithEmailAndPassword(auth, email, senha).then(value => {
      navigation.navigate('TelaLogado');
      console.log('Login efetuado com sucesso!' + value.user.uid)
    }).catch(error => console.log(error));
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
    
    <View style={styles.containerLogo}>
      <Text style={styles.logo}>
         MeuPet
      </Text>
    </View>

    <View style={styles.container}>
      <Text style={styles.text}> Login </Text>
      <TextInput 
      style={styles.input}
      placeholder="Email"
      value={email}
      autoCorrect={false}
      onChangeText={(setEmail)}
      />
    
      <TextInput
      style={styles.input} 
      placeholder="Senha"
      value={senha}
      autoCorrect={false}
      onChangeText={(setSenha)}
      />

      <TouchableOpacity style={styles.submit} onPress={() => login()}>
        <Text style={styles.submittextinput}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnsubmit} onPress={ () => navigation.navigate('Cadastro') }>
        <Text style={styles.submittext}>Criar Conta</Text>
      </TouchableOpacity>

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
    padding:50,
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
  submittext:{
    marginTop:10,
    color:'#fff',
    fontSize:18,
  },
  text:{
    color:'#fff',
    fontSize:30,
    padding:18,
  }
  
});
