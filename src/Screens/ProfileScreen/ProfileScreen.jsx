import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <SafeAreaView>
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
      
    </SafeAreaView>
  )
}