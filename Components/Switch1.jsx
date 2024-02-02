import React,{useState} from 'react';
import { View, Text, ImageBackground, StyleSheet,Switch,ActivityIndicator } from 'react-native';

const Switch1 = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={
        {
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          gap:10, 
        }
      }>
        <Text>Enable Feature:</Text>
        <Switch
       trackColor={{ false: "#767577", true: "#81b0ff" }}
       thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

export default Switch1;