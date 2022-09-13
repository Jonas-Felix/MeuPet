import { async } from '@firebase/util';
import { collection, doc, getDocs } from 'firebase/firestore';
import React,{useEffect,useState} from 'react';
import { db } from '../components/config';
import { Text, View, StyleSheet, FlatList} from 'react-native';

export default function AnimaisCadastrados( {navigation} ) {

  const [animais,setAnimas] = useState([]);
  const animaisCollectionRef = collection(db, "animais");
  
  useEffect(() => {
    const getAnimais = async () => {
      const data = await getDocs(animaisCollectionRef);
      setAnimas(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };
    getAnimais();
  }, []);

  return (
    <View style={styles.containerLogo}>
      <Text style={styles.logo}>
         MeuPet
      </Text>

      <Text style={styles.text}> Animais para adoção </Text>
      <FlatList 
      data={animais}
      keyExtractor={item => item.id}
      renderItem={({item}) => <View style={styles.item}><Text style={styles.prod}><b>Nome do animal:</b> {item.nome} {"\n"}<b>Tipo:</b> {item.tipo} {"\n"}<b>Contato:</b> {item.telefone} {"\n"} </Text> </View>}
      
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
    fontSize:25,
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
