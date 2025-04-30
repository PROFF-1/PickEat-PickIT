import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CustomButton({props, onPress}) {
  return (
    <TouchableOpacity className={`w-[300] h-[55] bg-green-700 rounded-lg items-center justify-center ${props}`} onPress={onPress}>
      <Text className='text-sm font-medium text-white'>Get Started</Text>
    </TouchableOpacity>
  )
}

