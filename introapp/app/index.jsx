

import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-yellow-400" >
      <Text className="3xl font-pblack" >INDEX</Text>
      <StatusBar style='auto' />
      <Link href='/profile' className='text-orange-500' >go to profile</Link>
    </View>
  )
}

export default Index

