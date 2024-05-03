
import { View, Image, Text, SafeAreaView, ScrollView, Animated, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons';
import styles from './style';

export default function ProfileScreen() {
  const [scrollY, setSrollY] = useState(new Animated.Value(0));

  return (
    <SafeAreaView style={{ height: Dimensions.get('window').height }}>
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
          { useNativeDriver: false })}
      > 
      <View style={styles.header}>
        <Ionicons style={styles.iconBack}
          name="chevron-back"
          size={40}
          color="write"
          onPress={() => { }}
        />
        <Image style={styles.imgLogo}
          source={require('../../../assets/images/logo-azul.jpg')}
          resizeMode='contain'
        />
      </View>
      <View style={styles.containerImg}>
        <ImageBackground
        source={require('../../../assets/images/profile.jpg')}
        style={styles.imgProfile}
      ></ImageBackground>
      </View> 
      </ScrollView >

    </SafeAreaView>
  )
}
