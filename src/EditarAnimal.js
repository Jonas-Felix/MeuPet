import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { collection, doc, setDoc, addDoc, deleteDoc, updateDoc} from "firebase/firestore";
import { auth, db } from '../components/config';


export default function EditarAnimal({route}) {
  const [nome, setNome] = useState("");
  const [Tipo, setTipo] = useState("");
  const [Telefone, setTelefone] = useState("");
  
  
  function editarAnimal(id){
    updateDoc(doc(db, "animais", id), {
      nome: nome,
      tipo: Tipo,
      telefone: Telefone,
    }).then(value => {
      alert("animal editado com sucesso");
    }).catch(error => alert(error));
  }


  return (
    <KeyboardAvoidingView style={styles.background}>
    
    <View style={styles.containerLogo}>
      <Text style={styles.logo}>
         MeuPet
      </Text>
    </View>

    <View style={styles.container}>
      <Text style={styles.text}> Editar Animal </Text>
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
    
      <TouchableOpacity style={styles.submit} onPress={() => editarAnimal(route.params.id)}>
        <Text style={styles.submittextinput}>Salvar</Text>
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
