import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User({user}) {
    return (
        <View style={styles.component}>
            <Text>{user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    component :{
        borderWidth:1,
        borderRadius:5,
        borderColor:"white",
        height:'20',
        width:'250px',
        margin:10,
        padding:5
    }
})
