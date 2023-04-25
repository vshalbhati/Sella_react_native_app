import { View, Text } from 'react-native'
import React from 'react'

const Verification = ({navigation, route}) => {

    const {userdata} = route.params;
    console.log('from verification page ', userdata[0]?.verificationCode);
  return (
    <View>
      <Text>Verification</Text>
    </View>
  )
}

export default Verification