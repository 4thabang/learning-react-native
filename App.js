import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import BottomText from './components/bottom_text'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Oveya 🎉</Text>
      <Text style={styles.instructions}>We help content creators connect with their fans in interactive ways.</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <BottomText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
