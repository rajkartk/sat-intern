import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const RecepieScreen = () => {
  const route = useRoute(); // Get the route object

  const jsonData = require('./recepie.json');



  // Access the data from route.params
  const name = route.params.name;
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

      <View style={stlyes.recipeText} >
       <Text style={{color:'black'}} >hello</Text>
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
        shadowRadius:2,
        flex:3
    },
    imageContainer:{
        width:250,
        height:250,
        borderRadius:120,
        borderColor:'orange',
        borderWidth:3,
    },
    aboutDish:{
        padding:10,
        margin:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e3e8e5',
        borderRadius:10,
        elevation:10,
        flex:1
    },
    dishName:{
        fontSize:30,
        fontWeight:'bold',
        color:'#c28910'
    },
    recepieDish:{
        color:'black'
    },
    recipeText:{
      margin:10,
      backgroundColor:'#e8e1cf',
      padding:10,
      flex:3,
      borderRadius:10,
      elevation:20,
    }
})