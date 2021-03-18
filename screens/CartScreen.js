import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import { useStateValue } from "../StateProvider";
import Checkout from "../components/Checkout"
import { getBasketTotal } from '../reducer';

const CartScreen = () => {
    const [{ basket,single }, dispatch] = useStateValue();
    return (
        <View style={{flex:1}}>
             <ScrollView>
           {
               basket?(<>
               
               <Text style={{fontWeight:'700',fontSize:18,color:'#42EE0C'}}>Sub Total: ${getBasketTotal(basket)}</Text>
               {basket.map((item) => (
                  
            <Checkout
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            
          ))}</>):
          (<>
          <Text >Cart is empty</Text>
          </>)
           }
          
          </ScrollView>
           
        </View>
    )
}



export default CartScreen
