import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState('green'); // State cho màu nền

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>{bgColor.toUpperCase()}</Text>
      
      {/* Các nút thay đổi màu */}
      <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => setBgColor('blue')}>
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={() => setBgColor('brown')}>
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => setBgColor('yellow')}>
        <Text style={styles.buttonText}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => setBgColor('red')}>
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={() => setBgColor('black')}>
        <Text style={[styles.buttonText, { color: 'white' }]}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    width: 200,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;
