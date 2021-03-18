import React from 'react'
import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import { Image } from 'react-native-elements';

const Categories = ({title,image}) => {
    return (
        
        <View style={{flex:1 }}>
        
        <View style={{marginLeft:15,}}>
        <Image
          style={{width:100,height:100,borderRadius:5}}
          source={{uri: image}}
        />
        <Text style={{textAlign:'center', fontSize:16,fontWeight:'700'}}> {title} </Text>
        </View>
        
        
      </View>
      
    )
}

const Styles = StyleSheet.create({

    container:{
        backgroundColor:"white"
    }

})

export default Categories
