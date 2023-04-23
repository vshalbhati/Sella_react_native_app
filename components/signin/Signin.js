import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {COLORS, icons, images, SIZES} from '../../constants';
import ScreenHeaderBtn from '../common/header/ScreenHeaderBtn';
import {Stack, useRouter, useSearchParams} from 'expo-router';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign in logic here
  };

  return (
    <View style={styles.container}>
  <Stack.Screen
    options={{
      headerStyle: { backgroundColor: COLORS.lightWhite },
      headerShadowVisible: false,
      headerBackVisible: false,
      headerLeft: () => (
        <ScreenHeaderBtn
          iconUrl={icons.homeicon}
          dimension="60%"
          handlePress={() => navigation.navigate('home')}
        />
      ),
      headerTitle: ''
    }}
  />
  <Text style={styles.title}>Sign In</Text>
  <Text style={styles.label}>Email</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter your Email"
    onChangeText={setEmail}
    value={email}
    keyboardType="email-address"
    autoCapitalize="none"
  />
  <Text style={styles.label}>Password</Text>
  <TextInput
    style={styles.input}
    placeholder="Enter your Password"
    onChangeText={setPassword}
    value={password}
    secureTextEntry
  />
  <TouchableOpacity style={styles.button} onPress={handleSignIn}>
    <Text style={styles.buttonText}>Sign In</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('signup')}>
    <Text style={styles.signupText}>Don't have an account?</Text>
  </TouchableOpacity>
  <Text style={styles.orText}>OR Login with</Text>
  <View style={styles.socialBtnsContainer}>
    <TouchableOpacity style={styles.socialBtn}>
      <Image source={require("../../assets/icons/google.png")} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.socialBtn}>
      <Image source={require("../../assets/icons/microsoft.png")} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.socialBtn}>
      <Image source={require("../../assets/icons/apple.png")} />
    </TouchableOpacity>
  </View>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
  signupText: {
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  orText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  socialBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  socialBtn: {
    backgroundColor: COLORS.lightGray,
    height:1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10
  }
});


export default Signin;
