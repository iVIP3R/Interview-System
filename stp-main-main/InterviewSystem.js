import { useState, useEffect, React } from 'react';
import { View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

const InterviewSystem = () => {
  const dictionary = [
    { day: 'Monday', date: '31/10/2023', time: '10:00 AM' },
    { day: 'Tuesday', date: '1/11/2023', time: '2:30 PM' },
    { day: 'Wednesday', date: '2/11/2023', time: '4:45 PM' },
    { day: 'Thursday', date: '3/11/2023', time: '9:15 AM' },
    { day: 'Friday', date: '4/11/2023', time: '1:00 PM' },
    { day: 'Monday', date: '31/10/2023', time: '10:00 AM' },
    { day: 'Tuesday', date: '1/11/2023', time: '2:30 PM' },
    { day: 'Wednesday', date: '2/11/2023', time: '4:45 PM' },
    { day: 'Thursday', date: '3/11/2023', time: '9:15 AM' },
    { day: 'Friday', date: '4/11/2023', time: '1:00 PM' },
    { day: 'Monday', date: '31/10/2023', time: '10:00 AM' },
    { day: 'Tuesday', date: '1/11/2023', time: '2:30 PM' },
    { day: 'Wednesday', date: '2/11/2023', time: '4:45 PM' },
    { day: 'Thursday', date: '3/11/2023', time: '9:15 AM' },
    { day: 'Friday', date: '4/11/2023', time: '1:00 PM' },
  ];

  const handleItemPress = (item) => {
    console.log('Selected item:', item);
  };

  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    Font.loadAsync({
      'CopenhagenGrotesk': require('./assets/fonts/CopenhagenGrotesk.otf'),
      'CopenhagenGrotesk-Bold': require('./assets/fonts/CopenhagenGrotesk-Bold.otf'),
      'CopenhagenGrotesk-light': require('./assets/fonts/CopenhagenGrotesk-light.otf'),
    })
    .then(() => {
     setFontLoaded(true)
    }) 
  }, [])

  if (!fontLoaded) return null

  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/stp_logo.png')} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome, Mohamed!</Text>
          <Image source={require('./assets/peeep.png')} style={styles.logo} />
        </View>
        <Text style={styles.subHeaderText}>Select a suitable time for your interview</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {dictionary.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => handleItemPress(item)}
            >
              <Text style={styles.itemDay}>{item.day}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
              <Text style={styles.itemTime}>{item.time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/*<TouchableOpacity style={styles.submitButton} onPress={() => console.log('Submit button pressed')}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>*/}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    height:150,
    backgroundColor: '#FDFAED',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  logo: {
    width: 40,
    height: 40,
    top: -20,
  },
  welcomeText: {
    color: '#751130',
    fontSize: 30,
    marginLeft: 10,
    top:20,
    fontFamily: 'CopenhagenGrotesk',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  itemContainer: {
    backgroundColor: '#F7F0D3',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
    width:'80%',
    height: 62,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDay: {
    color: '#751130',
    fontSize:20,
    fontFamily: 'CopenhagenGrotesk',
  },
  itemDate: {
    color: '#751130',
    fontSize: 19,
    fontFamily: 'CopenhagenGrotesk',
  },
  itemTime: {
    color: '#751130',
    fontSize: 20,
    fontFamily: 'CopenhagenGrotesk',
  },
  /*submitButton: {
    backgroundColor: '#0A4165',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 200,
    borderRadius: 13,
    marginHorizontal: 30,
    
  },
  submitText: {
    color: '#FDFAED',
    fontSize: 20,
    fontFamily: 'CopenhagenGrotesk',
  },*/
  subHeaderText: {
    color: '#F7F0D3',
    fontSize: 24,
    marginTop: 25,
    fontFamily: 'CopenhagenGrotesk',
    textAlign: 'center',
  },
});

export default InterviewSystem;