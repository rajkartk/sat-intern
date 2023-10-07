import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const PopularDish = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/');
      const json = await response.json();
      setData(json.popularDishes);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{paddingHorizontal:10, justifyContent:'center', alignItems:'center'}} >
      <Image source={{ uri: item.image }} style={{ width: 80, height: 80, borderRadius:50, borderColor:'orange', borderWidth:2 }} />
      <Text style={{color:'black'}}>{item.name}</Text>
      <Text style={{color:'black'}}>{item.rating}</Text>
      <Text style={{color:'black'}}>{item.description}</Text>
    </View>
  );

  if (data.length === 0) {
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
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PopularDish;
