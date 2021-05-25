import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeMap from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = (props) => {
    return (
        <View>
            <HomeMap />
            <CovidMessage />
            <HomeSearch />
        </View>
    );
};

export default HomeScreen;