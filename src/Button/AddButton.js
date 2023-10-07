import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AddButton() {
  return (
    <View style={styles.container} >
      <TouchableOpacity>
        <Text style={{color:'orange',fontWeight:'normal'}} >Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // marginVertical:-10,
        padding:8,
        borderWidth:1,
        borderColor:'orange',
        justifyContent:"center",
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:10
    }
})