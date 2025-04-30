import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../Components/CustomButton'

export default function WelcomeScreen({navigation}) {


  return (
    <View className='flex-1 bg-green-500'>
      <CustomButton props='absolute top-1/4 left-1/4' onPress={
        ()=>navigation.navigate('SignUp')
      }/>
    </View>
  )
}

