// import { Link } from 'expo-router';
// import React from 'react';
// import { View, Text, ScrollView, Pressable, SafeAreaView } from 'react-native';

// export default function HomeScreen() {
//   const analysisScore = 85;

//   return (
//     <SafeAreaView className="flex-1 bg-gray-950">
//       <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
        
//         {/* App Branding */}
//         <View className="mb-8">
//           <Text className="text-4xl font-bold text-white mb-2">🚀 FinanceAgent</Text>
//           <Text className="text-gray-400 text-base">
//             Your AI-powered financial companion — track markets, compare companies, and get expert insights in one place.
//           </Text>
//         </View>

//         {/* Confidence Score */}
//         <View className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-3xl mb-6 shadow-xl">
//           <Text className="text-white text-lg font-medium mb-2">AI Confidence Score</Text>
//           <Text className="text-white text-5xl font-extrabold">{analysisScore}%</Text>
//           <View className="h-3 bg-purple-300/30 rounded-full mt-4">
//             <View
//               className="h-3 bg-white rounded-full"
//               style={{ width: `${analysisScore}%` }}
//             />
//           </View>
//           <Text className="text-white/80 text-sm mt-2">Based on real-time market analysis</Text>
//         </View>

//         {/* App Features */}
//         <Text className="text-white text-2xl font-bold mb-4">✨ Explore Features</Text>
//         <View className="grid grid-cols-2 gap-4 mb-8">
//           {[
//             { title: '📈 Market Overview', href: '/market', bg: 'bg-pink-600' },
//             { title: '📊 Compare Companies', href: '/company', bg: 'bg-yellow-500' },
//             { title: '🤖 Ask Analyst', href: '/ask', bg: 'bg-emerald-500' },
//             { title: '📰 Latest News', href: '/news', bg: 'bg-blue-600' },
//             // { title: '📰 Latest News', href: '/news', bg: 'bg-blue-600' },
//             // { title: '📰 Latest News', href: '/news', bg: 'bg-blue-600' },
//             // { title: '📰 Latest News', href: '/news', bg: 'bg-blue-600' },
//             // { title: '📰 Latest News', href: '/news', bg: 'bg-blue-600' },
//             // { title: '📰 Latest News', href: '/news', bg: 'bg-blue-600' },
//             // { title: '📰 Latest News', href: '/news', bg: 'bg-blue-600' },
//             // { title: '📰 Latest News', href: '/news', bg: 'bg-blue-600' },

//           ].map((item, i) => (
//             <Link href={item.href} asChild key={i}>
//               <Pressable className={`p-5 rounded-2xl ${item.bg} h-28 justify-center items-center shadow-md`}>
//                 <Text className="text-white text-md font-semibold text-center">
//                   {item.title}
//                 </Text>
//               </Pressable>
//             </Link>
//           ))}
//         </View>

//         {/* Insight Section */}
//         <View className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-3xl shadow-md mb-8">
//           <Text className="text-xl font-bold text-indigo-300 mb-2">🧠 Today’s Insight</Text>
//           <Text className="text-gray-300">
//             Tesla leads Q1 earnings with a 25% YoY growth, disrupting traditional auto markets again. 💥
//           </Text>
//         </View>

//         {/* Footer Navigation */}
//         <Text className="text-white text-lg font-semibold mb-3">🔗 Other Pages</Text>
//         <View className="flex-row flex-wrap gap-3">
//           {[
//             { title: 'Home', href: '/' },
//             { title: 'Market', href: '/market' },
//             { title: 'Companies', href: '/company' },
//             { title: 'Ask Analyst', href: '/ask' },
//             { title: 'News', href: '/news' },
//             { title: 'About', href: '/about' },
//           ].map((link, i) => (
//             <Link key={i} href={link.href} asChild>
//               <Pressable className="bg-indigo-700 px-4 py-2 rounded-full">
//                 <Text className="text-white text-sm">{link.title}</Text>
//               </Pressable>
//             </Link>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Pressable, SafeAreaView, TextInput, Image } from 'react-native';

export default function HomeScreen() {
  const analysisScore = 85;

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FA]">
      <ScrollView className="px-5 pt-10" showsVerticalScrollIndicator={false}>
        
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
        <View className="mb-6">
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
        <View className="bg-[#D9E8FC] p-6 rounded-3xl mb-6 shadow-md">
          <Text className="text-indigo-800 text-lg font-semibold mb-2">AI Confidence Score</Text>
          <Text className="text-indigo-900 text-4xl font-extrabold">{analysisScore}%</Text>
          <View className="h-2 bg-indigo-300/30 rounded-full mt-4">
            <View
              className="h-2 bg-indigo-700 rounded-full"
              style={{ width: `${analysisScore}%` }}
            />
          </View>
          <Text className="text-indigo-700 text-xs mt-2">Based on real-time market analysis</Text>
        </View>

        {/* Feature Cards */}
        <Text className="text-gray-800 text-xl font-bold mb-4">Explore Features</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8">
          {[
            { title: 'Market Overview', bg: '#FFD4E5', icon: '📈', href: '/market' },
            { title: 'Compare Companies', bg: '#CDE7FF', icon: '📊', href: '/company' },
            { title: 'Ask Analyst', bg: '#DEF9EC', icon: '🤖', href: '/ask' },
            { title: 'Latest News', bg: '#E1D9FF', icon: '📰', href: '/news' },
          ].map((item, i) => (
            <Link href={item.href} asChild key={i}>
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

        {/* Insight Card */}
        <View className="bg-[#FFF1D6] p-5 rounded-2xl shadow-sm mb-8">
          <Text className="text-orange-800 font-semibold mb-1">Today’s Insight</Text>
          <Text className="text-gray-800 text-sm">
            Tesla leads Q1 earnings with 25% YoY growth — disrupting the auto sector again!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
