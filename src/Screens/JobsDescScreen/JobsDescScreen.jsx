import { View, Text, Image, SafeAreaView, Alert } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

export default function JobsDescScreen() {
    const route = useRoute();
    const { JobTitle, JobLocal, JobDate, JobDesc, JobRequisite, JobMoney, JobSub } = route.params;

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ alignItems: 'center', marginTop:15,}}>
                    <Text style={styles.textTopic}> Informações </Text>
                </View>

                <View style={{ marginTop: 25 }}>
                    <Text style={styles.textDesc}>{JobTitle}</Text>
                    <Text style={styles.subText}>{JobLocal}</Text>
                    <Text style={styles.subText}>{JobDate}</Text>
                    <Text style={{maxWidth: 'auto',fontSize: 12, paddingHorizontal: 10, marginLeft:5}}>$dia</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', margin:20, }}>
                    <Text style={styles.textDesc}>{JobMoney}</Text>
                </View>

                <Text style={styles.textTopic}> Descrição </Text>
                <Text style={styles.text}>{JobDesc}</Text>

                <Text style={styles.textTopic}> Requisitos </Text>
                <Text style={styles.text}>{JobRequisite}</Text>

                <View style={{ flexDirection:'row', justifyContent: 'center', marginVertical:'50%' }}>
                    <View style={styles.Button1}>
                        <Text style={styles.buttomText} onPress={() => Alert.alert('Submissão enviada!')}> Candidatar-se </Text>
                    </View>
                    <View style={styles.Button2}>
                        <Text style={styles.buttomText} onPress={() => Alert.alert('Submissão enviada!')}> Review </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}