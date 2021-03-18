import React from 'react'
import { View, Text,Pressable } from 'react-native'
import {Image,Button} from "react-native-elements";
import { useStateValue } from "../StateProvider";

const Card = ({title,image,price,id,navigation}) => {
  const [{ basket,single }, dispatch] = useStateValue();

  const addToSingle = () => {
    // dispatch item into data layer
    dispatch({
      type: "Set_Single",
      item: {
        title:title,
        image:image,
        price:price
        },
    });
    navigation.navigate("single")
  };
  console.log(single)
  const addToBasket = () => {
    // dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
       
      },
    });
    navigation.navigate('Cart')
  };
  
  //console.log(basket)
    return (
        <View style={{padding:10, width:150 }}>
        
        <View style={{marginLeft:5,}}>
          <Pressable onPress={addToSingle}>
        <Image
          style={{height:100,}}
          source={{uri: image}}
        />
        </Pressable>
        <Text style={{textAlign:'center', fontSize:20,fontWeight:'700'}}> {title} </Text>
        <Text style={{textAlign:'center', fontSize:20,fontWeight:'700',color:"#42EE0C"}}> ${price} </Text>
        
       <Button buttonStyle={{textAlign:'center',padding:7,backgroundColor:'#A90909', fontSize:20,fontWeight:'700',color:'white'}} title="Order" onPress={addToBasket}>  </Button>
        </View>
        
        
      </View>
    )
}

export default Card
