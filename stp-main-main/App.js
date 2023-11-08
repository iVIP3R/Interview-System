import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, Modal } from 'react-native';
import { InterviewSystem } from './InterviewSystem';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hi there</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});