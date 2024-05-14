import { View, Image, Text, SafeAreaView, ScrollView, Animated, Dimensions, Alert} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from 'react-native-vector-icons';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
        
import "firebase/firestore";
        
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
        
export default function ProfileScreen() {
        
  const [userData, setUserData] = useState(null);
  const [scrollY, setSrollY] = useState(new Animated.Value(0));
  const navigation = useNavigation();
      
  const route = useRoute();
  const {Nome, Imagem} = route.params;

  return (
        
    <SafeAreaView>

      <ScrollView> 
          <View style={styles.containerProfile}>
        
              <Image style={styles.containerImg}
                    source={{uri:Imagem}}
              />
              <Text style={styles.textTitle}>{Nome}</Text>
        
              <View style={styles.containerAval}>
                  <View style={styles.stars}>
                  <Image source={require('../../../assets/images/icon-star-max.png')} style={{height: 20, width: 20}}/>
                  <Image source={require('../../../assets/images/icon-star-max.png')} style={{height: 20, width: 20}}/>
                  <Image source={require('../../../assets/images/icon-star-max.png')} style={{height: 20, width: 20}}/>
                  <Image source={require('../../../assets/images/icon-star-max.png')} style={{height: 20, width: 20}}/>
                  <Image source={require('../../../assets/images/icon-star-medium.png')} style={{height: 20, width: 20}}/>
                    <Text style={{opacity: 0.5, color: Colors.MALTE}}> 4.5 </Text>
                  </View>
        
                    <View style={styles.containerTopics}>
                      <View style={{alignItems: 'center'}}>
                        <Text style={styles.TextTopics}>100</Text>
                        <Text style={styles.TextSubTopics}>   Ações   </Text>
                      </View>
        
                      <Text style={styles.lineSeparatorColumn}></Text>
        
                      <View style={{alignItems: 'center'}}>
                        <Text style={styles.TextTopics}>100</Text>
                        <Text style={styles.TextSubTopics}>Comentários</Text>
                      </View>
        
                      <Text style={styles.lineSeparatorColumn}></Text>
        
                      <View style={{alignItems: 'center'}}>
                        <Text style={styles.TextTopics}>80</Text>
                        <Text style={styles.TextSubTopics}> Indicações </Text>
                      </View>
                  </View>
                </View>
                  <View style={styles.Button}>
                    <Text style={styles.buttomText} onPress={() => Alert.alert('Proposta feita!')}> Oferecer Proposta </Text>
                  </View>
                </View>
                <View style={styles.container}>
        
                  <Text style={styles.textSubtitle}>SERVIÇOS</Text>
                  <Text style={styles.lineSeparator}></Text>
        
                  <View style={styles.textInfo}>
                    <Text>Design ➖ ➖ </Text>
                    <Text>Programação ➖ ➖ </Text>
                    <Text>UX </Text>
                  </View>
        
                  <Text style={styles.textSubtitle}>SOBRE MIM</Text>
                  <Text style={styles.lineSeparator}></Text>
        
                  <View style={{ margin: 20, padding: 10 }}>
                    <Text style={{fontSize: 15}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima est sit iure id totam suscipit maiores. Id fugiat culpa quisquam molestiae esse repudiandae. Adipisci cumque possimus, consectetur perferendis similique itaque.
                                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam porro saepe, soluta necessitatibus libero quo inventore adipisci. Doloribus, minima quasi harum eius possimus suscipit quaerat dolor minus laudantium ratione libero?
                    </Text>
                  </View>
        
                  <Text style={styles.textSubtitle}>POSTAGENS</Text>
                  <Text style={styles.lineSeparator}></Text>
        
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
        