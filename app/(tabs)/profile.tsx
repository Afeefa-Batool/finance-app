// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const profile = () => {
//   return (
//     <View>
//       <Text>profile</Text>
//     </View>
//   )
// }

// export default profile

// const styles = StyleSheet.create({})

import React from 'react';
import { View, Text, ScrollView, Image, Pressable, SafeAreaView } from 'react-native';

export default function AgentProfileScreen() {
  const stats = [
    { label: 'Clients', value: 128, icon: '👥' },
    { label: 'Portfolios', value: 42, icon: '📂' },
    { label: 'Rating', value: '4.8/5', icon: '⭐' },
  ];

  const skills = ['Wealth Planning', 'Stock Advisory', 'Risk Management', 'Crypto Analysis'];

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FA]">
      <ScrollView className="px-5 pt-10" showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View className="items-center mb-6">
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            className="w-24 h-24 rounded-full mb-3"
          />
          <Text className="text-xl font-bold text-gray-800">Ariana Bennett</Text>
          <Text className="text-sm text-gray-500">Senior Finance Consultant</Text>
          <Text className="text-xs text-indigo-600 mt-1">10+ years experience in fintech</Text>
        </View>

        {/* Badge */}
        <View className="bg-[#E0F2F1] px-4 py-2 rounded-xl self-center mb-6">
          <Text className="text-green-800 font-semibold text-sm">🌟 Top Rated Agent 2025</Text>
        </View>

        {/* Stats Section */}
        <View className="bg-white rounded-3xl shadow-md p-5 mb-6">
          <Text className="text-gray-700 font-semibold text-lg mb-3">📊 Performance</Text>
          <View className="flex-row justify-between">
            {stats.map((stat, i) => (
              <View key={i} className="items-center">
                <Text className="text-2xl font-bold text-indigo-700">{stat.icon}</Text>
                <Text className="text-lg font-bold text-gray-800 mt-1">{stat.value}</Text>
                <Text className="text-xs text-gray-500">{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Skills */}
        <Text className="text-gray-800 text-lg font-semibold mb-3">🧠 Expertise</Text>
        <View className="flex-row flex-wrap gap-2 mb-6">
          {skills.map((skill, i) => (
            <View key={i} className="bg-[#E3F2FD] px-3 py-1 rounded-full shadow-sm">
              <Text className="text-indigo-800 text-xs font-medium">{skill}</Text>
            </View>
          ))}
        </View>

        {/* Contact Button */}
        <Pressable className="bg-indigo-600 py-4 rounded-2xl shadow-md mb-10">
          <Text className="text-white text-center font-bold text-base">📞 Contact Ariana</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
