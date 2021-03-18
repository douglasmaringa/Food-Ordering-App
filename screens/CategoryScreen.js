import React from 'react'
import { View, Text,StyleSheet ,ScrollView} from 'react-native'
import category from "../data/category"
import {Image,Button} from "react-native-elements";

const CategoryScreen = () => {
    return (
        <View style={{flex:1}}>
            <ScrollView>
          
           {
               category.map((item)=>(
                  <>
                   <Image
          style={{height:100,}}
          source={{uri: item.image}}
        />
         <Text style={{textAlign:'center', fontSize:20,fontWeight:'700', color:'red'}}> {item.title} </Text>
                  </>
               ))
           }
            </ScrollView>
        </View>
    )
}



export default CategoryScreen
