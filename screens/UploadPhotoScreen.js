import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadPhotoScreen() {
  const [images, setImages] = useState([null, null, null, null, null]);

  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = [...images];
      newImages[index] = result.assets[0].uri;
      setImages(newImages);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upload Your Photo</Text>
      <Text style={styles.subLabel}>We'd love to see you. Upload a photo for your dating journey.</Text>
      <View style={styles.photosContainer}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} style={styles.photoWrapper} onPress={() => pickImage(index)}>
            {image ? (
              <Image source={{ uri: image }} style={styles.photo} />
            ) : (
              <View style={styles.addPhoto}>
                <Text style={styles.addPhotoText}>+</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Photos uploaded:', images)}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      {/* <ImageBackground source={require('../assets/wave6.svg')} style={{ justifyContent: 'flex-end' }} /> */}
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
    fontSize: 24,
    marginBottom: 10,
  },
  subLabel: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  photoWrapper: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  addPhoto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD1D8',
  },
  addPhotoText: {
    fontSize: 36,
    color: '#FF5A5F',
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
