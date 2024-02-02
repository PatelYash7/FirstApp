import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
function TextInp() {
    const [text,setText]=useState('');
  return (
    <View>
        <TextInput 
            placeholder='Enter text'
            value={text}
            onChangeText={(text)=>setText(text)}
            onSubmitEditing={()=>{
                setText("Submitted")
            }}
        />
    </View>
  )
}

export default TextInp