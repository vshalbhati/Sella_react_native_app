import { useState } from "react";
import { View, ScrollView, SafeAreaView, Animated, Text, TouchableOpacity, FlatList, ActivityIndicator, ActivityIndicatorBase, TextInput, Button, Image, StyleSheet, Easing } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {COLORS, icons, images, SIZES} from '../constants';
import { Nearbyjobs, ScreenHeaderBtn, Welcome} from '../components';
import account from "./account/Account";
import { Stack, useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  navla: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation: 5,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
    width: "33%",
  },
  selectedIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
    height: '120%',
    width: "33%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
  iconButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

const Home = ({navigation}) =>{
  const router = useRouter();

  const [selected, setSelected] = useState(0);
  const animationValues = [1, 1, 1, 1].map(() => new Animated.Value(1));

  const onPress = (index) => {
    setSelected(index);
    Animated.sequence([
      Animated.timing(animationValues[index], {
        toValue: 1.5,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
      Animated.timing(animationValues[index], {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start();
  };
  const iconStyles = (index) => [
    styles.icon,
    selected === index && styles.selectedIcon,
    {
      transform: [{ scale: animationValues[index] }],
    },
  ];


  return (

    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            color: COLORS.darkGray,
            paddingHorizontal: 16,
          },
          headerRight: () => (
            <TouchableOpacity style={styles.iconButton} onPress={()=>navigation.navigate('cart')}>
              <Icon name="shopping-cart" size={32} color={COLORS.gray} />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.iconButton}
              onPress={()=> navigation.navigate('account')}
            >
              <Icon name="person" size={36} color={COLORS.gray} />
            </TouchableOpacity>
          ),
          headerTitle:"CONSTRO",
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{flex:1,padding: SIZES.medium}}>
           <Welcome />
          <Nearbyjobs />
        </View>
      </ScrollView>
      <SafeAreaView style={styles.navla}>
      <TouchableOpacity onPress={() => {setSelected(0), navigation.navigate('home')}} style={iconStyles(0)}>
        <Icon name="build" size={28} color={selected === 0 ? "#fff" : "#444"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setSelected(1), navigation.navigate('thekedar'), setSelected(0)}} style={iconStyles(1)}>
        <Icon name="people" size={28} color={selected === 1 ? "#fff" : "#444"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setSelected(2), navigation.navigate('movers'), setSelected(0)}} style={iconStyles(2)}>
        <Icon name="local-shipping" size={28} color={selected === 2 ? "#fff" : "#444"} />
      </TouchableOpacity>
    </SafeAreaView>
    </SafeAreaView>

  )

}
export default Home;