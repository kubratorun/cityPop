
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

function Home({navigation}) {
  return (
    <SafeAreaView style={style.container}>
      <View >
        <Text style={style.logoText} >CİTY POP</Text>
        <Button
          title="SEARCH BY CITY"
          onPress={() => navigation.navigate('SearchByCity')}
        />

        <Button
        style ={style.button}
          title="SEARCH BY COUNTRY"
   
          onPress={() => navigation.navigate('SearchByCountry')}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  logoText: {
    color: 'black',
    fontSize: 40,
    marginBottom: 70,
    textAlign: 'center',
  },
  button: {
    margin: 50,
    borderRadius:3,
    textAlign:'center',
    textTransform:'uppercase',
    backgroundColor:'#00796b',
    color:'pink'
  }
})

export default Home;