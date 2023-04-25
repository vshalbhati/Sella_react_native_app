import { useState } from "react";
import { View, ScrollView, SafeAreaView, Animated, Text, TouchableOpacity, FlatList, ActivityIndicator, ActivityIndicatorBase, TextInput, Button, Image, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS, icons, images, SIZES} from '../constants';
import { Nearbyjobs, ScreenHeaderBtn, Welcome} from '../components';
import account from "./account/Account";
import { Stack, useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  absoluteBox: {
    position: 'absolute',
    height: 600,
    width: 200,
    zIndex: -1,
    top: 0,
    left: 0,
    paddingLeft: 20,
    paddingTop: 200,
    backgroundColor: 'rgba(255,64,50,0.8)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
});

const Home = ({navigation}) =>{
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const animation = new Animated.Value(0);

  const toggleMenu = () => {
    if (open) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setOpen(false));
    } else {
      setOpen(true);
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const animatedStyles = {
    left: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200],
    }),
  };


  return (

    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <View>
              <ScreenHeaderBtn
              iconUrl={icons.menu} 
              dimension='60%'
              ></ScreenHeaderBtn>
              <TouchableOpacity
               style={{flex:1, backgroundColor:'transparent',height:40, width:40,position:'absolute'}}
              onPress={toggleMenu}
              />
              {open && (
                  <Animated.View style={[styles.container, animatedStyles]}>
                  <View style={styles.absoluteBox}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Menu</Text>
                    <TouchableOpacity style={{ marginBottom: 10 }}>
                      <Text style={{ color: "white", fontSize: 16 }}>Menu Item 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 10 }}>
                      <Text style={{ color: "white", fontSize: 16 }}>Menu Item 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={{ color: "white", fontSize: 16 }}>Menu Item 3</Text>
                    </TouchableOpacity>
                  </View>
                  </Animated.View>
                )}
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension='100%' 
              />
              <TouchableOpacity
               style={{flex:1, backgroundColor:'transparent',height:40, width:40,position:'absolute', right:0}}
               onPress={()=> navigation.navigate('account')}
               >
              </TouchableOpacity>
            </TouchableOpacity>
          ),
          headerTitle:"CONSTRO",
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{flex:1,padding: SIZES.medium}}>
          <TouchableOpacity onPress={toggleMenu}>
          </TouchableOpacity>
           <Welcome />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>

  )

}
export default Home;