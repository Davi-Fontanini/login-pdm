import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('./assets/fundo.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Lets go.</Text>
          <Text style={styles.subtitle}>Traveling arround the world.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="E-mail"
              keyboardType="email-address"
              placeholderTextColor="#3c5668"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#3c5668"
            />
          </View>
          <TouchableOpacity style={styles.whiteButton}>
            <Text style={[styles.buttonText, { color: 'black' }]}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.bottomTextContainer}>
            <TouchableOpacity onPress={() => console.log("Create Account")}>
              <Text style={styles.bottomText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Forgot Password")}>
              <Text style={styles.bottomText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

