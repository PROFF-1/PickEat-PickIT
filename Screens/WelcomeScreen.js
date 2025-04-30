import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomButton from '../Components/CustomButton'
import SVGComponent from '../Components/Svg.js'

export default function WelcomeScreen({navigation}) {


  return (
    <View className='flex-1 bg-green-500'>
      <Image source={require('../assets/logo.png')} className='absolute  right-2 top-24 z-10'/>
      <SVGComponent/>
      <CustomButton props='absolute bottom-24 left-14 z-10' onPress={
        ()=>navigation.navigate('SignUp')
      }/>
      <View className='absolute bottom-0 top-0 bg-black/20  flex-1 w-full'>
        <Text className='text-3xl font-extrabold text-white absolute bottom-[228] left-8'>
          Taking Orders For
        </Text>
        <Text className='text-3xl font-extrabold text-white absolute bottom-[190] left-8'>
          Fast Delieveries
        </Text>
      </View>
    </View>
  )
}

