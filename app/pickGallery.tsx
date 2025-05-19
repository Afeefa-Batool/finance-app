// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const pickGallery = () => {
//   return (
//     <View>
//       <Text>pickGallery</Text>
//     </View>
//   )
// }

// export default pickGallery

// const styles = StyleSheet.create({})
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const PickGallery = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const askPermissions = async () => {
    const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
    const { status: mediaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (cameraStatus !== 'granted' || mediaStatus !== 'granted') {
      Alert.alert('Permission Denied', 'Camera or Gallery access is required.');
      return false;
    }
    return true;
  };

  const pickImageFromGallery = async () => {
    const hasPermission = await askPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const takePhotoWithCamera = async () => {
    const hasPermission = await askPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick or Take a Photo</Text>

      <View style={styles.buttonContainer}>
        <Button title="Pick from Gallery" onPress={pickImageFromGallery} color="#4CAF50" />
        <View style={{ marginTop: 10 }} />
        <Button title="Take a Photo" onPress={takePhotoWithCamera} color="#2196F3" />
      </View>

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
    </View>
  );
};

export default PickGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginTop: 20,
  },
});
