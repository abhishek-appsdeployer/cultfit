import React from 'react'
import { View,Text,StyleSheet ,Image,ImageBackground} from 'react-native'
const Badminton = ({navigation}) => {
  return (
    <>
        <View style={styles.main}>
        <View style={{padding:42,paddingTop:90}}>
        <Text style={{color:"white",textAlign:"center",fontSize:24}}>cutpass <Text style={{ fontWeight: 'bold' }}>PLAY</Text></Text>
        <Text onPress={()=>navigation.navigate("fitness")}  style={{color:"white",fontSize:20,textAlign:"center"}}>
    Get expert coaching for lasting weight loss
    </Text>
        </View>
        {/* card of badiminton */}
         
        <View style={styles.card}>
      <ImageBackground 
        source={{uri: 'https://images.unsplash.com/photo-1613918702390-48771f69c133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhZG1pbnRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} 
        style={styles.backgroundImage}
      >
      <Text style={{fontSize:50,fontWeight:"bold",color:"white",textAlign:"center",paddingTop:140}}>Badminton</Text>
      <Text style={{fontSize:15,fontWeight:"bold",color:"white",textAlign:"center"}}> STRAMINA . FLEXIBITY</Text>
      </ImageBackground>
      </View>

      <View style={{flexDirection:"row",gap:5,paddingVertical:10}}>




      <View style={styles.card}>
      <ImageBackground 
        source={{uri: 'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}} 
        style={styles.backgroundImages}
      >
      <Text style={{fontSize:20,fontWeight:"bold",color:"white",textAlign:"center",paddingTop:80}}>SWIMMING</Text>
      
      </ImageBackground>
      </View>
      

      <View style={styles.card}>
      <ImageBackground 
        source={{uri: 'https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGUlMjB0ZW5uaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}} 
        style={styles.backgroundImages}
      >
      <Text style={{fontSize:20,fontWeight:"bold",color:"white",textAlign:"center",paddingTop:80}}>TABLE {"\n"} TENNIS</Text>
      </ImageBackground>
      </View>

      </View>

       
    </View>
    </>
  )
}
const styles=StyleSheet.create({
    main:{
        backgroundColor:"#3B3735",
        height:800,
        padding:12
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        overflow: 'hidden',
       
      },
      backgroundImage: {
        height: 250,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
      backgroundImages: {
        height: 150,
        width:160
        // justifyContent: 'center',
        // alignItems: 'center',
      },
  
})
export default Badminton
