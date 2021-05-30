import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native'
import PlaceRow from './PlaceRow';
import styles from './style'

const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
}
const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496318, lng: 2.294881 } }
}


const DestinationSearch = (props) => {

    const navigation = useNavigation();
    const [originPlace, setOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    useEffect(() => {
        if (originPlace && destinationPlace) {
            navigation.navigate("SearchResults", {
                originPlace,
                destinationPlace,
            })
        }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where From'
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details })
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    currentLocation={true}
                    currentLocationLabel="Current location"
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autocompleteContainer,
                        listView: styles.listView,
                        separator: styles.seperator
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyBO262gv9qxp01ep4aFyaWp6mRYHFEAV60',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details })
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: { ...styles.autocompleteContainer, top: 55, },
                        separator: styles.seperator
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyBO262gv9qxp01ep4aFyaWp6mRYHFEAV60',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                />

                {/* Circle near "Origin" input */}
                <View style={styles.circle} />

                {/* Line between dots */}
                <View style={styles.line} />

                {/* Square near "Destination" input */}
                <View style={styles.square} />

            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch