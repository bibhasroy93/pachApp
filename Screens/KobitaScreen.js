import React,{useEffect,useState} from 'react'
import { FlatGrid } from 'react-native-super-grid';
import database from '../Utils/Firebase';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native';


export default function KobitaScreen(){
  
  const[objects,setObjects]=useState([]);
  useEffect(()=>{
    database.ref('KobitaPost').on('value',snapshot=>{
      const response = snapshot.val();
      const keys = Object.keys(response);
      const questWithKeys = keys.map(id => {
      return { ...response[id], id }
      });
      setObjects(questWithKeys.reverse());
     
                  })
                
                },[])

                const navigation = useNavigation();          
 return(
  <FlatGrid
  itemDimension={130}
  data={objects}
  //style={styles.gridView}
  // staticDimension={300}
  // fixed
  spacing={10}
  renderItem={({ item }) => (
    <View style={[styles.itemContainer]}>
      <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate("KobitaFull",
          {
            golpo_id: item.golpo_id,
            golpo_name:item.golpo_name,
            golpo_writer:item.golpo_writer,
          }
        );
      }}
      >

      
      <Image style={styles.imageContain}source={{uri: item.golpo_cover}} alt="not found"/>
      </TouchableOpacity>
      {/* <Text style={styles.itemName}>{item.golpo_name}</Text>
      <Text style={styles.itemCode}>{item.golpo_writer}</Text> */}
    </View>
  )}
/>
        
    
    );
}




 


const styles = StyleSheet.create({
  // gridView: {
  //   marginTop: 1,
  //   flex: 1,
  // },
  imageContain:{
    height:180,
    resizeMode:'stretch',
    borderRadius: 10,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 1,
    elevation:3,
    // height: 180,
  },
  // itemName: {
  //   fontSize: 16,
  //   color: '#fff',
  //   fontWeight: '600',
  // },
  // itemCode: {
  //   fontWeight: '600',
  //   fontSize: 12,
  //   color: '#fff',
  // },
});