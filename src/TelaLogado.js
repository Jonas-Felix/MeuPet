import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { collection, doc, setDoc, addDoc, deleteDoc} from "firebase/firestore";
import { auth, db } from '../components/config';
import { MaterialIcons } from '@expo/vector-icons'; 
import { signOut } from 'firebase/auth';


export default function TelaLogado({navigation}) {
  const [nome, setNome] = useState("");
  const [Tipo, setTipo] = useState("");
  const [Telefone, setTelefone] = useState("");
 

  async function logout(){
    await signOut(auth).then(value => {
      navigation.navigate('Inicio');
      console.log('Logout realizado com sucesso!');
    }).catch(error => console.log(error));
  }
  
  function create(){
    addDoc(collection(db, "animais"), {
      nome: nome,
      tipo: Tipo,
      telefone: Telefone,

    }).then(() => {
      console.log("animal cadastrado com sucesso");
    }).catch((error) => {
      console.log(error);
    });;
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
    
    <View style={styles.containerLogo}>
      <Text style={styles.logo}>
         MeuPet
      </Text>
    </View>

    <View style={styles.container}>
      <Text style={styles.text}> Cadastrar Animal </Text>
      <TextInput 
      style={styles.input}
      placeholder="Tipo de animal"
      autoCorrect={false}
      value={Tipo}
      onChangeText={ (setTipo)}
      />

      <TextInput 
      style={styles.input}
      placeholder="Nome do animal"
      autoCorrect={false}
      onChangeText={ (setNome)}
      />

      <TextInput 
      style={styles.input}
      placeholder="Telefone para contato"
      autoCorrect={false}
      value={Telefone}
      onChangeText={ (setTelefone)}
      />
    
      <TouchableOpacity style={styles.submit} onPress={() => create()}>
        <Text style={styles.submittextinput}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate('SeusAnimais')}>
        <Text style={styles.submittextinput}>Ver Seus Animais</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}><MaterialIcons style={{marginTop: 10}} name="logout" size={50} color="white" /></TouchableOpacity>
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
    padding: 12,
    margin: 5,
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
