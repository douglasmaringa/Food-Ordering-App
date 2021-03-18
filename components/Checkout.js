import React from 'react'
import { View, Text,Pressable ,ScrollView} from 'react-native'
import {Image,Button} from "react-native-elements";
import { useStateValue } from "../StateProvider";

const Checkout = ({title,image,price,id}) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      };
    return (
        <View >
        
        <View style={{padding:10,display:'flex',flexDirection:'row' ,marginTop:10}}>
        <Image
          style={{height:70,width:70}}
          source={{uri: image}}
        />
        <Text style={{textAlign:'center', fontSize:20,fontWeight:'700'}}> {title} </Text>
        <Text style={{textAlign:'center', fontSize:20,fontWeight:'700',color:"#42EE0C"}}> ${price} </Text>

        <Button buttonStyle={{textAlign:'center',padding:6,backgroundColor:'#A90909', fontSize:20,fontWeight:'700',color:'white'}} title="Remove" onPress={removeFromBasket} >  </Button>
        </View>
        
        
      </View>
    )
}

export default Checkout
