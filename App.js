import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './Navigation/AppStack';

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <AppStack />
      <StatusBar style="auto" />
    </View>
  );
}


