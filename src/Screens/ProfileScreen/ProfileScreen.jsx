
import { View, Image, Text, SafeAreaView, ScrollView, Animated, Dimensions, ImageBackground, Alert } from 'react-native'
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
          <Image
            source={require('../../../assets/images/profile.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Text >
            <Text style={styles.textTitle}>JANE COOPER </Text>
          </Text>
          <View style={styles.Button}>
            <Text style={styles.buttomText} onPress={() => Alert.alert('Bubmissão enviada!')}> Oferecer Proposta </Text>
          </View>
          <Text>Serviços</Text>
          <Text style={styles.lineSeparator}></Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
