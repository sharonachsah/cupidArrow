import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const interests = [
  'Reading', 'Photography', 'Gaming', 'Music', 'Travel',
  'Painting', 'Politics', 'Charity', 'Cooking', 'Pets',
  'Sports', 'Fashion'
];

export default function InterestScreen() {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else if (selectedInterests.length < 3) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Up To 3 Interests</Text>
      <View style={styles.interestsContainer}>
        {interests.map((interest, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.interestButton,
              selectedInterests.includes(interest) && styles.selectedInterestButton
            ]}
            onPress={() => toggleInterest(interest)}
          >
            <Text style={styles.interestText}>{interest}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={
        styles.button
      } onPress={() => console.log('Selected Interests:', selectedInterests)}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      {/* <ImageBackground source={require('../assets/wave5.svg')} style={{ justifyContent: 'flex-end' }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE6EB',
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  interestButton: {
    backgroundColor: '#FFD1D8',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  selectedInterestButton: {
    backgroundColor: '#FF5A5F',
  },
  interestText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

