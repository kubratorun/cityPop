
import React from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  Button
} from 'react-native';

function SearchByCity({navigation}) {
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={style.container}>
      <View >
        <TextInput
          style={style.input}
          onChangeText={onChangeText}
          placeholder="SEARCH BY CITY"
          value={text}
        />
        <Button
          title="SEARCH BY CITY"
          onPress={() =>navigation.navigate('City', {
            cityName: text
          })}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default SearchByCity;