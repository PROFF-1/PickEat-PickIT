import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function SignUp({navigation}) {
  return (
    <View className='flex-1 bg-green-500 items-center justify-center'>

      <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
        <Text>back</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({})