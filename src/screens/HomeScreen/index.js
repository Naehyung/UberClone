import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import HomeMap from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = (props) => {
    return (
        <View>
            <View style={{height:Dimensions.get('window').height - 400}}>
                <HomeMap />
            </View>
            <CovidMessage />
            <HomeSearch />
        </View>
    );
};

export default HomeScreen;