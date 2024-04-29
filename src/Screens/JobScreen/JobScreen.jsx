import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';

export default function JobScreen() {
  return (
    <View style={styles.header}> 
      <Text style={styles.text}>JobScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: Colors.MALTE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginTop: 35,
    fontSize:25,
    color: Colors.BRANCO,
  }
});
