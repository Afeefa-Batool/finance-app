// import { Link } from 'expo-router';
// import React from 'react';
// import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';

// export default function MarketOverviewScreen() {
//   const marketData = [
//     {
//       name: 'Tesla',
//       price: '$173.55',
//       change: '+2.34%',
//       changeColor: 'text-green-500',
//       logo: 'https://logo.clearbit.com/tesla.com',
//       time: '9:30 AM - 4:00 PM',
//     },
//     {
//       name: 'Apple',
//       price: '$185.12',
//       change: '-1.12%',
//       changeColor: 'text-red-500',
//       logo: 'https://logo.clearbit.com/apple.com',
//       time: '9:30 AM - 4:00 PM',
//     },
//     {
//       name: 'Microsoft',
//       price: '$322.21',
//       change: '+0.75%',
//       changeColor: 'text-green-500',
//       logo: 'https://logo.clearbit.com/microsoft.com',
//       time: '9:30 AM - 4:00 PM',
//     },
//     {
//       name: 'Amazon',
//       price: '$128.45',
//       change: '+1.03%',
//       changeColor: 'text-green-500',
//       logo: 'https://logo.clearbit.com/amazon.com',
//       time: '9:30 AM - 4:00 PM',
//     },
//     {
//       name: 'Meta',
//       price: '$245.67',
//       change: '-0.67%',
//       changeColor: 'text-red-500',
//       logo: 'https://logo.clearbit.com/meta.com',
//       time: '9:30 AM - 4:00 PM',
//     },
//   ];

//   return (
//     <SafeAreaView className="flex-1 bg-[#F3F6FA]">
//       <ScrollView className="px-5 pt-10" showsVerticalScrollIndicator={false}>
        
//         {/* Header */}
//         <View className="flex-row justify-between items-center mb-6">
//           <Text className="text-2xl font-bold text-gray-800">📊 Market Overview</Text>
//           <Link href="/">
//             <Text className="text-indigo-600 font-medium">← Home</Text>
//           </Link>
//         </View>

//         {/* Market Sentiment Card */}
//         <View className="bg-indigo-100 p-5 rounded-2xl mb-6 shadow-sm">
//           <Text className="text-indigo-800 font-semibold text-base">Global Sentiment</Text>
//           <Text className="text-indigo-900 text-3xl font-bold mt-1">📈 Bullish</Text>
//           <Text className="text-indigo-700 mt-2 text-sm">
//             Positive growth in tech earnings is driving optimism across major indices.
//           </Text>
//         </View>

//         {/* Company Cards */}
//         <Text className="text-lg font-bold text-gray-700 mb-4">Top Companies</Text>
//         {marketData.map((stock, index) => (
//           <View
//             key={index}
//             className="bg-white p-4 rounded-2xl flex-row items-center justify-between mb-4 shadow-sm"
//           >
//             <View className="flex-row items-center">
//               <Image
//                 source={{ uri: stock.logo }}
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <View>
//                 <Text className="text-gray-800 font-semibold text-base">{stock.name}</Text>
//                 <Text className="text-gray-500 text-sm">{stock.time}</Text>
//               </View>
//             </View>
//             <View className="items-end">
//               <Text className="text-gray-800 font-bold text-base">{stock.price}</Text>
//               <Text className={`${stock.changeColor} font-semibold text-sm`}>{stock.change}</Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
// // =================axios==================
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="#4B5563" />
        <Text className="mt-2 text-gray-600">Loading products...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <Image
            source={{ uri: item.image }}
            className="w-full h-48 mb-2 rounded"
            resizeMode="contain"
          />
          <Text className="text-lg font-semibold mb-1" numberOfLines={1}>
            {item.title}
          </Text>
          <Text className="text-green-600 font-bold">${item.price.toFixed(2)}</Text>
        </View>
      )}
    />
  );
};

export default ProductList;
