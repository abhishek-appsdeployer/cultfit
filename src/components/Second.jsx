import React from 'react'
import { View,Text,StyleSheet ,Image} from 'react-native'
const Second = ({navigation}) => {
  return (
    <View style={styles.main}>
    <Text style={{color:"white",fontSize:25,padding:48,textAlign:"center"}}>Workout 
    in group classes at cult centers in 10 + excitng Formats</Text>
        {/* box code */}
        <View style={{borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    
    margin:10
    }}>
    <View style={{flexDirection:"row",color:"white",justifyContent:"space-between",padding:10,}}>
    <Text style={{color:"white"}}>AT CENTER</Text>
    <Text style={{color:"white"}}>AT HOME</Text>
    <Text style={{color:"white"}}>MY PROFILE</Text>

    </View>
    <View style={{borderBottomColor:"gray",borderWidth:0.5,width:"100%"}}/>
    {/* rounded images */}
    <View style={{padding:15}}  onPress={() => navigation.navigate('premium')}>
        <Text style={{color:"white",fontSize:20,}} onPress={() => navigation.navigate('premium')}>All formats</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <View>
        <Image
        onPress={() => navigation.navigate('premium')}
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>SSC</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>HRX</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1665673312770-90df9f77ddfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>DANCE</Text>
        </View>

        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>YOGA</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>CARDIO</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>bOX</Text>
        </View>

        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1661281327296-3b800c2d8c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>YOGA</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1593476123561-9516f2097158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>CARDIO</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:25}}>BOXING</Text>
        </View>

        </View>
    </View>

    </View>

      </View>
  )
}

const styles=StyleSheet.create({
    main:{
        backgroundColor:"black",
        height:800
    }
})
export default Second
