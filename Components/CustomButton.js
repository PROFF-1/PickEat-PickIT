import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CustomButton({props, onPress}) {
  return (
    <TouchableOpacity className={`w-60 h-20 bg-blue-500 rounded-full items-center justify-center ${props}`} onPress={onPress}>
      <Text className='text-3xl font-bold text-green-500'>CustomButton</Text>
    </TouchableOpacity>
  )
}

