import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if neccesary</Text>
            <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem vitae lorem tempus luctus. Aenean convallis eget tortor vitae commodo.
            </Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View>
    )
}

export default CovidMessage