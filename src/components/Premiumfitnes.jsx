import React,{useState} from 'react'
import { View,Text,StyleSheet ,Image,ImageBackground} from 'react-native'
import Card from './Card'
const Premiumfitness = ({navigation}) => {
    const [isPressed, setIsPressed] = useState(false);
    const handlePressIn = () => {
        setIsPressed(true);
      }
      const handlePressOut = () => {
        setIsPressed(false);
      }
  return (
    <View style={styles.main}>
    <Text style={{color:"white",fontSize:20,padding:42,paddingTop:90,textAlign:"center"}}>Workout 
    at the best gyms with a personalized fintness plan</Text>
        {/* box code */}
        <View style={{borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    
    margin:10
    }}>
    
    <View style={{flexDirection:"row",color:"white",justifyContent:"space-between",padding:10,}}>
    <Text style={{color:"white",fontSize:16,fontWeight:"bold",borderBottomColor:"white",borderBottomWidth:2}}>AT CENTER</Text>
    <Text style={{color:"white"}}>AT HOME</Text>
    <Text style={{color:"white"}}>MY PROFILE</Text>

    </View>
    <View style={{borderBottomColor:"gray",borderWidth:0.5,width:"100%"}}/>
    {/* Cards */}
     <View style={{padding:20}}>
       
        <Card navigation={navigation}/>
        <Card navigation={navigation}/>
     </View>
     
    

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
export default Premiumfitness
