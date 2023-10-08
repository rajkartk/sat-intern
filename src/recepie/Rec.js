import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const RecepieScreen = () => {
  const route = useRoute(); // Get the route object

  // Access the data from route.params
  const name = route.params.name;
  const recepie = route.params.recepie;
  const imageUrl = route.params.imageUrl;

  return (
    <View style={{flex:1}} >
    <View style={stlyes.container} >

       <View style={stlyes.imageStyles} >
            <Image source={{ uri: imageUrl }} style={stlyes.imageContainer} />
        </View> 
      <View style={stlyes.aboutDish} >
        <Text style={stlyes.dishName} >{name}</Text>
      </View>  

      <View>
        <Text>{recepie}</Text>
      </View>
    </View>
    </View>
  );
};

export default RecepieScreen;

const stlyes = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'black',
        margin:10
    },
    imageStyles:{
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        shadowColor:'orange',
        shadowRadius:2
    },
    imageContainer:{
        width:250,
        height:250,
        borderRadius:120,
        borderColor:'orange',
        borderWidth:3,
    },
    aboutDish:{
        padding:5,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
        borderRadius:10,
        elevation:10
    },
    dishName:{
        fontSize:50,
        fontWeight:'bold',
        color:'#c28910'
    },
    recepieDish:{
        color:'black'
    }
})