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
