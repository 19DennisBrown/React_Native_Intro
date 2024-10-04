

import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'

const Index = () => {
  return (
    <SafeAreaView className="bg-blue-900 h-full" >
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-16">
          {/* logo */}
          <Image 
            source={images.logo}
            className="w-[170px] h-[84px]"
            resizeMode='contain'
          />
          {/* landing page image */}
          <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[300px] "
            resizeMode='contain'
          />
          {/* Text and button view */}
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-extrabold text-center" >
              Hawawii presents to You,{'   '}
              <Text className="text-secondary  text-[42px]">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[106px] h-[15px] absolute -bottom-3 -left-[-90px]"
              resizeMode='contain'
            />
          </View>
          <Text  
            className="text-center mt-5 text-gray-100 text-lg font-pregular"
          >
            Where people 'DO IT NOW'
          </Text>
          {/* Custom button component */}
          <CustomButton
            title='Continue with Email'
            handlePress={()=> router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#1e3a8a' style='light'/>
    </SafeAreaView>
  )
}

export default Index

