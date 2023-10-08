import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const PopularDish = () => {
  const recepirData = require('../src/recepie/recepie')

  const renderItem = ({ item }) => (
    <View style={{paddingHorizontal:10, justifyContent:'center', alignItems:'center'}} >
      <Image source={{ uri: item.imageUrl }} style={{ width: 80, height: 80, borderRadius:50, borderColor:'orange', borderWidth:2 }} />
      <Text style={{color:'black'}}>{item.name}</Text>
    </View>
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
