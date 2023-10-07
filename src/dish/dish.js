import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AddButton from '../Button/AddButton';
import { useNavigation } from '@react-navigation/native';
import * as Rimage from '../Image/index'

import Icon from 'react-native-vector-icons/FontAwesome';




const Dish = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/',
      );
      const json = await response.json();
      setData(json.dishes);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: 'black',
      }}>

      <View style={styles.disheAbout}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-around', flex: 3, marginHorizontal: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>{item.name}</Text>
            <View style={styles.rating} >
              <Icon name="star" size={10} color="yellow" />
              <Text style={{ fontWeight: 'bold' }} >{item.rating}</Text>
            </View>
          </View>
          {/* euipment */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 1 }}>
            {
              item.equipments.map(it =>
                <View style={{ marginHorizontal: 5, alignItems: 'center' }} key={it} >
                  <Image source={Rimage[it]} style={{ width: 30, height: 30 }} />
                  <Text style={{ color: 'black', marginHorizontal: 15 }} >{it}</Text>
                </View>
              )
            }
            <View
              style={{ marginHorizontal: 5, justifyContent: 'space-around', }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>Ingredients</Text>

              <TouchableOpacity onPress={() => navigation.navigate('Ingredients')} >
                <Text style={{ color: 'orange', fontWeight:'bold' }}>View List {">"} </Text>
              </TouchableOpacity>

            </View>
          </View>

          <View>
            <Text style={{ color: 'gray' }}>{item.description}</Text>
          </View>
        </View>

        <View>

          <View style={{ flex: 1, paddingHorizontal: 5 }} >
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
          </View>

        </View>

      </View>
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
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Dish;

const styles = StyleSheet.create({
  disheAbout: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    margin: 8,
  },
  rating: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    margin: 5,
    backgroundColor: '#78cc5c',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Text: {
    color: 'black'
  }
});
