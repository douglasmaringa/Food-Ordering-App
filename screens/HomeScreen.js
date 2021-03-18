import React,{useState,useEffect} from 'react'
import { View, Text,StatusBar,ScrollView,FlatList } from 'react-native'
import { db,storage } from "../firebase";
import Categories from "../components/Categories"
import data from "../data/category"
import Card from "../components/Card"
import CardColumn from "../components/CardColumn"

const HomeScreen = ({navigation}) => {

  const[meals,setMeals] = useState([])
  useEffect(()=>{
    db.collection('products').onSnapshot((snapshot)=>{
      setMeals(snapshot.docs.map((doc)=>doc.data()))
    
  })
  },[])
  
 
    return (
        <View style={{flex:1 }}>
         <ScrollView>
          <View style={{display:'flex',flexDirection:"row"}}>
          <Text style={{fontWeight:'700',fontSize:18,marginLeft:15}}>Categories</Text>
          <Text style={{fontWeight:'600',fontSize:16,marginLeft:"auto",color:'#42EE0C',paddingRight:5}}>View All</Text>
          </View>
         
        <FlatList
        data={data}
        horizontal={true}
        noOfColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <View style={{flex:1}}>
          <ScrollView>
            <Categories title={item.title} image={item.image}/>
            </ScrollView>
        </View>}
     />
     

     <Text style={{fontWeight:'700',fontSize:18,marginLeft:15}}>Special Offers</Text>
     <ScrollView>
        <FlatList
        data={meals}
        horizontal={true}
        noOfColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <View>
            <Card title={item.title} image={item.image} price={item.price} id={item._id} navigation={navigation}/>
            
        </View>}
     />
     </ScrollView>
    
     </ScrollView>
        </View>
      );
    }

export default HomeScreen
