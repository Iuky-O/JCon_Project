import { View, Image, Text, SafeAreaView, ScrollView, Animated, Alert, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import Colors from '../../Utils/Colors';       
import "firebase/firestore";
import { Stars5, Stars4M, Stars4, Stars3M, Stars3, Stars2M, Stars2, Stars1M, Stars1, StarsM, Stars0 } from '../../Scripts/functions';
        

const avaliacoes = [
  {
    id: 1,
    user: "Maria Cavalcante",
    star: 5,
    comentario: "Eu amei o serviço!",
    recomendacao: "Sim"
  },
  {
    id: 2,
    user: "Judas R.",
    star: 4,
    comentario: "Gostei muito, mas poderia ser mais rápida!",
    recomendacao: "Sim"
  },
  {
    id: 3,
    user: "Mariana Seline",
    star: 5,
    comentario: "Nunca vi alguem tão simpática, atendeu minhas expectativas",
    recomendacao: "Sim"
  },
  {
    id: 4,
    user: "Reginaldo R.",
    star: 0,
    comentario: "Não gostei!",
    recomendacao: "Não"
  },
  {
    id: 5,
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

            {avaliacoes.map((avaliacao) => (
              <View key={avaliacao.id} style={{alignItems: 'center', marginTop: 10}}>
                <View style={styles.avaliacaoFull} >
                  
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

  const route = useRoute();
  const {Nome, Imagem, Titulo, Servicos, Descricao, postagem1, postagem2, postagem3, postagem4, Estrelas} = route.params;

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
                    {Estrelas === 5 && Stars5() }
                    {Estrelas === 4.5 && Stars4M()}
                    {Estrelas === 4 && Stars4()}
                    {Estrelas === 3.5 && Stars3M()}
                    {Estrelas === 3 && Stars3()}
                    {Estrelas === 2.5 && Stars2M()}
                    {Estrelas === 2 && Stars2()}
                    {Estrelas === 1.5 && Stars1M()}
                    {Estrelas === 1 && Stars1()}
                    {Estrelas === 0.5 && StarsM()}
                    {Estrelas === 0 && Stars0()}
                    <Text style={{opacity: 0.5, color: Colors.MALTE}}> {Estrelas} </Text>
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
                    <Text style={styles.buttomText} onPress={() => Alert.alert('Proposta feita!')}>Fazer Proposta!</Text>
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
                    <Text>{Servicos}</Text>
                  </View>
        
                  <Text style={styles.textSubtitle}>SOBRE MIM</Text>
                  <Text style={styles.lineSeparator}></Text>
        
                  <View style={{ margin: 20, padding: 10 }}>
                    <Text style={{fontSize: 15}}>{Descricao}</Text>
                  </View>
        
                  <Text style={styles.textSubtitle}>POSTAGENS</Text>
                  <Text style={styles.lineSeparator}></Text>
        
                  <View style={styles.post}>
                    <Image style={styles.postImage}
                      source={{uri:postagem1}}
                    />
                    <Image style={styles.postImage}
                      source={{uri:postagem2}}
                    />
                    <Image style={styles.postImage}
                      source={{uri:postagem3}}
                    />
                    <Image style={styles.postImage}
                      source={{uri:postagem4}}
                    />
                  </View>
                </View>
            
          ) : (
          renderAvaliations()
        )}
        
        
      </ScrollView>
    </SafeAreaView>
  )
}
        