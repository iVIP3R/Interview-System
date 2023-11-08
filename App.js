import { useState } from 'react';
import { Button, ScrollView, TouchableOpacity, ImageBackground, Image, StyleSheet, TextInput, View, Text, Modal } from 'react-native';
import * as Font from 'expo-font';

const dictionary = [
  { day: 'Monday', date: '31/10/2023', time: '10:00 AM' },
  { day: 'Tuesday', date: '1/11/2023', time: '2:30 PM' },
  { day: 'Wednesday', date: '2/11/2023', time: '4:45 PM' },
  { day: 'Thursday', date: '3/11/2023', time: '9:15 AM' },
  { day: 'Friday', date: '4/11/2023', time: '1:00 PM' },
];

Font.loadAsync({
  'CopenhagenGrotesk': require('./assets/fonts/CopenhagenGrotesk.otf'),
  'CopenhagenGrotesk-Bold': require('./assets/fonts/CopenhagenGrotesk-Bold.otf'),
  'CopenhagenGrotesk-light': require('./assets/fonts/CopenhagenGrotesk-light.otf'),
});

export default function App() {

  return (
    <ImageBackground
      source={require('./assets/IMG_3639.png')}
      style={styles.container}
    >
      <View style={styles.TopBackgroundStyle}>
        <Text style={{
          color: '#751130', fontSize: 36, paddingTop: 100, fontFamily: 'CopenhagenGrotesk',
        }}>Welcome, Takateko!</Text>

        <Image
          source={require('./assets/stp_logo.png')}
          style={styles.image}
        />
        <Image
          source={require('./assets/peeep.png')}
          style={styles.peeep}
        />
      </View>

      <View style={styles.container}>
        <Text style={{ color: '#F7F0D3', fontSize: 24, marginTop: -30, fontFamily: 'CopenhagenGrotesk' }}>Select a suitable time for your interview</Text>
      </View>
      <View style={styles.container}>
        <View >
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {dictionary.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.itemDay}>{item.day}</Text>
                <Text style={styles.itemDate}>{item.date}</Text>
                <Text style={styles.itemTime}>{item.time}</Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              alert('Application Submitted');
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 65,
    height: 65,
    position: 'absolute',
    top: 30,
    left: 10,
  },

  TopBackgroundStyle: {
    backgroundColor: '#FDFAED',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '19%',
    position: 'absolute',
    top: 0,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,

  },

  peeep: {
    width: 72,
    height: 72,
    position: 'absolute',
    top: 30,
    right: 10,
  },
  button: {
    backgroundColor: '#0A4165',
    padding: 12,
    borderRadius: 1,
    marginBottom: -150,
    width: 300,
    height: 62
  },

  buttonText: {
    color: '#F7F0D3',
    fontFamily: 'CopenhagenGrotesk',
    fontSize: 30,
    height: 30,
    textAlign: 'center',
  },

  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  itemContainer: {
    backgroundColor: '#FDFAED',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 15,
    width: 300,
  },
  itemDay: {
    color: '#751130',
    textAlign: 'left',
  },
  itemDate: {
    color: '#751130',
    textAlign: 'center',
  },
  itemTime: {
    color: '#751130',
    textAlign: 'right',
  },
}
);
