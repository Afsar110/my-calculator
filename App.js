import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cal from './Components/cal';

export default function App() {
  return (
    <View style={styles.container}>
      <Cal/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
 
  },
});
