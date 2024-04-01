import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import styles from './style';

const Header = ({ userName, iconSource }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.leftSide}>
          <Text style={styles.welcomeText}>Welcome, {userName} 🎉 </Text>
          <Text style={styles.userName}>You're doing great!</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigateToNewPage()}>
          <Image style={styles.icon} source={require('../../app/assets/icons/calendar.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>   
  );
};


export default Header;
