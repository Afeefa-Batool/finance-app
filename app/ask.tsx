import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !bio) {
      Toast.show({
        type: 'error',
        text1: 'Please fill all fields 😅',
      });
      return;
    }

    setSubmitted(true);
    Toast.show({
      type: 'success',
      text1: 'Profile Submitted 🎉',
    });
  };

  return (
    <ScrollView className="flex-1 px-5 py-8 bg-white">
      <Text className="text-3xl font-bold text-purple-700 mb-6 text-center">👤 Profile Form</Text>

      <TextInput
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
        className="border border-gray-300 rounded-xl p-3 mb-4 text-base"
      />

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="border border-gray-300 rounded-xl p-3 mb-4 text-base"
      />

      <TextInput
        placeholder="Enter Bio"
        value={bio}
        onChangeText={setBio}
        multiline
        numberOfLines={4}
        className="border border-gray-300 rounded-xl p-3 mb-6 text-base"
      />

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 py-3 rounded-xl"
      >
        <Text className="text-center text-black font-bold text-lg">Submit</Text>
      </TouchableOpacity>

      {submitted && (
        <View className="mt-10 p-5 bg-violet-100 rounded-2xl shadow-md">
          <Text className="text-xl font-bold text-purple-800 mb-3">📋 Submitted Data</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="font-semibold text-gray-700">Name:</Text>
            <Text className="text-gray-900">{name}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="font-semibold text-gray-700">Email:</Text>
            <Text className="text-gray-900">{email}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-semibold text-gray-700">Bio:</Text>
            <Text className="text-gray-900">{bio}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Profile;
