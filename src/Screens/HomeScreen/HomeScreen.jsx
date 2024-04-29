import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';
import { Image } from 'react-native-web';

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.header}>
        <Image source={require('')}/>
      </View>
      
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: Colors.MALTE,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
