import { View, Text, SafeAreaView, Image, TextInput, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import { Ionicons } from 'react-native-vector-icons';
import Colors from '../../Utils/Colors';

const data = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Seviço de Fotografia', subtitle: 'Nova Olinda, Castanhal - PA',subtitle2: '01/02/2024' },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Serviço de Programação', subtitle: 'Imperador, Castanhal - PA',subtitle2: '10/04/2024', },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Serviço de Faxina', subtitle: 'Castanheira, Belém - PA',subtitle2: '31/04/2024', },
  { id: '4', imageUrl: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Serviço de Design', subtitle: 'Juazeiro, Santa Izabel - PA',subtitle2: '05/04/2024', },
  { id: '5', imageUrl: 'https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Serviço de Contabilidade', subtitle: 'Canaã dos carajás - PA',subtitle2: '02/03/2024', },
  { id: '6', imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Serviço de Tributação', subtitle: 'Abaetetuba - PA',subtitle2: '25/03/2024', },
];

const Item = ({ imageUrl, title, subtitle, subtitle2 }) => (
  <View style={styles.item}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.subtitle}>{subtitle2}</Text>


    </View>
  </View>
);

export default function JobScreen() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={{ height: Dimensions.get('window').height }}>

      <View style={styles.header}>
        <Ionicons style={styles.iconBack}
          name="chevron-back"
          size={40}
          color="write"
          onPress={() => { }}
        />
        <Image style={styles.imgLogo}
          source={require('../../../assets/images/logo-azul.jpg')}
          resizeMode='contain'
        />
      </View>

      <View style={styles.viewBusca}>

        <Ionicons style={{ margin: 8 }}
          name="search"
          size={40}
          color={Colors.AZUL_MARINHO}
          onPress={() => { }}
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
      <FlatList
        data={data}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView >
  )
}

/*
  const [scrollY, setSrollY] = useState(new Animated.Value(0));
<ScrollView
  scrollEventThrottle={16}
  onScroll={Animated.event([{
    nativeEvent: {
      contentOffset: { y: scrollY }
    },
  }],
    { useNativeDriver: false })}
  >
  </ScrollView>

*/


