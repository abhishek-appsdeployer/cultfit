import React ,{useState} from 'react'
import {View,Text,TextInput} from "react-native"
import auth from '@react-native-firebase/auth';
const Otp = ({route,navigation}) => {
   const  confirmation=route.params
   console.log(confirmation)
    // const [confirmation, setConfirmation] = useState(null);
    const [verify,setVerify]=useState()
    const [errorMessage, setErrorMessage] = useState('');
    const confirmCode = async () => {
        try {
          const credential = auth.PhoneAuthProvider.credential(
            confirmation.verificationId,
        verify
          );
          const userCredential = await auth().signInWithCredential(credential);
          alert("successfully login")
          navigation.navigate("home")
          // Do something with the userCredential object, such as update your app's UI or store the user's data in your database
        } catch (error) {
          setErrorMessage(error.message);
        }
      };
  return (
    <View style={{backgroundColor:"black",height:800,paddingTop:300}}>
        <Text>otp</Text>
        <TextInput 
         style={{ backgroundColor: 'gray', borderRadius: 10 ,paddingLeft:30}}
         placeholder="Enter the otp"
         placeholderTextColor="white"
         placeholderStyle={{ fontFamily: "AnotherFont", fontSize:20,fontweight:"bold" }}
         
            onChangeText={setVerify}
        />
        <Text
       
            onPress={confirmCode}
             style={{ backgroundColor: 'white',fontSize:20, borderRadius: 10,textAlign:"center",paddingVertical:10,color:"red",marginTop:20 }}>
            CONTINUE
            </Text>
            {errorMessage ? <Text style={{color:"red",marginTop:20}}>{errorMessage}</Text> : null}

    </View>
  )
}

export default Otp
