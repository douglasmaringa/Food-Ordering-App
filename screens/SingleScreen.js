import React,{useState,useEffect} from 'react'
import { View, Text,ScrollView } from 'react-native'
import { useStateValue } from "../StateProvider";
import {Image,Button} from "react-native-elements";

const SingleScreen = ({navigation}) => {
    const [{ basket,single }, dispatch] = useStateValue();
   
    const addToBasket = () => {
        // dispatch item into data layer
      navigation.navigate('Home')
      };
    return (
        <View style={{flex:1,}}>
            <Image
          style={{height:200,}}
          source={{uri: single.image}}
        />
            <Text style={{padding:5,fontSize:20,fontWeight:'700'}}>{single.title}</Text>
            <Text style={{padding:10,fontSize:20,fontWeight:'700',color:'#42EE0C'}}>${single.price}</Text>

            <Text style={{padding:5,fontSize:16,fontWeight:'600',color:'black'}}>Your order is delivered in 15 minutes, we transport it in a warmer so its hot and fresh when it arrives to your door step</Text>

            <Button buttonStyle={{textAlign:'center',padding:6,backgroundColor:'#42EE0C', fontSize:20,fontWeight:'700',color:'white'}} title="Go Back and Order" onPress={addToBasket}>  </Button>
        </View>
    )
}

export default SingleScreen
