import React from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

const Category = () => {
  return (
    <View style={styles.main}>
         <Text style={{color:"white",fontSize:20,padding:42,paddingTop:90,textAlign:"center"}}>
         Shop fitness Equipments, apparel, supplements & more
    </Text>

        <View style={{borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    
    margin:10
    }}>
    
    {/* rounded images */}
    <View style={{padding:15}}  onPress={() => navigation.navigate('premium')}>
        <Text style={{color:"white",fontSize:20,}} onPress={() => navigation.navigate('premium')}>Shop by Category</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <View>
        <Image
        onPress={() => navigation.navigate('premium')}
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1578763363228-6e8428de69b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlYWRtaWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>Treadmils</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://media.istockphoto.com/id/1221025222/photo/fitness-machine-at-home-woman-biking-on-indoor-stationary-bike-exercise-indoors-for-cardio.jpg?b=1&s=170667a&w=0&k=20&c=z0bQiIzCY12E_9uWmECSbpv3PVjq5gKgZH25Z8eJPMA=',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>SpinBikes</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1583467875263-d50dec37a88c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>Cycle</Text>
        </View>

        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1658506653991-34a0c741fa56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8am9nZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>JOGGERS</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1621951753015-740c699ab970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>T-Shirts</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1626622174587-d509d1862cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRpZ2h0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>Tights</Text>
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
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>Sports Bra</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>Shorts</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>Footwear</Text>
        </View>

        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <View>
        <Image
        onPress={() => navigation.navigate('premium')}
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1578763363228-6e8428de69b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlYWRtaWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>Treadmils</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://media.istockphoto.com/id/1221025222/photo/fitness-machine-at-home-woman-biking-on-indoor-stationary-bike-exercise-indoors-for-cardio.jpg?b=1&s=170667a&w=0&k=20&c=z0bQiIzCY12E_9uWmECSbpv3PVjq5gKgZH25Z8eJPMA=',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>SpinBikes</Text>
        </View>

        <View>
        <Image
          style={{width: 80,
    height: 80,
    borderRadius: 80 / 2,}}
          source={{
            uri: 'https://images.unsplash.com/photo-1583467875263-d50dec37a88c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Text style={{color:"white",textAlign:"center",fontSize:15,paddingTop:10}}>Cycle</Text>
        </View>

        </View>
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
    
    
})
export default Category
