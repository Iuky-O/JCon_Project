
import { View, Image, Text, SafeAreaView, ScrollView, Animated, Dimensions, Alert, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from 'react-native-vector-icons';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import "firebase/firestore";
import { firebase } from '../../Firebase/firebaseConfig';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

export default function ProfileScreen() {

  const [userData, setUserData] = useState(null);
  const [scrollY, setSrollY] = useState(new Animated.Value(0));
  const navigation = useNavigation();

    useEffect(() => {
      async function fetchUserData() {
        try {
          const db = getFirestore();
          const usersCollection = collection(db, "usuarios");
          const q = query(usersCollection, where("Name", "==", "Jenny Cooper")); // Substitua "Jane Cooper" pelo nome do usuário que você deseja buscar
  
          const querySnapshot = await getDocs(q);
          const userDataArray = querySnapshot.docs.map(doc => doc.data());
          setUserData(userDataArray[0]); // Se houver apenas um usuário com o nome fornecido, você pode acessá-lo diretamente pelo índice 0
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      }
  
      fetchUserData();
    }, []);

    async function saveAboutMe() {
      try {
        const db = getFirestore();
        const usersCollection = collection(db, "usuarios");
  
        // Verificar se o usuário já tem uma descrição
        if (userData && userData.id) {
          // Atualizar a descrição existente
          const userDoc = doc(db, "usuarios", userData.id);
          await setDoc(userDoc, { aboutMe: newAboutMe }, { merge: true });
          console.log("Descrição do usuário atualizada com sucesso!");
        } else {
          // Criar um novo documento com a descrição
          await setDoc(doc(usersCollection), { aboutMe: newAboutMe });
          console.log("Nova descrição do usuário criada com sucesso!");
        }
      } catch (error) {
        console.error("Erro ao salvar descrição do usuário:", error);
      }
    }

    function createAboutMe(){
      <TouchableOpacity onPress={() => navigation.navigate("EditAboutMe", { currentAboutMe: userData.aboutMe })}>
              <View style={{ margin: 20, padding: 10 }}>
                <Text> Adicionar Descrição </Text>
              </View>
          </TouchableOpacity>
    }


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
        {userData && (
        <View style={styles.container}>

          <Text>
            <Text style={styles.textTitle}>{userData.Name}</Text>
          </Text>

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
            <Text style={{fontSize: 15}}>{userData.aboutMe ? userData.aboutMe : createAboutMe()}</Text>
          </View>

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
        )}

      </ScrollView>
    </SafeAreaView>
  )
}
