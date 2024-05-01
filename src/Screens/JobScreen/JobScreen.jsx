import { View, Text, SafeAreaView, Image, ScrollView, Animated, TextInput} from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import { Ionicons } from 'react-native-vector-icons';
import Colors from '../../Utils/Colors';

export default function JobScreen() {
  const [scrollY,setSrollY] = useState (new Animated.Value(0));
  const [text, setText] = useState("");
  return (
    <SafeAreaView >
      
      <><View style={styles.header}>
      <Ionicons style={styles.iconBack}
          name="chevron-back"
          size={40}
          color="write"
          onPress={() => {}}
          />
        <Image style={styles.imgLogo}
          source={require('../../../assets/images/logo-azul.jpg')}
          
          resizeMode='contain'
        />
      </View>

        <View style={styles.viewBusca}>

          <Ionicons style={{margin:8}}
          name="search"
          size={40}
          color={Colors.AZUL_MARINHO}
          onPress={() => {}}
          />       
          <TextInput style={styles.inputBusca} placeholder="Pesquisar"
           autoCapitalize='none'
           autoCorrect={false}
           value={text}
           onChangeText={(value) => setText(value)}
          />

        </View>

        <View style={styles.boxTitle}>

          <Text style={styles.textTitle}>Vagas</Text>
          <Text style={styles.textFiltrar}>Filtrar</Text>

        </View>

        <View>

          <ScrollView 
          scrollEventThrottle={16}
          onScroll={Animated.event([{
            nativeEvent:{
              contentOffset:{y:scrollY}
            },
          }],
          {useNativeDriver: false})}>

            <View style={styles.boxVaga}></View> 

            <View style={styles.boxVaga}></View>

            <View style={styles.boxVaga}></View>

            <View style={styles.boxVaga}></View>

            <View style={styles.boxVaga}></View>

            <View style={styles.boxVaga}></View>
          </ScrollView>

        </View></>

    </SafeAreaView >
  )
}
/*<View style= {{marginTop:"10%"}}>
<View style={styles.viewTitle}><Text> Serviço de Faxina</Text></View>
<View style={styles.viewTitle}><Text> Imperador, Castanhal- PA</Text></View>
<View style={styles.viewTitle}><Text> 01/01/2024</Text></View>
<Image style={styles.imgVagas} source={require('../../../assets/images/vaga-faxina.jpg')}
resizeMode='contain'
/>
<Text>Estela Pinheiro</Text>
</View>*/