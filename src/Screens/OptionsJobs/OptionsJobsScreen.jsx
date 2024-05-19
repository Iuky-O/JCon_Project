import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

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
      local: "Castanhal/PA",
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
                                    <Text style={styles.textP}>Pagamento:</Text>
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

               {renderAcoes()}

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
