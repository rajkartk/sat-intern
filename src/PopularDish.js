import React from 'react';
import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PopularDish = () => {
  const navigation = useNavigation();

  
  const recepirData = require('../src/recepie/recepie')
  
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Recepie',{item:item})} style={{paddingHorizontal:10, justifyContent:'center', alignItems:'center'}} >
      <Image source={{ uri: item.imageUrl }} style={{ width: 80, height: 80, borderRadius:50, borderColor:'orange', borderWidth:2 }} />
      <Text style={{color:'black'}}>{item.name}</Text>
      {/* <View>{item.recipe}</View> */}
    </TouchableOpacity>
  );

  if (recepirData.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        data={recepirData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PopularDish;
