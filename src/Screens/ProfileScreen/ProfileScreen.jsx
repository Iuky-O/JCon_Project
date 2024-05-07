
import { View, Image, Text, SafeAreaView, ScrollView, Animated, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const [scrollY, setSrollY] = useState(new Animated.Value(0));
  const navigation = useNavigation();

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
          <TouchableOpacity
          onPress = {() => navigation.goBack()}>
          <Ionicons style={styles.iconBack}
            name="chevron-back"
            size={40}
            color="write"
            onPress={() => { }}
          />          
          </TouchableOpacity>
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

          <Text>
            <Text style={styles.textTitle}>Jane Cooper </Text>
          </Text>

          <View style={styles.Button}>
            <Text style={styles.buttomText} onPress={() => Alert.alert('Proposta feita!')}> Oferecer Proposta </Text>
          </View>

          <Text style={styles.textSubtitle}>SERVIÇOS</Text>
          <Text style={styles.lineSeparator}></Text>

          <View style={styles.textInfo}>
            <Text>Design ➖ ➖ </Text>
            <Text>Programação ➖ ➖ </Text>
            <Text>UX </Text>
          </View>

          <Text style={styles.textSubtitle}>SOBRE MIM</Text>
          <Text style={styles.lineSeparator}></Text>

          <Text style={{ margin: 20, }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima est sit iure id totam suscipit maiores. Id fugiat culpa quisquam molestiae esse repudiandae. Adipisci cumque possimus, consectetur perferendis similique itaque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam porro saepe, soluta necessitatibus libero quo inventore adipisci. Doloribus, minima quasi harum eius possimus suscipit quaerat dolor minus laudantium ratione libero?
          </Text>

          <Text style={styles.textSubtitle}>POSTAGENS</Text>

          <View style={styles.post}>
            <Image style={styles.postImage}
              source={require('../../../assets/images/postagen1.jpg')}
            />
            <Image style={styles.postImage}
              source={require('../../../assets/images/postagem2.jpg')}
            />
            <Image style={styles.postImage}
              source={require('../../../assets/images/postagem3.jpg')}
            />
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
