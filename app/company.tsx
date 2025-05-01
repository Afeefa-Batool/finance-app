// import { Link } from 'expo-router';
// import React from 'react';
// import { View, Text, ScrollView, SafeAreaView } from 'react-native';

// export default function CompanyComparisonScreen() {
//   const comparisonData = [
//     {
//       name: 'Tesla',
//       marketCap: '$583B',
//       peRatio: '75.6',
//       dividendYield: 'N/A',
//       color: 'bg-green-400',
//     },
//     {
//       name: 'Apple',
//       marketCap: '$2.9T',
//       peRatio: '28.6',
//       dividendYield: '0.5%',
//       color: 'bg-red-400',
//     },
//     {
//       name: 'Microsoft',
//       marketCap: '$2.3T',
//       peRatio: '34.2',
//       dividendYield: '1.0%',
//       color: 'bg-blue-400',
//     },
//     {
//       name: 'Amazon',
//       marketCap: '$1.3T',
//       peRatio: '64.4',
//       dividendYield: 'N/A',
//       color: 'bg-yellow-400',
//     },
//     {
//       name: 'Meta',
//       marketCap: '$744B',
//       peRatio: '23.1',
//       dividendYield: 'N/A',
//       color: 'bg-purple-400',
//     },
//   ];

//   return (
//     <SafeAreaView className="flex-1 bg-gray-950">
//       <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View className="flex-row justify-between items-center mb-6">
//           <Text className="text-3xl font-semibold text-white">Company Comparison</Text>
//           <Link href="/">
//             <Text className="text-indigo-400 underline">← Home</Text>
//           </Link>
//         </View>

//         {/* Overview */}
//         <View className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-3xl mb-6 shadow-xl">
//           <Text className="text-white text-lg font-semibold">Compare Top Tech Companies</Text>
//           <Text className="text-indigo-100 text-4xl font-bold mt-2">📊 Powerful Insights</Text>
//         </View>

//         {/* Comparison Cards */}
//         <View className="grid grid-cols-2 gap-5">
//           {comparisonData.map((company, index) => (
//             <View
//               key={index}
//               className={`p-6 rounded-2xl shadow-lg ${company.color} mb-5`}
//               style={{ elevation: 8 }}
//             >
//               <Text className="text-white text-xl font-semibold">{company.name}</Text>
//               <Text className="text-white text-md mt-2">Market Cap: {company.marketCap}</Text>
//               <Text className="text-white text-md mt-2">P/E Ratio: {company.peRatio}</Text>
//               <Text className="text-white text-md mt-2">Dividend Yield: {company.dividendYield}</Text>
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

export default function CompanyComparisonScreen() {
    const comparisonData = [
        {
            name: 'Tesla',
            marketCap: '$583B',
            peRatio: 75.6,
            dividendYield: 'N/A',
            badgeColor: 'bg-[#E0F7FA]',
        },
        {
            name: 'Apple',
            marketCap: '$2.9T',
            peRatio: 28.6,
            dividendYield: '0.5%',
            badgeColor: 'bg-[#FFF3E0]',
        },
        {
            name: 'Microsoft',
            marketCap: '$2.3T',
            peRatio: 34.2,
            dividendYield: '1.0%',
            badgeColor: 'bg-[#E3F2FD]',
        },
        {
            name: 'Amazon',
            marketCap: '$1.3T',
            peRatio: 64.4,
            dividendYield: 'N/A',
            badgeColor: 'bg-[#FCE4EC]',
        },
        {
            name: 'Meta',
            marketCap: '$744B',
            peRatio: 23.1,
            dividendYield: 'N/A',
            badgeColor: 'bg-[#F3E5F5]',
        },
    ];

    // Derived Stats
    const totalMarketCap = '$7.83T'; // simplified for display
    const avgPERatio =
        (comparisonData.reduce((sum, c) => sum + c.peRatio, 0) / comparisonData.length).toFixed(1);

    return (
        <SafeAreaView className="flex-1 bg-[#F5F7FA]">
            <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-3xl font-bold text-gray-800">Compare Companies</Text>
                    <Link href="/">
                        <Text className="text-indigo-600 underline">← Home</Text>
                    </Link>
                </View>

                {/* Banner */}
                <View className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 p-6 rounded-3xl mb-6 shadow-lg flex-row items-center space-x-4">
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png' }}
                        className="w-12 h-12"
                    />
                    <View>
                        <Text className="text-black font-semibold text-lg">Top Tech Companies</Text>
                        <Text className="text-black text-sm mt-1">Explore financial insights & performance</Text>
                    </View>
                </View>

                {/* 📈 Summary Stats */}
                <View className="bg-white p-5 rounded-3xl shadow-md mb-6">
                    <Text className="text-lg font-semibold text-black mb-3">📊 Summary Stats</Text>
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-black">Total Market Cap:</Text>
                        <Text className="font-bold text-black">{totalMarketCap}</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-600">Average P/E Ratio:</Text>
                        <Text className="font-bold text-gray-800">{avgPERatio}</Text>
                    </View>
                </View>

                {/* 📉 Graph Preview */}
                <View className="bg-[#D9E8FC] p-5 rounded-3xl shadow-md mb-6">
                    <Text className="text-indigo-800 text-lg font-semibold mb-2">
                        📉 Market Movement
                    </Text>
                    <Text className="text-sm text-gray-700 mb-3">
                        Visualize how tech giants are trending over the week.
                    </Text>

                    <Image
                        source={require('../assets/images/bar-graph.png')}
                        className="w-full h-48 rounded-xl"
                    />
                </View>


                {/* 🏆 Top Performer */}
                <View className="bg-[#FFF1D6] p-5 rounded-2xl shadow-sm mb-6">
                    <Text className="text-orange-800 font-semibold mb-1">🏆 Today’s Top Performer</Text>
                    <Text className="text-gray-800 text-sm">
                        Tesla shows the highest P/E ratio, indicating strong investor confidence in future growth.
                    </Text>
                </View>

                {/* 🧾 Company Cards */}
                <Text className="text-xl font-bold text-gray-800 mb-4">🧾 Details</Text>
                <View className="flex flex-wrap flex-row justify-between">
                    {comparisonData.map((company, index) => (
                        <View
                            key={index}
                            className={`w-[48%] mb-4 p-4 rounded-2xl ${company.badgeColor} shadow-md`}
                        >
                            <Text className="text-gray-800 text-lg font-semibold mb-1">{company.name}</Text>
                            <Text className="text-gray-700 text-sm">Market Cap: {company.marketCap}</Text>
                            <Text className="text-gray-700 text-sm mt-1">P/E Ratio: {company.peRatio}</Text>
                            <Text className="text-gray-700 text-sm mt-1">Dividend Yield: {company.dividendYield}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
