import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const Fitness = ({navigation}) => {
  return (
    <>
        <View style={styles.main}>
        <Text onPress={()=>navigation.navigate('category')} style={{color:"white",fontSize:20,padding:42,paddingTop:90,textAlign:"center"}}>
        One app for all your health & fitness needs</Text>

   <View style={{borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    
    margin:10,
    padding:10
    }}>
    {/* inner fitness */}
    <View style={{
    
    borderRadius: 20,
    backgroundColor:"#303030",
    margin:10,
    padding:10
    }}>
    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Fitness</Text>

    {/* image */}
    <View style={{flexDirection:"row",gap:10,paddingTop:10}}>
    <View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
            onPress={() => navigation.navigate('second')}
            style={{textAlign: 'center',paddingTop:10}}
            name="camera"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>At Home</Text>

</View>
<View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
           
            style={{textAlign: 'center',paddingTop:10}}
            name="street-view"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>At Center</Text>

</View>
<View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
            
            style={{textAlign: 'center',paddingTop:10}}
            name="address-book-o"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>Myprofile</Text>

</View>
    </View>
    </View>

{/* personal coaching */}
    <View style={{
    
    borderRadius: 20,
    backgroundColor:"#303030",
    margin:10,
    padding:10
    }}>
    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>1.1 Personal Coaching</Text>

    {/* image */}
    <View style={{flexDirection:"row",gap:10,paddingTop:10}}>
    <View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
            onPress={() => navigation.navigate('second')}
            style={{textAlign: 'center',paddingTop:10}}
            name="user"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>Personal{"\n"} Traininng</Text>

</View>
<View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
           
            style={{textAlign: 'center',paddingTop:10}}
            name="street-view"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>Weight Loss</Text>

</View>

    </View>
    </View>
    
{/* fitness store */}
    <View style={{
    
    borderRadius: 20,
    backgroundColor:"#303030",
    margin:10,
    padding:10
    }}>
    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Fitness Store</Text>

    {/* image */}
    <View style={{flexDirection:"row",gap:10,paddingTop:10}}>
    <View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
            onPress={() => navigation.navigate('second')}
            style={{textAlign: 'center',paddingTop:10}}
            name="shirtsinbulk"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>Apparel</Text>

</View>
<View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
           
            style={{textAlign: 'center',paddingTop:10}}
            name="motorcycle"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>spin Bike</Text>

</View>
<View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
            
            style={{textAlign: 'center',paddingTop:10}}
            name="yoast"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>Treadmils</Text>

</View>

<View>
    <View style={{width:50,height:50, borderRadius:25,backgroundColor:"gray"}}>
    
    <Icon
            
            style={{textAlign: 'center',paddingTop:10}}
            name="tools"
            size={30}
            color="white"
          />
          

    </View>
    <Text style={{textAlign:"center",marginTop:5,fontWeight:"bold",color:"gray"}}>Equipments</Text>

</View>
    </View>
    </View>
    </View>
    </View>
    </>
  )
}

const styles=StyleSheet.create({
    main:{
        backgroundColor:"#3B3735",
        height:800
    },
    
    
})
export default Fitness
