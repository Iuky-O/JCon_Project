import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const submissoes = [
    {
      id: 1,
      user: "Anna Maria",
      date: "17/05/2024",
      local: "Castanhal/PA",
      value: "100 h",
      servico: "Design de Logotipos"
    },
    {
        id: 2,
        user: "Critiano J.",
        date: "18/05/2024",
        local: "Sant. Isabel/PA",
        value: "200 h",
        servico: "Design Games"
    },
    {
        id: 3,
        user: "J. Carlos",
        date: "19/07/2024",
        local: "Castanhal/PA",
        value: "100 h",
        servico: "Design de Logotipos"
    },
    {
        id: 4,
        user: "Aline M.",
        date: "19/06/2024",
        local: "Castanhal/PA",
        value: "300 h",
        servico: "Site para mercadinho"
    },
    {
        id: 5,
        user: "L. Cunha",
        date: "17/07/2024",
        local: "Castanhal/PA",
        value: "300 h",
        servico: "Design de Jogo 3D"
    },
  ];

function renderSubmissoes(){
    return(
    
        <View style={styles.container}>
    
          <View style={{alignItems: 'center'}}>
              <Text style={styles.textSubtitle}> Submissões Ativas</Text>
              <Text style={styles.lineSeparator}></Text>
          </View>
  
              {submissoes.map((subs) => (
                <View key={subs.id} style={{alignItems: 'center', marginTop: 10}}>
                  <View style={styles.avaliacaoFull} >
  
                      <View style={{alignItems: 'center'}}>
                          <Text style={styles.textUser}>{subs.user}</Text>
                      </View>
  
                      <View style={{padding: 10,}}>
                          <View style={{flex: 1, flexDirection: 'row', gap: 10 }}>
                              <Text style={styles.textP}>Data:</Text>
                              <Text>{subs.date}</Text>
                          </View>
  
                          <View style={{flex: 1, flexDirection: 'row', gap: 10 }}>
                              <Text style={styles.textP}>Local:</Text>
                              <Text>{subs.local}</Text>
                          </View>
  
                          <View style={{flex: 1, flexDirection: 'row', gap: 10 }}>
                            <Text style={styles.textP}>Valor:</Text>
                            <Text>{subs.value}</Text>
                          </View>
  
                          <View style={{flex: 1, flexDirection: 'row', gap: 10 }}>
                            <Text style={styles.textP}>Serviço:</Text>
                            <Text>{subs.servico}</Text>
                          </View>
                      </View>
  
                  </View>
                  
                  <Text style={styles.lineSeparator2}></Text>
  
                </View>
              ))}
      </View>
      )
  };

const acoes = [
    {
      id: 1,
      user: "Maria Cavalcante",
      date: "11/04/2024",
      local: "Castanhal/PA",
      value: "100 h",
      receita: "300 R$"
    },
    {
      id: 2,
      user: "Judas R.",
      date: "10/04/2024",
      local: "Santa Isabel/PA",
      value: "200 h",
      receita: "400 R$"
    },
    {
      id: 3,
      user: "Mariana Seline",
      date: "08/04/2024",
      local: "Castanhal/PA",
      value: "100 h",
      receita: "500 R$"
    },
    {
      id: 4,
      user: "Reginaldo R.",
      date: "02/04/2024",
      local: "Castanhal/PA",
      value: "200 h",
      receita: "200 R$"
    },
    {
      id: 5,
      user: "J. Souza",
      date: "28/03/2024",
      local: "Vigia/PA",
      value: "300 h",
      receita: "600 R$"
    },
  ];

function renderAcoes(){
    return(
    
      <View style={styles.container}>
  
        <View style={{alignItems: 'center'}}>
            <Text style={styles.textSubtitle}>Ações Concluídas</Text>
            <Text style={styles.lineSeparator}></Text>
        </View>

            {acoes.map((acao) => (
              <View key={acao.id} style={{alignItems: 'center', marginTop: 10}}>
                <View style={styles.avaliacaoFull} >

                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.textUser}>{acao.user}</Text>
                    </View>

                    <View style={{padding: 10,}}>
                        <View style={{flex: 1, flexDirection: 'row', gap: 10 }}>
                            <Text style={styles.textP}>Data:</Text>
                            <Text>{acao.date}</Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', gap: 10 }}>
                            <Text style={styles.textP}>Local:</Text>
                            <Text>{acao.local}</Text>
                        </View>

                        <View>

                            <View style={{flex: 1, flexDirection: 'row', gap: 90, }}>

                                <View style={{flexDirection: 'column'}}>
                                    <Text style={styles.textP}>Valor:</Text>
                                    <Text>{acao.value}</Text>
                                </View>

                                <View style={{flexDirection: 'column'}}>
                                    <Text style={styles.textP}>Receita:</Text>
                                    <Text>{acao.receita}</Text>
                                </View>

                            </View>

                        </View>

                    </View>

                </View>
                
                <Text style={styles.lineSeparator2}></Text>

              </View>
            ))}
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

                <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Suas Vagas!')}> 
                    <Text style={styles.botaotxt}>Vagas Criadas</Text>
                </TouchableOpacity>

                

                <View style={styles.subContainer}>

                    <TouchableOpacity onPress={() => setControler(true)}>
                        <Text style={[styles.textTopic, controler ? styles.topicButtomActive : null]}>Suas Submissões</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => setControler(false)}>
                        <Text style={[styles.textTopic, !controler ? styles.topicButtomActive : null]}>Ações Concluídas</Text>
                    </TouchableOpacity>

                </View>
                
                {controler ? (
                    renderSubmissoes()
                ) : (
                    renderAcoes()
                )}

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
