import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Rimage from './Image/index'

export default function ViewList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1',
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      {data ? (
        <View style={{flex: 1}}>
          <View style={styles.About}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}} >
              <View style={{flex:1}} >
                <Text style={styles.DishName}>{data.name}</Text>
                <Text style={{marginTop: 5, color: 'gray'}}>
                  Mughal Masala is a style of cookery developed in the indian
                  SubContinent by the imperial of the Mughal Empire
                </Text>

                <View style={{margin: 10, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                  <Image source={require('./Image/time.png')} style={{width:15,height:15,marginRight:2 }} />
                  <Text style={styles.Time}>{data.timeToPrepare}</Text>
                </View>
              </View>

              <View style={{flex:1, margin:20,  }} >
                <Image
                  source={{
                    uri: 'https://images7.alphacoders.com/417/thumb-1920-417966.jpg',
                  }}
                  style={{width: 150, height:150, borderRadius:50}}
                />
              </View>
            </View>
          </View>

          <View style={styles.components}>
            <View style={styles.Ingredients}>
              <Text style={styles.Text}>Ingredients</Text>
              <Text style={styles.IngreText}>For 2 people</Text>
            </View>

            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 10,
                }}>
                <View style={styles.Vegetable}>
                  <Text style={styles.VText}>Vegetables</Text>
                  <View style={{marginLeft: 10, padding: 5, marginVertical: 5}}>
                    {data.ingredients.vegetables.map((vegetable, index) => (
                      <Text style={styles.IngreText} key={index}>
                        {vegetable.name} - {vegetable.quantity}
                      </Text>
                    ))}
                  </View>
                </View>

                <View style={styles.Spice}>
                  <Text style={styles.VText}>Spices </Text>
                  <View style={{marginLeft: 10}}>
                    {data.ingredients.spices.map((spice, index) => (
                      <Text style={styles.IngreText} key={index}>
                        {spice.name} - {spice.quantity}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>

              <View style={styles.Appliance}>
                <Text style={styles.Text}>Appliances</Text>
                <View
                  style={{
                    // marginLeft: 10,
                    backgroundColor: 'white',
                    padding: 10,
                    flexDirection: 'row',
                    borderRadius: 10,
                  }}>
                  {data.ingredients.appliances.map((appliance, index) => (
                    <View style={{flex: 1, justifyContent:'center',alignItems:'center'}} key={index}>
                      <Image source={Rimage[appliance.name]} style={{width:30,height:30}} />
                      <Text style={styles.IngreText}>{appliance.name}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  DishName: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  About: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadiusd: 10,
    // justifyContent:'space-around'
  },
  IngreText: {
    color: 'black',
    marginVertical: 3,
  },
  VText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  Time: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  Ingredients: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  Text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  components: {
    flex: 3,
  },
  Vegetable: {
    flex: 1,
    marginVertical: 5,
    padding: 5,
  },
  Spice: {
    flex: 1,
    marginVertical: 10,
    padding: 5,
    backgroundColor: 'white',
  },
  Appliance: {
    flex: 2,
    // flexDirection:'row'
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
