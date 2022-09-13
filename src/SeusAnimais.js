import { async } from '@firebase/util';
import { collection, doc, getDocs, deleteDoc} from 'firebase/firestore';
import React,{useEffect,useState} from 'react';
import { db } from '../components/config';
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 



export default function AnimaisCadastrados( {navigation} ) {
  const [animais,setAnimais] = useState([]);
  const animaisCollectionRef = collection(db, "animais");
  
  useEffect(() => {
    const getAnimais = async () => {
      const data = await getDocs(animaisCollectionRef);
      setAnimais(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getAnimais();
  }, []);

  function deleterAnimal(id){
    deleteDoc(doc(db, 'animais', id)).then(value => {
      alert('Animal deletado com sucesso!');
    }).catch(error => alert(error));
  }
  
  return (
    <View style={styles.containerLogo}>
      <Text style={styles.logo}>
         MeuPet
      </Text>


      <Text style={styles.text}> Seus Animais Cadastrados </Text>
      <FlatList 
      data={animais}
      keyExtractor={item => item.id}
      renderItem={({item}) => <View style={styles.item}><Text style={styles.prod}><b>Nome do animal:</b> {item.nome} {"\n"}<b>Tipo:</b> {item.tipo} {"\n"}<b>Contato:</b> {item.telefone} {"\n"} </Text> <View style={{flex:1, flexDirection:"row", justifyContent:"space-around"}}><TouchableOpacity onPress={() => navigation.navigate('EditarAnimal', {id:item.id})}><AntDesign name="edit" size={30} color="black" /></TouchableOpacity> <TouchableOpacity onPress={() => deleterAnimal(item.id)}><AntDesign name="delete" size={30} color="black" /></TouchableOpacity></View> </View>}
      
      />
      </View>

  );
}

const styles = StyleSheet.create({

  containerLogo:{
    padding:50,
    justifyContent:"center",
    flex: 1,
    alignItems:'center',
    backgroundColor: '#87CEEB',
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
  text:{
    color:'#fff',
    fontSize:20,
    padding:10,
  },
  
  item:{
    backgroundColor:'#fff',
    padding: 15,
    marginVertical:8,
    marginHorizontal:16,
    borderRadius:8,
  },
  prod:{
    fontSize:15,
    color:"#000"
  },
  
});
