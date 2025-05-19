// import { Link } from 'expo-router';
// import React from 'react';
// import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';

// export default function CompanyComparisonScreen() {
//     const comparisonData = [
//         {
//             name: 'Tesla',
//             marketCap: '$583B',
//             peRatio: 75.6,
//             dividendYield: 'N/A',
//             badgeColor: 'bg-[#E0F7FA]',
//         },
//         {
//             name: 'Apple',
//             marketCap: '$2.9T',
//             peRatio: 28.6,
//             dividendYield: '0.5%',
//             badgeColor: 'bg-[#FFF3E0]',
//         },
//         {
//             name: 'Microsoft',
//             marketCap: '$2.3T',
//             peRatio: 34.2,
//             dividendYield: '1.0%',
//             badgeColor: 'bg-[#E3F2FD]',
//         },
//         {
//             name: 'Amazon',
//             marketCap: '$1.3T',
//             peRatio: 64.4,
//             dividendYield: 'N/A',
//             badgeColor: 'bg-[#FCE4EC]',
//         },
//         {
//             name: 'Meta',
//             marketCap: '$744B',
//             peRatio: 23.1,
//             dividendYield: 'N/A',
//             badgeColor: 'bg-[#F3E5F5]',
//         },
//     ];

//     // Derived Stats
//     const totalMarketCap = '$7.83T'; // simplified for display
//     const avgPERatio =
//         (comparisonData.reduce((sum, c) => sum + c.peRatio, 0) / comparisonData.length).toFixed(1);

//     return (
//         <SafeAreaView className="flex-1 bg-[#F5F7FA]">
//             <ScrollView className="p-5" showsVerticalScrollIndicator={false}>
//                 {/* Header */}
//                 <View className="flex-row justify-between items-center mb-6">
//                     <Text className="text-3xl font-bold text-gray-800">Compare Companies</Text>
//                     <Link href="/">
//                         <Text className="text-indigo-600 underline">← Home</Text>
//                     </Link>
//                 </View>

//                 {/* Banner */}
//                 <View className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 p-6 rounded-3xl mb-6 shadow-lg flex-row items-center space-x-4">
//                     <Image
//                         source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png' }}
//                         className="w-12 h-12"
//                     />
//                     <View>
//                         <Text className="text-black font-semibold text-lg">Top Tech Companies</Text>
//                         <Text className="text-black text-sm mt-1">Explore financial insights & performance</Text>
//                     </View>
//                 </View>

//                 {/* 📈 Summary Stats */}
//                 <View className="bg-white p-5 rounded-3xl shadow-md mb-6">
//                     <Text className="text-lg font-semibold text-black mb-3">📊 Summary Stats</Text>
//                     <View className="flex-row justify-between mb-2">
//                         <Text className="text-black">Total Market Cap:</Text>
//                         <Text className="font-bold text-black">{totalMarketCap}</Text>
//                     </View>

//                     <View className="flex-row justify-between">
//                         <Text className="text-gray-600">Average P/E Ratio:</Text>
//                         <Text className="font-bold text-gray-800">{avgPERatio}</Text>
//                     </View>
//                 </View>

//                 {/* 📉 Graph Preview */}
//                 <View className="bg-[#D9E8FC] p-5 rounded-3xl shadow-md mb-6">
//                     <Text className="text-indigo-800 text-lg font-semibold mb-2">
//                         📉 Market Movement
//                     </Text>
//                     <Text className="text-sm text-gray-700 mb-3">
//                         Visualize how tech giants are trending over the week.
//                     </Text>

//                     <Image
//                         source={require('../assets/images/bar-graph.png')}
//                         className="w-full h-48 rounded-xl"
//                     />
//                 </View>


//                 {/* 🏆 Top Performer */}
//                 <View className="bg-[#FFF1D6] p-5 rounded-2xl shadow-sm mb-6">
//                     <Text className="text-orange-800 font-semibold mb-1">🏆 Today’s Top Performer</Text>
//                     <Text className="text-gray-800 text-sm">
//                         Tesla shows the highest P/E ratio, indicating strong investor confidence in future growth.
//                     </Text>
//                 </View>

//                 {/* 🧾 Company Cards */}
//                 <Text className="text-xl font-bold text-gray-800 mb-4">🧾 Details</Text>
//                 <View className="flex flex-wrap flex-row justify-between">
//                     {comparisonData.map((company, index) => (
//                         <View
//                             key={index}
//                             className={`w-[48%] mb-4 p-4 rounded-2xl ${company.badgeColor} shadow-md`}
//                         >
//                             <Text className="text-gray-800 text-lg font-semibold mb-1">{company.name}</Text>
//                             <Text className="text-gray-700 text-sm">Market Cap: {company.marketCap}</Text>
//                             <Text className="text-gray-700 text-sm mt-1">P/E Ratio: {company.peRatio}</Text>
//                             <Text className="text-gray-700 text-sm mt-1">Dividend Yield: {company.dividendYield}</Text>
//                         </View>
//                     ))}
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      console.error('Failed to save tasks');
    }
  };

  const loadTasks = async () => {
    try {
      const stored = await AsyncStorage.getItem('tasks');
      if (stored) setTasks(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to load tasks');
    }
  };

  const addTask = () => {
    if (!input.trim()) {
      Alert.alert("⚠️ Empty Task", "Please enter a task before adding.");
      return;
    }
    const newTask: Task = {
      id: Date.now().toString(),
      title: input,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setInput('');
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    Alert.alert('🗑️ Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        onPress: () => setTasks(tasks.filter(task => task.id !== id)),
        style: 'destructive'
      }
    ]);
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View className="flex-row items-center justify-between bg-violet-100 px-4 py-3 mb-2 rounded-xl shadow-sm">
      <TouchableOpacity onPress={() => toggleComplete(item.id)} className="flex-1">
        <Text className={`text-base font-medium ${item.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {item.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text className="text-red-500 font-bold text-lg">✖️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 items-center justify-start">
      <Text className="text-3xl font-extrabold text-purple-700 mb-5">🎯 My Tasks</Text>

      <View className="w-full bg-white p-5 rounded-2xl shadow-lg">
        <View className="flex-row items-center mb-4">
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Enter new task"
            className="flex-1 bg-gray-100 p-3 rounded-xl mr-2 text-base"
          />
          <TouchableOpacity onPress={addTask} className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
            <Text className="text-black font-bold text-sm">+ Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text className="text-center text-gray-400 mt-4">No tasks yet</Text>}
        />
      </View>
    </View>
  );
};

export default TaskManager;
