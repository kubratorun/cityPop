import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const DATA = [];
const Item = ({ title }) => (
    <View style={style.item}>
      <Text style={style.title}>{title}</Text>
    </View>
  );
  

function Country({route, navigation}) {
  const {countryCode} = route.params;
  const [countryName, setName] = useState(null);

  useEffect(() => {
    axios
      .get(
        'http://api.geonames.org/searchJSON?country=' +
          countryCode +
          '&maxRows=3&username=yumililo',
      )
      .then(function (response) {
        setName(response.data.geonames[0].countryName);
        response.data.geonames.forEach(city => {
          DATA.push({title: city.name});
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.logoText}>{countryName}</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}

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
  item: {
    backgroundColor: 'grey',
    color:'#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});

export default Country;
