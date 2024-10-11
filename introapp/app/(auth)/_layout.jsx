

import { View, Text } from 'react-native'
import {Stack} from 'expo-router'
import React from 'react'
import {StatusBar} from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name='sign-in'
          options={{
            headerShown:false //hides the top header with title of component
          }}
        />

        <Stack.Screen 
          name='sign-up'
          options={{
            headerShown:false //hides the top header with title of component
          }}
        />
      </Stack>
      <StatusBar backgroundColor='#0D47A1' style='light' />
    </>
  )
}

export default AuthLayout

