import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';

const BUS_DATA = ['Bus 1', 'Bus 2', 'Bus 3', 'Bus 4', 'Bus 5', 'Bus 6'];

const App = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handleBusPress = (busName) => {
    console.log(`Pressed on ${busName}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Track Your Bus</Text>
        <Text style={styles.subtitle}>Enter your route to get started</Text>
      </View>

     
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        keyboardShouldPersistTaps="handled"
      >
  
        <View style={styles.inputContainer}>
          <Text style={styles.label}>From</Text>
          <TextInput
            style={styles.input}
            placeholder="— — — — — — — —"
            placeholderTextColor="#FFFFFF"
            value={fromLocation}
            onChangeText={setFromLocation}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>To</Text>
          <TextInput
            style={styles.input}
            placeholder="— — — — — — — —"
            placeholderTextColor="#FFFFFF"
            value={toLocation}
            onChangeText={setToLocation}
          />
        </View>

        
        <TouchableOpacity
          style={styles.busButton}
          onPress={() => console.log('Searching buses...')}
        >
          
          <View style={styles.busBody}>
            
            <View style={styles.busAccentStripe} />
            
            <View style={styles.largeWindowsArea}>
             
              <View style={styles.individualWindow} />
              <View style={styles.individualWindow} />
              <View style={styles.individualWindow} />
              <View style={styles.individualWindow} />
            </View>
            
            <Text style={styles.findButtonText}>Find Bus</Text>
          </View>

          
          <View style={styles.wheelContainer}>
             <View style={styles.wheel}><View style={styles.hubcap} /></View>
             <View style={styles.wheel}><View style={styles.hubcap} /></View>
          </View>
        </TouchableOpacity>

        
        <View style={styles.listContainer}>
          {BUS_DATA.map((busName, index) => (
            <TouchableOpacity
              key={index}
              style={styles.busItem}
              onPress={() => handleBusPress(busName)}
            >
              <Text style={styles.busItemText}>{busName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  headerContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DDE2EC',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A253A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6A7180',
    marginTop: 5,
    textAlign: 'center',
  },
  scrollContentContainer: {
    padding: 25,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A5468',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2C3E50',
    color: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#FBC02D',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 16 : 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  busButton: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
    height: 120, 
  },
  busBody: {
    width: 300, 
    height: 100, 
    backgroundColor: '#ECF0F1',
    borderRadius: 15,
    overflow: 'hidden', 
    borderWidth: 1,
    borderColor: '#B0BEC5', 
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  busAccentStripe: {
    position: 'absolute',
    top: 45, 
    left: 0,
    width: '100%',
    height: 15, 
    backgroundColor: '#3498db', 
  },
  largeWindowsArea: {
    position: 'absolute',
    top: 8, 
    left: 10,
    right: 10,
    height: 35, 
    backgroundColor: '#2C3E50', 
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  individualWindow: {
    width: 55, 
    height: 25,
    backgroundColor: 'rgba(255,255,255,0.1)', 
    borderRadius: 3,
  },
  findButtonText: {
    position: 'absolute',
    color: '#FBC02D', 
    fontSize: 22,
    fontWeight: '900',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    bottom: 10, 
  },
  wheelContainer: {
    width: 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0, 
  },
  wheel: {
    width: 45, 
    height: 45,
    backgroundColor: '#2C3E50',
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hubcap: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#bdc3c7',
  },
  listContainer: {
    marginTop: 20,
  },
  busItem: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE2EC',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  busItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A253A',
  },
});

export default App;
