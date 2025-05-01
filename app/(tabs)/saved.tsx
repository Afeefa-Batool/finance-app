// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const saved = () => {
//   return (
//     <View>
//       <Text>saved</Text>
//     </View>
//   )
// }

// export default saved

// const styles = StyleSheet.create({})

import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, Pressable } from 'react-native';

export default function SavedTabScreen() {
  const savedItems = [
    {
      type: 'Company',
      title: 'Tesla Inc.',
      subtitle: 'Market Cap: $583B | P/E: 75.6',
      icon: '🚗',
      bg: '#E8F5E9',
    },
    {
      type: 'Insight',
      title: 'Tech Stocks Rally in Q1',
      subtitle: 'AI-led boom impacts NASDAQ',
      icon: '📊',
      bg: '#FFF3E0',
    },
    {
      type: 'Article',
      title: 'How to Diversify Your Portfolio',
      subtitle: 'Read time: 4 mins',
      icon: '📰',
      bg: '#E3F2FD',
    },
    {
      type: 'Stock',
      title: 'Apple Inc.',
      subtitle: 'Dividend Yield: 0.5% | P/E: 28.6',
      icon: '🍎',
      bg: '#F3E5F5',
    },
    {
      type: 'Report',
      title: 'Q2 Financial Overview',
      subtitle: 'Detailed report on S&P 500 trends',
      icon: '📑',
      bg: '#FBE9E7',
    },
    {
      type: 'Podcast',
      title: 'Market Moves Today',
      subtitle: '15-min finance summary by experts',
      icon: '🎧',
      bg: '#E1F5FE',
    },
    {
      type: 'Video',
      title: 'Crypto Crash Explained',
      subtitle: '2M views • 10 mins',
      icon: '🎥',
      bg: '#FFF8E1',
    },
    {
      type: 'Currency Watch',
      title: 'USD to EUR Trends',
      subtitle: '1 USD = 0.91 EUR | Up 0.3%',
      icon: '💱',
      bg: '#F1F8E9',
    },
    {
      type: 'ETF',
      title: 'Vanguard Total Stock Market',
      subtitle: 'Expense Ratio: 0.03%',
      icon: '📦',
      bg: '#ECEFF1',
    },
    {
      type: 'Bookmark',
      title: 'Beginner’s Guide to Investing',
      subtitle: 'Read later',
      icon: '🔖',
      bg: '#FFEBEE',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FA]">
      <ScrollView className="px-5 pt-10" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text className="text-3xl font-bold text-gray-800 mb-5">🔖 Saved</Text>

        {/* Saved Cards */}
        {savedItems.map((item, i) => (
          <View
            key={i}
            className="flex-row items-center p-4 rounded-2xl mb-4 shadow-sm"
            style={{ backgroundColor: item.bg }}
          >
            <Text className="text-3xl mr-4">{item.icon}</Text>
            <View className="flex-1">
              <Text className="text-gray-800 font-semibold">{item.title}</Text>
              <Text className="text-gray-500 text-sm">{item.subtitle}</Text>
            </View>
            <Pressable className="px-3 py-1 rounded-full bg-white border border-gray-300 ml-2">
              <Text className="text-xs text-gray-600">Unsave</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
