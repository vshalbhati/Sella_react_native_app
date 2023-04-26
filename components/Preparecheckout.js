import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable"
import { SlideInUp } from 'react-native-reanimated'
import { COLORS } from '../constants'
import * as Progress from 'react-native-progress';


const Preparecheckout = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('delivery');
        }, 3000);
    },[]);
  return (
    <SafeAreaView style={{backgroundColor:"black", flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Animatable.Image
            source={require("../assets/images/load.gif")}
            animation={[SlideInUp, "fadeInUp"]}
            iterationCount={1}
            style={{height:"96%", width:"96%"}}
        />
        <Animatable.Text
            animation={[SlideInUp, "fadeIn"]}
            iterationCount={1}
            style={{color:COLORS.lightWhite, textAlign:"center", fontSize:"xx-large", position:"absolute"}}
        >
            Woohoooo!
        </Animatable.Text>
        <Progress.Bar size={30} color="#00CCBB" width={200} indeterminate={true}/>
    </SafeAreaView>
  )
}

export default Preparecheckout