// import { Link } from 'expo-router';
// import React from 'react';
// import { View, Text, ScrollView, SafeAreaView } from 'react-native';

// export default function MarketOverviewScreen() {
//   const marketData = [
//     { name: 'Tesla', price: '$173.55', change: '+2.34%', color: 'text-green-400' },
//     { name: 'Apple', price: '$185.12', change: '-1.12%', color: 'text-red-400' },
//     { name: 'Microsoft', price: '$322.21', change: '+0.75%', color: 'text-green-400' },
//     { name: 'Amazon', price: '$128.45', change: '+1.03%', color: 'text-green-400' },
//     { name: 'Meta', price: '$245.67', change: '-0.67%', color: 'text-red-400' },
//   ];

//   return (
//     <SafeAreaView className="flex-1 bg-gray-950">
//       <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View className="flex-row justify-between items-center mb-6">
//           <Text className="text-3xl font-semibold text-white">Market Overview</Text>
//           <Link href="/">
//             <Text className="text-indigo-400 underline">← Home</Text>
//           </Link>
//         </View>

//         {/* Market Summary */}
//         <View className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-5 rounded-2xl mb-6 shadow-lg">
//           <Text className="text-white text-lg font-semibold">Global Market Sentiment</Text>
//           <Text className="text-indigo-200 text-4xl font-bold mt-2">📈 Bullish</Text>
//           <Text className="text-white text-sm mt-2">
//             Major indices are showing upward trends due to positive earnings reports and tech sector growth.
//           </Text>
//         </View>

//         {/* Stock Cards */}
//         <View className="space-y-4">
//           {marketData.map((stock, index) => (
//             <View
//               key={index}
//               className="bg-gray-900 p-4 rounded-2xl shadow-md border border-gray-800"
//             >
//               <View className="flex-row justify-between">
//                 <Text className="text-white text-lg font-semibold">{stock.name}</Text>
//                 <Text className={`text-lg font-bold ${stock.color}`}>{stock.change}</Text>
//               </View>
//               <Text className="text-indigo-300 text-sm mt-1">Current Price: {stock.price}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';

export default function MarketOverviewScreen() {
  const marketData = [
    {
      name: 'Tesla',
      price: '$173.55',
      change: '+2.34%',
      changeColor: 'text-green-500',
      logo: 'https://logo.clearbit.com/tesla.com',
      time: '9:30 AM - 4:00 PM',
    },
    {
      name: 'Apple',
      price: '$185.12',
      change: '-1.12%',
      changeColor: 'text-red-500',
      logo: 'https://logo.clearbit.com/apple.com',
      time: '9:30 AM - 4:00 PM',
    },
    {
      name: 'Microsoft',
      price: '$322.21',
      change: '+0.75%',
      changeColor: 'text-green-500',
      logo: 'https://logo.clearbit.com/microsoft.com',
      time: '9:30 AM - 4:00 PM',
    },
    {
      name: 'Amazon',
      price: '$128.45',
      change: '+1.03%',
      changeColor: 'text-green-500',
      logo: 'https://logo.clearbit.com/amazon.com',
      time: '9:30 AM - 4:00 PM',
    },
    {
      name: 'Meta',
      price: '$245.67',
      change: '-0.67%',
      changeColor: 'text-red-500',
      logo: 'https://logo.clearbit.com/meta.com',
      time: '9:30 AM - 4:00 PM',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F3F6FA]">
      <ScrollView className="px-5 pt-10" showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-bold text-gray-800">📊 Market Overview</Text>
          <Link href="/">
            <Text className="text-indigo-600 font-medium">← Home</Text>
          </Link>
        </View>

        {/* Market Sentiment Card */}
        <View className="bg-indigo-100 p-5 rounded-2xl mb-6 shadow-sm">
          <Text className="text-indigo-800 font-semibold text-base">Global Sentiment</Text>
          <Text className="text-indigo-900 text-3xl font-bold mt-1">📈 Bullish</Text>
          <Text className="text-indigo-700 mt-2 text-sm">
            Positive growth in tech earnings is driving optimism across major indices.
          </Text>
        </View>

        {/* Company Cards */}
        <Text className="text-lg font-bold text-gray-700 mb-4">Top Companies</Text>
        {marketData.map((stock, index) => (
          <View
            key={index}
            className="bg-white p-4 rounded-2xl flex-row items-center justify-between mb-4 shadow-sm"
          >
            <View className="flex-row items-center">
              <Image
                source={{ uri: stock.logo }}
                className="w-12 h-12 rounded-full mr-4"
              />
              <View>
                <Text className="text-gray-800 font-semibold text-base">{stock.name}</Text>
                <Text className="text-gray-500 text-sm">{stock.time}</Text>
              </View>
            </View>
            <View className="items-end">
              <Text className="text-gray-800 font-bold text-base">{stock.price}</Text>
              <Text className={`${stock.changeColor} font-semibold text-sm`}>{stock.change}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
