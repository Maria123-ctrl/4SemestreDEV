import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from '../style';


export default function App() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={style.safeArea}>
        <View style={style.container}>
      <Text>Hello Upper West Side</Text>
      <Text style={style.textoHello}>Hello girls!!</Text>
      <Text style={style.teste}>Hello Beyoncé!!</Text>
      <Text>Hello Fellas!!</Text>
      <Text>You really swell!!</Text>
      <StatusBar style="auto" />
    </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

