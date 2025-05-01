import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function UserScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>User ID: {id}</Text>
    </View>
  );
}
