import { View, Text, Image, SafeAreaView, Alert} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import Colors from '../../Utils/Colors';

import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function JobsDescScreen() {
    const route = useRoute();
    const { JobTitle, JobLocal, JobDate, JobDesc, JobRequisite, JobMoney, JobSub } = route.params;

  return (
    <ScrollView>
        <View style={styles.header}>
            <Image style={styles.logoImage} source={require('../../../assets/images/logo-azul-claro.jpg')}/>
        </View>
        <SafeAreaView>
            <View>
                <Text style={styles.textTopic}> Informações </Text>
                <Text style={styles.textInfo}>
                    <MaterialIcons name="work" size={15} color={Colors.MALTE}/>
                    {JobTitle}
                </Text>
                <Text style={styles.textInfo}>
                    <FontAwesome6 name="location-dot" size={15} color={Colors.MALTE}/>
                    {JobLocal}
                </Text>
                <Text style={styles.textInfo}>
                    <FontAwesome name="calendar" size={15} color={Colors.MALTE}/> 
                    {JobDate}
                </Text>
                <Text style={styles.textInfo}>
                    <MaterialIcons name="attach-money" size={15} color={Colors.MALTE} />
                    {JobMoney}
                </Text>
                <Text style={styles.textInfo}>
                    <FontAwesome6 name="user-large" size={15} color={Colors.MALTE}/>
                    {JobSub}
                </Text>
                
                <Text style={styles.textTopic}> Descrição </Text>
                <Text style={styles.textDesc}>{JobDesc}</Text>

                <Text style={styles.textTopic}> Requisitos </Text>
                <Text style={styles.textDesc}>{JobRequisite}</Text>

                <View style={styles.Button}>
                    <Text style={styles.buttomText} onPress={() => Alert.alert('Bubmissão enviada!')}> Candidatar-se </Text>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}