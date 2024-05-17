
import { View, Image, Text, SafeAreaView, ScrollView, Animated} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ButtonFloat from '../../Components/ButtonFloat';
import Colors from '../../Utils/Colors';
import { Stars5, Stars4, Stars3, Stars2, Stars1, Stars0 } from '../../Scripts/functions'
import "firebase/firestore";
import { firebase } from '../../Firebase/firebaseConfig';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

const avaliacoes = [
  {
    user: "Maria Cavalcante",
    star: 5,
    comentario: "Eu amei o serviço!",
    recomendacao: "Sim"
  },
  {
    user: "Judas R.",
    star: 4,
    comentario: "Gostei muito, mas poderia ser mais rápida!",
    recomendacao: "Sim"
  },
  {
    user: "Mariana Seline",
    star: 5,
    comentario: "Nunca vi alguem tão simpática, atendeu minhas expectativas",
    recomendacao: "Sim"
  },
  {
    user: "Reginaldo R.",
    star: 0,
    comentario: "Não gostei!",
    recomendacao: "Não"
  },
  {
    user: "J. Souza",
    star: 3,
    comentario: "Bem mais ou menos :(",
    recomendacao: "Não"
  },
];


function renderAvaliations(){
  return(
    <View style={styles.containerAvaliacao}>

        <View style={{alignItems: 'center'}}>
            <Text style={[styles.textSubtitle, ]}>AVALIAÇÕES</Text>
            <Text style={styles.lineSeparator}></Text>
        </View>

            {avaliacoes.map((avaliacao, index) => (
              <View style={{alignItems: 'center', marginTop: 10}}>
                <View key={index} style={styles.avaliacaoFull} >
                  
                  <View style={styles.iconesAvaliacao}>
                    {avaliacao.recomendacao === 'Sim' && <Image source={require('../../../assets/images/icon-like.png')} style={{width: 20, height: 20}}/>}
                    {avaliacao.recomendacao !== 'Sim' && <Image source={require('../../../assets/images/icon-dislike.png')} style={{width: 20, height: 20}}/>}
                  </View>

                  <View style={{alignItems: 'center'}}>
                    <Text style={styles.textUser}>{avaliacao.user}</Text>
                  </View>  
                    
                  <View>
                    {avaliacao.star === 5 && Stars5()}
                    {avaliacao.star === 4 && Stars4()}
                    {avaliacao.star === 3 && Stars3()}
                    {avaliacao.star === 2 && Stars2()}
                    {avaliacao.star === 1 && Stars1()}
                    {avaliacao.star === 0 && Stars0()}
                  </View>
                  <Text style={styles.textAvaliacao}>{avaliacao.comentario}</Text>
                  <Text>Recomendação: {avaliacao.recomendacao}</Text>
                </View>
              </View>
            ))}
    </View>
  )
};



export default function ProfileScreen() {

  const [userData, setUserData] = useState(null);
  const [scrollY, setSrollY] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const [controler, setControler] = useState(true);

    useEffect(() => {
      async function fetchUserData() {
        try {
          const db = getFirestore();
          const usersCollection = collection(db, "usuarios");
          const q = query(usersCollection, where("Name", "==", "Jenny Cooper")); 
  
          const querySnapshot = await getDocs(q);
          const userDataArray = querySnapshot.docs.map(doc => doc.data());
          setUserData(userDataArray[0]);
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
  
        
        if (userData && userData.id) {
          
          const userDoc = doc(db, "usuarios", userData.id);
          await setDoc(userDoc, { aboutMe: newAboutMe }, { merge: true });
          console.log("Descrição do usuário atualizada com sucesso!");
        } else {
          
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

    <SafeAreaView>

    {userData && (
      <ScrollView>             
        <View style={styles.buttonFloat}>
          <ButtonFloat/>
        </View>
        <View style={styles.containerProfile}>



            <Image style={styles.containerImg}
              source={require('../../../assets/images/profile.jpg')}
            />
        
          <Text style={styles.textTitle}>{userData.Name}</Text>

          <View style={styles.containerAval}>
            <View style={styles.stars}>
            <Image source={require('../../../assets/images/icon-star-max.png')} style={{height: 20, width: 20}}/>
            <Image source={require('../../../assets/images/icon-star-max.png')} style={{height: 20, width: 20}}/>
            <Image source={require('../../../assets/images/icon-star-max.png')} style={{height: 20, width: 20}}/>
            <Image source={require('../../../assets/images/icon-star-medium.png')} style={{height: 20, width: 20}}/>
            <Image source={require('../../../assets/images/icon-star-min.png')} style={{height: 20, width: 20}}/>
              <Text style={{opacity: 0.5, color: Colors.MALTE}}> 3.5 </Text>
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
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, marginTop: -30}}>

          <TouchableOpacity onPress={() => setControler(true)}>
              <Text style={[styles.textTopic, controler ? styles.topicButtomActive : null]}>INFORMAÇÕES</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => setControler(false)}>
            <Text style={[styles.textTopic, !controler ? styles.topicButtomActive : null]}>AVALIAÇÕES</Text>
          </TouchableOpacity>

        </View>

        {controler ? (
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
            <Text style={{fontSize: 15}}>{userData.aboutMe ? userData.aboutMe : createAboutMe()}</Text>
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
        ) : (
          renderAvaliations()
        )}
      </ScrollView>
    )}
    </SafeAreaView>
  )
}
