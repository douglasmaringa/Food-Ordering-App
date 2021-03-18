import React from 'react'
import { View, Text,Pressable } from 'react-native'
import {Image,Button} from "react-native-elements";

const CardColumn = ({title,image,price}) => {
    return (
        <View style={{padding:10, width:170,display:'flex',flexDirection:'row' }}>
        
        <View style={{marginLeft:5,}}>
        <Image
          style={{height:150,}}
          source={{uri: image}}
        />
        <Text style={{textAlign:'center', fontSize:20,fontWeight:'700'}}> {title} </Text>
        <Text style={{textAlign:'center', fontSize:20,fontWeight:'700',color:"#42EE0C"}}> ${price} </Text>
        <Button style={{padding:7,backgroundColor:'#A90909'}}> <Text style={{textAlign:'center', fontSize:20,fontWeight:'700',color:'white'}}> Order </Text></Button>
        </View>
        
        
      </View>
    )
}

export default CardColumn
