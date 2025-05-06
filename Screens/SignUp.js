import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React,{useState} from 'react'
import { CountryPicker } from 'react-native-country-codes-picker'
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../Components/CustomButton'
import SVGComponentLogo from '../Components/SvgLogo';
import SVGComponentTitle from '../Components/SvgTitle';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker';

export default function SignUp({navigation}) {
  const [selected, setSelected] = useState('+91');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView className='flex-1 bg-white items-start justify-start'>
      <SVGComponentLogo style={{position:'absolute', top: 64, left:99}}/>
      <SVGComponentTitle style={{position:'absolute', top: 216, left:120}}/>
      <View className='w-full h-20 flex flex-row items-center justify-center absolute top-1/2 px-5'>
      {/*
        <TouchableOpacity className='w-[100] h-12 bg-primary rounded-lg items-center justify-between flex flex-row mr-[10] pl-[15] pr-[10]'>
          <Text>{countryCode}</Text>
          <TouchableOpacity onPress={()=>setShow(true)}>
            <Image source={require('../assets/image.png')} className='w-6 h-6'/>
          </TouchableOpacity>
        </TouchableOpacity>
        <TextInput
          placeholder='Phone number'
          placeholderTextColor='black'
          className='w-[230] h-12 rounded-lg pl-4 bg-primary'
        />
        */}
        {/*
           <CountryPicker
        show={show}
        lang={'cz'}
        style={{
            // Styles for whole modal [View]
            modal: {
                height: 500,
                backgroundColor: ''
            },
            // Styles for modal backdrop [View]
            backdrop: {
            
            },
            // Styles for bottom input line [View]
            line: {
            
            },
            // Styles for list of countries [FlatList]
            itemsList: {
            
            },
            // Styles for country button [TouchableOpacity]
            countryButtonStyles: {
                  height: 60
            },
            // Styles for search message [Text]
            searchMessageText: {

            },
            // Styles for search message container [View]
            countryMessageContainer: {
            
            },
            // Flag styles [Text]
            flag: {

            },
            // Dial code styles [Text]
            dialCode: {

            },
            // Country name styles [Text]
            countryName: {

            }
        }}
        pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
    }}
/>*/}

        <CountryCodeDropdownPicker 
            selected={selected} 
            setSelected={setSelected}
            setCountryDetails={setCountry} 
            phone={phone} 
            setPhone={setPhone} 
            countryCodeTextStyles={{fontSize: 15, marginRight:10}}
            countryCodeContainerStyles={{width: 100, height: 55, borderRadius: 10, backgroundColor: '#F3F4F6', marginRight: 5}}
            countryCodeTextInputStyles={{fontSize: 15, color: 'black'}}
            phoneStyles={{width: 230, height: 55, borderRadius: 5, backgroundColor: '#F3F4F6', marginRight: 10}}
          />
      </View>
      
      <CustomButton props='absolute bottom-24 left-14 z-10' title={'Continue'}/>
      <View className='absolute bottom-[147] items-center justify-center'>
        <Text className='text-xs text-center pb-[19]'>By continuing you agree to our {''}<Text className='text-green-700'>Terms</Text>{''} and {''}<Text className='text-green-700'>condition</Text> and the <Text className='text-green-700'>privacy Policy</Text></Text>
      </View>
      
    </SafeAreaView>

  )
}