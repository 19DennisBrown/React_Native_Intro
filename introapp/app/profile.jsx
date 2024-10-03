
import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-green-300" >
      <Text>PRofile</Text>
      <Link href="/" className='m-4 text-red-500' >back</Link>
    </View>
  )
}

export default Profile

