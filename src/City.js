import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet
} from 'react-native';
import axios from 'axios';
function City({ route, navigation }) {


    const { cityName } = route.params
    const [population, setPopulation] = useState(0);

    useEffect(() => {

        axios.get('http://api.geonames.org/searchJSON?q='+ cityName +'&maxRows=1&username=yumililo')
            .then(function (response)  {
                setPopulation(response.data.geonames[0].population);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    return (
        <SafeAreaView style={style.container}>
            <View >
                <Text style={style.logoText} >{cityName}</Text>
                <View style={{ borderWidth: 1 }}>
                    <Text style={{ textAlign: 'center', fontSize: 35, marginBottom: 20 }} >Population</Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 20 }} >{population}</Text>
                </View>
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
    }
})

export default City;