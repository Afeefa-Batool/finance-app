// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const search = () => {
//   return (
//     <View>
//       <Text>search </Text>
//     </View>
//   )
// }

// export default search

// const styles = StyleSheet.create({})
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, SafeAreaView, Pressable, Dimensions } from 'react-native';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const savedItems = [
    { type: 'Company', title: 'Tesla Inc.', subtitle: 'Market Cap: $583B\nP/E: 75.6', icon: '🚗', bg: '#E8F5E9' },
    { type: 'Insight', title: 'Tech Stocks Rally', subtitle: 'AI-led boom boosts NASDAQ', icon: '📊', bg: '#FFF3E0' },
    { type: 'Article', title: 'Diversify Portfolio', subtitle: 'Read time: 4 mins', icon: '📰', bg: '#E3F2FD' },
    { type: 'Stock', title: 'Apple Inc.', subtitle: 'Yield: 0.5%\nP/E: 28.6', icon: '🍎', bg: '#F3E5F5' },
    { type: 'Report', title: 'Q2 Overview', subtitle: 'S&P 500 trend breakdown', icon: '📑', bg: '#FBE9E7' },
    { type: 'Podcast', title: 'Market Moves', subtitle: '15-min expert brief', icon: '🎧', bg: '#E1F5FE' },
    { type: 'Video', title: 'Crypto Crash', subtitle: '10-min explainer | 2M views', icon: '🎥', bg: '#FFF8E1' },
    { type: 'Currency', title: 'USD to EUR', subtitle: '1 USD = 0.91 EUR\nUp 0.3%', icon: '💱', bg: '#F1F8E9' },
    { type: 'ETF', title: 'Vanguard Total', subtitle: 'Expense Ratio: 0.03%', icon: '📦', bg: '#ECEFF1' },
    { type: 'Bookmark', title: 'Investing Guide', subtitle: 'Read later', icon: '🔖', bg: '#FFEBEE' },
  ];

  const filteredItems = savedItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 40) / 2; // padding: 20 + 20

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FA]">
      <View className="px-5 pt-10">
        <Text className="text-3xl font-bold text-gray-800 mb-4">🔍 Search</Text>
        <View className="bg-white rounded-2xl px-4 py-3 shadow-sm mb-6">
          <TextInput
            placeholder="Search articles, companies, insights..."
            placeholderTextColor="#999"
            className="text-base text-gray-800"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between">
          {filteredItems.length === 0 ? (
            <Text className="text-gray-500 text-center mt-10 w-full">No results found.</Text>
          ) : (
            filteredItems.map((item, i) => (
              <View
                key={i}
                className="mb-4 rounded-2xl shadow-sm p-4"
                style={{
                  backgroundColor: item.bg,
                  width: cardWidth,
                  marginBottom: 16,
                }}
              >
                <Text className="text-2xl mb-2">{item.icon}</Text>
                <Text className="text-gray-800 font-bold text-sm mb-1">{item.title}</Text>
                <Text className="text-gray-600 text-xs mb-2 whitespace-pre-line">{item.subtitle}</Text>
                <View className="rounded-full px-2 py-1 bg-white border border-gray-200 self-start">
                  <Text className="text-xs text-gray-600">{item.type}</Text>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
