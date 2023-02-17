import React from 'react';
import { View, Text, ImageBackground,Image, StyleSheet,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Cardlive = ({navigation}) => {
  return (
    <View style={styles.card}>
      <ImageBackground 
        source={{uri: 'https://images.unsplash.com/photo-1590487988109-577a73c327d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}} 
        style={styles.backgroundImage}
      >
      <View style={{flexDirection:"row",margin:10,gap:8}}>
        <Image
        onPress={() => navigation.navigate('premium')}
          style={{width: 60,
    height: 60,
    borderRadius: 60 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"black",fontSize:15,fontWeight:"bold",paddingVertical:15}}>100 + Live</Text>
        </View>
        {/* below image # tag */}

        <View style={{flexDirection:"row",marginTop:180,margin:10,gap:8}}>
        <Image
        onPress={() => navigation.navigate('premium')}
          style={{width: 50,
    height: 50,
    borderRadius: 50 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
       <View>
       <Text style={{color:"white",fontSize:16,fontWeight:"bold",}}>#34</Text>
       <Text style={{color:"white",fontSize:20,fontWeight:"bold",}}>Neha</Text>
       </View>
        </View>
        <View style={{flexDirection:"row",margin:10,gap:8}}>
        <Image
        onPress={() => navigation.navigate('premium')}
          style={{width: 50,
    height: 50,
    borderRadius: 50 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
       <View>
       <Text style={{color:"white",fontSize:16,fontWeight:"bold",}}>#35</Text>
       <Text style={{color:"white",fontSize:20,fontWeight:"bold",}}>YOU</Text>
       </View>
        </View>
        <View style={{flexDirection:"row",margin:10,gap:8}}>
        <Image
        onPress={() => navigation.navigate('premium')}
          style={{width: 50,
    height: 50,
    borderRadius: 50 / 2,}}
          source={{
            uri: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
       <View>
       <Text style={{color:"white",fontSize:16,fontWeight:"bold",}}>#36</Text>
       <Text style={{color:"white",fontSize:20,fontWeight:"bold",}}>Shreya
       
       </Text>
       </View>
        </View>
      </ImageBackground>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.2,
    borderColor:"white",
    borderRadius: 18,
    overflow: 'hidden',
    
  },
  backgroundImage: {
    height: 750,
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
export default Cardlive;