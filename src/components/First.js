import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const First = ({navigation}) => {
  return (
    <ImageBackground
      onPress={() => navigation.navigate('signin')}
      source={{
        uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      }}
      style={{
        resizeMode: 'cover',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        // height:800
      }}>
      <View style={{}} onPress={() => navigation.navigate('signin')}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            textAlign: 'right',
          }}>
          600+
        </Text>
        <Text style={{color: 'white', fontSize: 40, textAlign: 'right'}}>
          FITNESS
        </Text>
        <Text style={{color: 'white', fontSize: 40, textAlign: 'right'}}>
          CENTERS
        </Text>
        <Text style={{fontSize: 20, textAlign: 'right'}}>IN 27 CITIES</Text>
      </View>

      {/* icons */}
      <View style={{marginTop: 'auto', padding: 10, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Icon
            onPress={() => navigation.navigate('signin')}
            style={{textAlign: 'center'}}
            name="apple"
            size={30}
            color="white"
          />
          <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
            22 APPS FOR
          </Text>
          <Text style={{color: 'white', fontSize: 35, textAlign: 'center'}}>
            2022
          </Text>
        </View>

        <View style={{flex: 1}}>
          
           <Icon
            onPress={() => navigation.navigate('home')}
            style={{textAlign: 'center'}}
            name="apple"
            size={30}
            color="white"
          />
          <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
            RATING
          </Text>
          <Text style={{color: 'white', fontSize: 35, textAlign: 'center'}}>
            4.8+
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default First;
