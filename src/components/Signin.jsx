import React ,{useState}from 'react';
import {View, Text, ImageBackground, StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const Signin = ({navigation}) => {
    const [phone,setphone]=useState("+91")
    const [confirmation, setConfirmation] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const signInWithPhoneNumber = async () => {
        try {
          const confirmation = await auth().signInWithPhoneNumber(phone);
          setConfirmation(confirmation);
          console.log(confirmation)
        navigation.navigate("otp",confirmation)
        } catch (error) {
          setErrorMessage(error.message);
        }
      };
   
  return (
    <ImageBackground
      onPress={() => navigation.navigate('second')}
      source={{
        uri: 'https://media.istockphoto.com/id/1375037561/photo/home-gym-with-barbell-dumbbells-exercise-bike-and-other-sports-equipments.jpg?b=1&s=170667a&w=0&k=20&c=ARd3cg6rvuHa9wvQpsMZayE255MviACiud4YpO8hjAg=',
      }}
      style={{
        resizeMode: 'cover',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        // height:800
      }}>
      <View style={{marginTop:200}}>
        <Text style={{color:"black",fontSize:30,textAlign:"center",fontWeight:"bold"}}>Elevate Your</Text>
        <Text style={{color:"black",fontSize:25,textAlign:"center",fontWeight:"bold"}}>workout experience 
        at the {"\n"} best fintness centres.</Text>      
      </View>
      {/* number input */}

      <View style={{margin:15}}>
        
            <TextInput 
            style={{ backgroundColor: 'gray', borderRadius: 10 ,paddingLeft:30}}
  keyboardType="numeric"
  value={phone}
onChangeText={setphone}

  />
        
      </View>

      <View style={{margin:15}}>
        
            <Text
            onPress={signInWithPhoneNumber}
             style={{ backgroundColor: 'white',fontSize:20, borderRadius: 10,textAlign:"center",paddingVertical:10,color:"red" }}>
            CONTINUE
            </Text>
        
      </View>
      {errorMessage ? <Text style={{color:"red"}}>{errorMessage}</Text> : null}

      
    </ImageBackground>
  );
};

export default Signin;
