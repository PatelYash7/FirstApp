import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'red',
        opacity:0.5,
        justifyContent:'center',
        gap:10,
        padding:20,
        flexDirection:'row'
        
    },
    item:{
        padding:5,
        borderRadius:10,
        backgroundColor:'blue',
        
    },
    text:{
        color:'black',
        backgroundColor:'white'
    }
});

const FlexComponent = () => {
    return (
        <View style={styles.container}>
            
            <View style={styles.item}><Text style={styles.text}>Hello sgfsdf</Text></View>
            <View style={styles.item}><Text style={styles.text}>Hello</Text></View>
            <View style={styles.item}><Text style={styles.text}>Hello</Text></View>
            
        </View>
    )
}

export const Flex = memo(FlexComponent)