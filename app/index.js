import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, FlatList, ActivityIndicator, ActivityIndicatorBase, TextInput, Button, Image, StyleSheet } from 'react-native'

import { Stack, useRouter } from "expo-router";

import {COLORS, icons, images, SIZES} from '../constants';
import { Nearbyjobs, ScreenHeaderBtn, Welcome} from '../components';
import Account from "./account/Account";

const Home = () =>{
  const router = useRouter();


  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity>
              <ScreenHeaderBtn
              iconUrl={icons.menu} 
              dimension='60%'
              ></ScreenHeaderBtn>
              <TouchableOpacity style={{flex:1, backgroundColor:'transparent',height:40, width:40,position:'absolute'}} onPress={()=>console.log("BHAI LEFT DABGO")}>
              </TouchableOpacity>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension='100%' 
              />
              <TouchableOpacity style={{flex:1, backgroundColor:'transparent',height:40, width:40,position:'absolute', right:0}}>
              </TouchableOpacity>
            </TouchableOpacity>
          ),
          headerTitle: "",          
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex:1,
            padding: SIZES.medium
          }}
        >
          <Welcome />
          <Nearbyjobs />
          {/* <Account/> */}
    </View>
      </ScrollView>
    </SafeAreaView>
  )

}


export default Home;


// import { useState } from "react";
// import { View, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
// import { Stack, useRouter } from "expo-router";

// import {COLORS, icons, images, SIZES} from '../constants';
// import { Nearbyjobs, ScreenHeaderBtn, Welcome} from '../components';

// const Home = () =>{
// const router = useRouter();

//     return (
//         <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
//             <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.lightWhite },
//           headerShadowVisible: false,
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
//             <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />

//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
//           ),
//           headerTitle: "",
//         }}
//       />
//             <ScrollView showsHorizontalScrollIndicator={false}>
//                 <View
//                     style={{
//                         flex:1,
//                         padding: SIZES.medium
//                     }}
//                 >
//                     <Welcome
//                     />
//                     <Nearbyjobs/>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

// export default Home;
