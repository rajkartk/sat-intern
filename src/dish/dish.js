import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';

import DinnerFood from '../recepie/dinner.json';
import { useNavigation } from '@react-navigation/native';



const Dish = () => {

  const navigation = useNavigation();

  const dinnerItem = ({item})=>(
    <Pressable style={styles.aboutDish}  onPress={()=> navigation.navigate('Ingredients',{item:item}) } >
  
      <View style={styles.dishCard} >
  
        {/* description */}
        <View style={styles.description} >
          <Text style={styles.dishText} >{item.name}</Text>
          <Text style={styles.duration} >{item.duration}</Text>
  
        </View>
  
        {/* image */}
        <View style={styles.cardImage} >
          <Image source={{uri:item.imageUrl}} style={{width:80,height:80, borderRadius:50, borderWidth:2, borderColor:'#626b7a'}} />
        </View>
  
      </View>
  
    </Pressable>  
  )
  
  return (
    <View style={{flex:1}} >
      <FlatList 
        data={DinnerFood.indianRecipes}
        keyExtractor={(recipe)=>recipe.name.toString()}
        renderItem={dinnerItem}
      />
    </View>
  );
};

export default Dish;

const styles = StyleSheet.create({
    aboutDish:{
      backgroundColor:'#cad5e6',
      marginVertical:5,
      marginHorizontal:5,
      padding:1,
      borderRadius:10,
      elevation:10
    },
    dishCard:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    cardImage:{
      justifyContent:'center',
      alignItems:'center',
      margin:10,
      borderRadius:50,
    },
    dishText:{
      margin:10,
      fontSize:35,
      fontWeight:'bold',
      color:'black'
    },
    duration:{
      color:'gray',
      marginHorizontal:6
    }
});
