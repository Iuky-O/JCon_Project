import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native';

//Tem que ter: as submissões, submissões concluidas, vagas criadas, criar vagas.

const acoes = [
    {
      user: "Maria Cavalcante",
      date: "11/04/2024",
      local: "Castanhal/PA",
      value: "100 h"
    },
    {
      user: "Judas R.",
      date: "10/04/2024",
      local: "Santa Isabel/PA",
      value: "200 h"
    },
    {
      user: "Mariana Seline",
      date: "08/04/2024",
      local: "Castanhal/PA",
      value: "100 h"
    },
    {
      user: "Reginaldo R.",
      date: "02/04/2024",
      local: "Castanhal/PA",
      value: "200 h"
    },
    {
      user: "J. Souza",
      date: "28/03/2024",
      local: "Vigia/PA",
      value: "300 h"
    },
  ];

function renderAcoes(){
    return(
    <View style={styles.container}>

      <View style={styles.containerAva}>
  
          <View style={{alignItems: 'center'}}>
              <Text style={[styles.textSubtitle, ]}>AÇÕES</Text>
              <Text style={styles.lineSeparator}></Text>
          </View>
  
              {acoes.map((acao, index) => (
                <View style={{alignItems: 'center', marginTop: 10}}>
                  <View key={index} style={styles.containerFull} >       
                        <Text>{acao.user}</Text>
                        <Text>{acao.date}</Text>
                        <Text>{acao.local}</Text>
                        <Text>{acao.value}</Text>
                    </View>
                </View>
              ))}
      </View>
    </View>
    )
  };

export default function OptionsJobsScreen() {
    const navigation = useNavigation();
    const [controler, setControler] = useState(true);

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.topic}> Opções </Text>

                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CreateJobs')}> 
                    <Text style={styles.botaotxt}>Criar Vaga</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}> 
                    <Text style={styles.botaotxt}>Vagas Criadas</Text>
                </TouchableOpacity>

                

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: 15, marginBottom: 10, marginTop: -30}}>

                    <TouchableOpacity onPress={() => setControler(true)}>
                        <Text style={[styles.textTopic, controler ? styles.topicButtomActive : null]}>Suas Submissões</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => setControler(false)}>
                        <Text style={[styles.textTopic, !controler ? styles.topicButtomActive : null]}>Ações Concluídas</Text>
                    </TouchableOpacity>

                </View>
                {controler ? (
                    <View style={styles.container}>
                        <Text> oi </Text>
                    </View>
                    ) : (
                        renderAcoes()
                    )}
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.TURQUESA_CLARO,
        borderRadius:30,
        alignItems:"center",
        width: '100%',
        height: '100%'
    
      },
    textSubtitle:{
        fontSize:20,
        marginTop:30,
        fontWeight: 'bold',
        color:Colors.MALTE,
    },
    lineSeparator: {
        height: 1,
        width: "90%",
        backgroundColor: Colors.AZUL_IRIS,
    },
    topic:{
        fontSize: 25,
        color: Colors.AZUL_MARINHO,
        marginTop: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    botao:{
        backgroundColor: Colors.MALTE,
        borderRadius: 10, 
        padding: 10, 
        width: '60%', 
        alignItems: 'center',
        marginTop: 30,
    },
    botaotxt : {
        color: Colors.BRANCO,
    },
    topicButtomActive:{
        fontWeight: 'bold', 
        borderBottomWidth: 1, 
        borderColor: Colors.AZUL_IRIS
    },
    textTopic:{
        fontSize: 17,
        marginTop:60,
        color:Colors.MALTE,
    },
    textAvaliacao:{
        fontWeight: 'bold',
    },

    containerFull:{
        backgroundColor: Colors.BRANCO,
        width: "90%"
    },
    containerAva:{
        flex:1,
        backgroundColor: Colors.TURQUESA_CLARO,
        borderRadius:30,
    }
})