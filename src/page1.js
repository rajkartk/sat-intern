import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import Dish from './dish/dish';
import PopularDish from './PopularDish';
import { Filter } from './Image';


export default function Page1() {


  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <View style={{flex:1,backgroundColor:'black'}}></View>
        <View style={styles.dContainer}>


          <TextInput 
            style={[styles.textInputStyle, {color:'black'} ]} 
            clearButtonMode='always'
            placeholderTextColor={'#2b3e5c'} 
            placeholder='search your favorite dish' 
          />
          
          <TouchableOpacity>
            <Image source={Filter} style={{width:25, height:25}} />
          </TouchableOpacity> 
        </View>
        <View style={{margin:10}} ></View>
      
      </View>


        <View style={styles.continental}>
        <Text
          style={{fontSize: 20, margin: 5, color: 'black', fontWeight: 'bold'}}>
          Popular Dish
        </Text>

        <View style={{flexDirection: 'row',margin:0}}>
            <PopularDish />
        </View>
      </View>

      <View style={styles.recommend}>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 25, color: 'black', fontWeight:'bold'}}>
            Recommended
          </Text>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'black',
                borderRadius: 8,
                color: '#fff',
                elevation:5
              }}>
              Menu
            </Text>
        </View>

        <Dish />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  date: {
    flex: 1,
  },

  textInputStyle:{
    width:'90%',
    borderRadius:10,
    // marginLeft:2
  },
  dContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: '#becde6',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical:-10,
    // Shadow properties
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Elevation (for Android)
    elevation: 5

  },
  dDate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'black'
  },
  dTime: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  continental: {
    flex: 1,
  },
  dishImgae: {
    backgroundColor: 'red',
    borderRadius: 50,
    margin: 10,
    padding: 20,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  country:{
    marginTop:30,
    marginHorizontal:10,
    paddingHorizontal:15,
    paddingVertical:10,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'orange',
    borderRadius:20
  },
  countryText:{
    color:'orange'
  },
  recommend: {
    flex: 4,
    backgroundColor: 'white',
  },
});
