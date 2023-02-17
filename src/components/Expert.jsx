import React,{useState} from 'react'
import { View,Text,StyleSheet ,Image,ImageBackground} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import Card from './Card'
const Expert = ({navigation}) => {
    
  return (
    <View style={styles.main}>
    <Text onPress={()=>navigation.navigate("badminton")} style={{color:"white",fontSize:20,padding:42,paddingTop:90,textAlign:"center"}}>
    Get expert coaching for lasting weight loss
    </Text>
        {/* box code */}
    <View style={{borderWidth: 1,
    borderColor: '#0d98ba',
    borderRadius: 30,
    backgroundColor:"#0d98ba",
    
    margin:10
    }}>
    
    <View style={styles.img}>
    <Image
          style={{width: 80,
    height: 80,
    marginVertical:30,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1593476123561-9516f2097158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
    </View>
    <View >
        <Text style={{textAlign:"center",color:"white",fontSize:20,fontWeight:"bold"}}>You're a  habit ninja!</Text>
        <Text style={{textAlign:"center",color:"white",paddingHorizontal:30}}>Stay consistent and build new havits to vecome the best version of you!</Text>
    </View>

    <View styl={styles.perfect}>
    <View style={{flexDirection:"row",justifyContent: 'space-between',padding:10}}>
    <Text style={{color:"white",fontSize:25,fontWeight:"bold",}}>Perfect</Text>
    <Text style={{color:"green",fontSize:15,fontWeight:"bold",paddingTop:8}}>CONSISTENCY>80%</Text>

    </View>

    </View>

    {/* times */}
    <View style={styles.times}>

    <View style={{flexDirection:"row",gap:10}}>
        <View style={{width:60,height:60,borderRadius:30,borderWidth:3,borderColor:"green"}}>
        
        <Icon
            
            style={{textAlign: 'center',paddingTop:8}}
            name="plane"
            size={30}
            color="white"
          />

        </View>
        <View>
            <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>17/20 TIMES</Text>
            <Text style={{width:200,fontSize:14,color:"white"}}> I will workout handful of veggies in my lunch</Text>
        </View>
    </View>

    <Icon
            
            style={{textAlign: 'center'}}
            name="chevron-circle-right"
            size={25}
            color="white"
          />


    </View>

    <View style={styles.times}>

<View style={{flexDirection:"row",gap:10}}>
    <View style={{width:60,height:60,borderRadius:30,borderWidth:3,borderColor:"green"}}>
    
    <Icon
        
        style={{textAlign: 'center',paddingTop:8}}
        name="dribbble"
        size={30}
        color="white"
      />

    </View>
    <View>
        <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>18/20 TIMES</Text>
        <Text style={{width:200,fontSize:14,color:"white"}}> I will workout 10 min a day</Text>
    </View>
</View>

<Icon
        
        style={{textAlign: 'center'}}
        name="chevron-circle-right"
        size={25}
        color="white"
      />


</View>
    
    
    

      </View>
      </View>
  )
}

const styles=StyleSheet.create({
    main:{
        backgroundColor:"#3B3735",
        height:800
    },
    img:{
        flexDirection:"row",
        justifyContent:"center",
        
        
    },
    perfect:{
        

    },
    times:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        paddingVertical:20

    }
})
export default Expert
