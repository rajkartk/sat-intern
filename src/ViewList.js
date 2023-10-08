import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function ViewList({route}) {

  const {item} = route.params;
  // console.log(item);
  return (
    <View style={{flex:1, alignItems:'center'}} >
      <View style={styles.dishImage} >
        <Image source={{uri:item.imageUrl}} style={{width:300, height:300, margin:10, borderRadius:200}} />
      </View>

      <View style={styles.dishTitleView} >
        <Text style={styles.dishTitle} >{item.name.toUpperCase()}</Text>
      </View>

      {/* ingredients */}
      <View style={styles.dishIngredients} >
        <View style={{ alignItems:'center'}} >
          <Text style={styles.subHeading} >INGREDIENTS</Text>
        </View>
        <Text style={styles.dishIns} >{item.ingredients}</Text>
      </View>

      <View style={styles.dishInstruction} >
        <View style={{ alignItems:'center'}} >
          <Text style={styles.subHeading} >INSTRUCTIONS</Text>
        </View>
        <Text style={styles.dishIns} >{item.instructions}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  dishTitle:{
    fontSize:40,
    color:'#626b7a',
    fontWeight:'bold'
  },
  subHeading:{
    fontSize:30,
    fontWeight:'bold'
  },
  dishIns:{
    fontSize:20,
    color:'black'
  },
  dishIngredients:{
    backgroundColor:'#bcc6d6',
    margin:4,
    padding:10,
    borderRadius:10,
    elevation:5,
    flex:1
  },
  dishInstruction:{
    backgroundColor:'#7d8796',
    margin:2,
    padding:6,
    borderRadius:10,
    elevation:5,
    flex:1,
    // marginBottom:80
  },
  dishImage:{
    flex:1.6,
  },
})