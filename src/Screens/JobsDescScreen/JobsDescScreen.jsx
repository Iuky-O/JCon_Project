import { View, Text, Image, SafeAreaView, Alert} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

export default function JobsDescScreen() {
    const route = useRoute();
    const { JobTitle, JobLocal, JobDate, JobDesc, JobRequisite, JobMoney, JobSub } = route.params;

  return (
    <ScrollView>
        <SafeAreaView>
            <View style={{margin: 10}}>
                
                <Text style={styles.textTopic}> Informações </Text>

                <View style={styles.textInfo}>
                    <Image source={require('../../../assets/images/icon-topic.png')} style={{height: 20, width: 20}}/>
                    <Text style={styles.textDesc}>{JobTitle}</Text>
                </View>
                <View style={styles.textInfo}>
                    <Image source={require('../../../assets/images/icon-topic.png')} style={{height: 20, width: 20}}/>
                    <Text style={styles.textDesc}>{JobLocal}</Text>
                </View>
                <View style={styles.textInfo}>
                    <Image source={require('../../../assets/images/icon-topic.png')} style={{height: 20, width: 20}}/> 
                    <Text style={styles.textDesc}>{JobDate}</Text>
                </View>
                <View style={styles.textInfo}>
                    <Image source={require('../../../assets/images/icon-topic.png')} style={{height: 20, width: 20}}/>
                    <Text style={styles.textDesc}>{JobMoney}</Text>
                </View>
                <View style={styles.textInfo}>
                    <Image source={require('../../../assets/images/icon-topic.png')} style={{height: 20, width: 20}}/>
                    <Text style={styles.textDesc}>{JobSub}</Text>
                </View>
                
                <Text style={styles.textTopic}> Descrição </Text>
                <Text style={styles.textDesc}>{JobDesc}</Text>

                <Text style={styles.textTopic}> Requisitos </Text>
                <Text style={styles.textDesc}>{JobRequisite}</Text>

                <View style={{alignItems: 'center'}}>
                    <View style={styles.Button}>
                        <Text style={styles.buttomText} onPress={() => Alert.alert('Submissão enviada!')}> Candidatar-se </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}