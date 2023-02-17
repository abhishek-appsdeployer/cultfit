import React,{useState} from 'react'
import { View,Text,StyleSheet ,Image,ImageBackground} from 'react-native'
import Card from './Card'
import Cardlive from './Cardlive';
const Live = ({navigation}) => {
    
  return (
    <View style={styles.main}>
    <Text onPress={()=>navigation.navigate('expert')} style={{color:"white",fontSize:20,padding:42,paddingTop:90,textAlign:"center"}}>Workout 
   at home with Inida's top trainers & live calorie tracking</Text>
        {/* box code */}
        <View style={{borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    
    margin:10,
    
    }}>
    
    
    
      <Cardlive/>
     
    

    </View>

      </View>
  )
}

const styles=StyleSheet.create({
    main:{
        backgroundColor:"#3B3735",
        height:800
    }
})
export default Live
