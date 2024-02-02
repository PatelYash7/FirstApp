import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, TextInput, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import First from './First';
import State from './State';
import TextInp from './TextInp';
import { ListView } from './ListView';
import { Flex } from './Components/Flex';
import { BgImg } from './Components/BgImg';

import Switch1 from './Components/Switch1';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="red"/>
      <Switch1 />
      {/* <First/> */}
      {/* <TextInp/>
      <ListView/> */}
      {/* <Flex/> */}
      {/* <BgImg/> */}
    
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});
