import * as React from 'react';
import { Button, View,Text,Image,StyleSheet,SafeAreaView, ScrollView} from 'react-native';
import { Title } from 'react-native-paper';
import styled from 'styled-components';


function GolpoFullScreen({ route }) {

  /* 2. Get the param */
  const { golpo_id,golpo_cover,golpo_name,golpo_writer,golpo_content} = route.params;

    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Title>{golpo_name}</Title>
        <Text style={styles.writer}>{golpo_writer}</Text>
        <Text style={styles.content}>{golpo_content}</Text>
        {/* <Image
          //style={styles.imageContain}
          source={{uri:"https://i.ibb.co/9gVXfTN/slider2.jpg"} }
          alt="not found"
        />
      {/* <Image
        style={styles.imageContain}
        source={{
          uri: golpo_cover,
        }}
          /> */}
      </View>
      </ScrollView>
    </SafeAreaView>
    );
  }

  export default GolpoFullScreen;

  const styles = StyleSheet.create({
    imageContain: {
      height: 180,
      resizeMode: "stretch",
      borderRadius: 10,
    },
    scrollView: {
      backgroundColor: '#F0E6E6',
      marginHorizontal: 0,
    },
    writer:{
      fontSize:18,
      marginTop:20,
      paddingBottom:10,
    },
    content:{
      fontSize:20,
      paddingLeft:10,
      paddingRight:10,
      justifyContent:'center',
      textAlign:'justify',
    }
  })