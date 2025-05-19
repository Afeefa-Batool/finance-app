import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Pressable, SafeAreaView, TextInput, Image } from 'react-native';

export default function HomeScreen() {
  // const analysisScore = 9;

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FA]">
      <ScrollView className="px-5 pt-5" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="flex-row justify-between items-center mb-5">
          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            className="w-10 h-10 rounded-full"
          />
          <View>
            <Text className="text-xs text-gray-500">Current Location</Text>
            <Text className="text-sm font-semibold text-indigo-600">New York</Text>
          </View>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827392.png' }}
            className="w-5 h-5"
          />
        </View>

        {/* Welcome + Search */}
        <View className="mb-4">
          <Text className="text-3xl font-bold text-gray-800 mb-2">Hello, Jhon!</Text>
          <View className="bg-white rounded-2xl px-4 py-3 shadow-sm flex-row items-center">
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/622/622669.png' }}
              className="w-5 h-5 mr-3 opacity-40"
            />
            <TextInput
              placeholder="Search features, insights..."
              placeholderTextColor="#999"
              className="flex-1 text-base text-gray-800"
            />
          </View>
        </View>

        {/* Score Card */}
        {/* <View className="bg-[#D9E8FC] p-6 rounded-2xl mb-6 shadow-md">
          <Text className="text-indigo-800 text-lg font-semibold mb-2">AI Confidence Score</Text>
          <Text className="text-indigo-900 text-4xl font-extrabold">{analysisScore}%</Text>
          <View className="h-2 bg-indigo-300/30 rounded-full mt-4">
            <View
              className="h-2 bg-indigo-700 rounded-full"
              style={{ width: `${analysisScore}%` }}
            />
          </View>
          <Text className="text-indigo-700 text-xs mt-2">Based on real-time market analysis</Text>
        </View> */}

        {/* Feature Cards */}
        <Text className="text-gray-800 text-xl font-bold mb-4">Explore Features</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8">
          {[
            // { title: 'Market Overview', bg: '#FFD4E5', icon: '📈', href: '/market' },
                        { title: 'Products', bg: '#FFD4E5', icon: '📈', href: '/products' },

            // { title: 'Compare Companies', bg: '#CDE7FF', icon: '📊', href: '/company' },
                        { title: 'ToDo App', bg: '#CDE7FF', icon: '📊', href: '/todo' },

            { title: 'Ask Analyst', bg: '#DEF9EC', icon: '🤖', href: '/ask' },
            // { title: 'Latest News', bg: '#E1D9FF', icon: '📰', href: '/news' },
                        { title: 'Pick Gallery', bg: '#E1D9FF', icon: '📰', href: '/pickGallery' },

          ].map((item) => (
            <Link href={item.href} asChild key={item.href  }>
              <Pressable
                style={{ backgroundColor: item.bg }}
                className="w-40 mr-4 p-5 rounded-2xl shadow-md"
              >
                <Text className="text-3xl mb-2">{item.icon}</Text>
                <Text className="text-sm font-semibold text-gray-800">{item.title}</Text>
              </Pressable>
            </Link>
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}
