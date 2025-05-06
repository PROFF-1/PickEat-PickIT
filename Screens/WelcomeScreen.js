import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomButton from '../Components/CustomButton'
import SVGComponent from '../Components/Svg.js'
import SVGComponentLogo from '../Components/SvgLogo.js'

export default function WelcomeScreen({navigation}) {


  return (
    <View className='flex-1 bg-green-500'>
      <SVGComponentLogo style={{position: 'absolute', top: 57,left:256, zIndex: 100}}/>
      <SVGComponent />
      <CustomButton props='absolute bottom-24 left-14 z-10' onPress={
        ()=>navigation.navigate('SignUp')
      } title={'Get Started'}/>
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

