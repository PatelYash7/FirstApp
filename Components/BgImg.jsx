import React, { memo } from 'react'
import { View, Text,StyleSheet,ImageBackground } from 'react-native'

const BgImgComponent = () => {

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: 'center',
        },
        text: {
            color: 'white',
            fontSize: 42,
            lineHeight: 84,
            fontWeight: 'bold',
            textAlign: 'center',
        }
    })
    return (
        <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/2167039/pexels-photo-2167039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.text}>Hello, World!</Text>
        </ImageBackground>
    );


}

export const BgImg = memo(BgImgComponent)