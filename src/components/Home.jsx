import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,Dimensions,ScrollView,Image} from 'react-native';
import axios from 'axios';

const screenHeight = Dimensions.get('window').height;
const Home = () => {
    const [data,setdata]=useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
          .then((response) => response.json())
          .then((actualData) => 
          {
            console.log("Data:",actualData.products)
            setdata(actualData.products)
          }
          )
          .catch((err) => {
            console.log(err.message);
          });

         const re=data.filter(el=>el.id<=5)
         setdata(re)
      }, []);
      const list = () => {
        console.log("list")
        console.log("list data",data)
        const re=data.filter(el=>el.id<=4)
        return re.map(element => {
          return (
         
    <>
              <View style={{borderRadius:20,backgroundColor:"#959595",marginTop:20}}>
              <View style={{flexDirection:"row",padding:20}}>
                {/* <Image source={{element.images[0]}}/> */}
                <Image
        
          style={{width: 70,
    height: 70,
    borderRadius: 70 / 2,}}
          source={{
            uri:element.images[0]
            // uri: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
              <View style={{paddingHorizontal:10,justifyContent:"center",width:"85%"}}>
              
              <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>{element.brand}</Text>
              <Text style={{color:"white",}}>{element.description}</Text>
              <Text style={{borderBottomWidth:0.3,borderColor:"white"}}/>
              <Text style={{color:"white",paddingTop:10,fontSize:15,fontWeight:"bold"}}>&#8377;{element.price}/month         onwards</Text>
              </View>
              </View>
              </View>
              </>
          );
        });
      };
  return (
    <>
      <ScrollView style={styles.main}>
        <Text style={{color:"white"}}>home</Text>
        <Text style={styles.explore}>Explore cultpass</Text>
        {list()}
      </ScrollView>
     
       
    </>
  );
};
const styles=StyleSheet.create({
    main:{
        backgroundColor:"black",
        height:screenHeight,
        padding:20
    },
    explore:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    }
})

export default Home;
