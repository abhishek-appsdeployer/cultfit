import React from 'react';
import { View, Text, ImageBackground, StyleSheet,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Card = ({navigation}) => {
  return (
    <View style={styles.card}>
      <ImageBackground 
        source={{uri: 'https://plus.unsplash.com/premium_photo-1661281327296-3b800c2d8c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} 
        style={styles.backgroundImage}
      >
      <View style={{flexDirection:"row",width:50,backgroundColor:"black",margin:8,borderRadius:26}}>
      <Icon
            style={{paddingVertical:12,padding:3}}
            name="star"
            size={10}
            color="white"
          />
      <Text style={styles.title}>Pro</Text>
       

      </View>
        
      </ImageBackground>
      <View style={{backgroundColor:"#654937"}}>
      <Text style={styles.description}>1.5 kM . AECS LAYOUT...</Text>
      <Text style={{color:"white",textAlign:"center",fontSize: 20,
    fontWeight: 'bold',}}>121 PREMIUM FITENSS GYM</Text>
      <Text style={{color:"white",textAlign:"center"}}>Group classes . Gym</Text>
      {/* <View style={{width:100,textAlign:"center",flexDirection:"row",justifyContent:"center"}}>
      <Button title='Book Now' ></Button>
      </View> */}
      <View style={{flexDirection:"row",justifyContent:"center",paddingVertical:10}}>
      <Text onPress={()=>navigation.navigate("live")} style={{textAlign:"center",color:"white",borderRadius:4,width:100,padding:8,backgroundColor:"#A0522D"}}>Book Now</Text>


      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
  },
  backgroundImage: {
    height: 150,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    margin:5,
    paddingVertical:5,
    backgroundColor:"black",
    
    borderRadius:20,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    padding: 16,
    color:"white",
    textAlign:"center"
  },
});
export default Card;