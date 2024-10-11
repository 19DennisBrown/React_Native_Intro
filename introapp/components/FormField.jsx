
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`${otherStyles} space-y-2`}>
      <Text classname="text-xl text-white font-pmedium">
        {title}
      </Text>
      <View className="border border-black-500 rounded-2xl w-full h-12 px-4 bg-gray-500 focus:border-orange-400">

        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor='text-red-300'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'password' && !showPassword }
        />

        { title === 'password' && (
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image
              source={ !showPassword ? icons.eye : icons.eyehide }
              className="text-white w-6 h-6 "
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField