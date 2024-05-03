import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import styles from '../RankingScreen/styles';

export default function RankingScreen() {
  /** Carrosel para ranking */
  const carouselItemsRanking = [
    {
      categorie: 'Bom atendimento',

      title: 'Juliana Trindade',
      image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',

      title2: 'Marcos M.',
      image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',

      title3: 'Aline Palha',
      image3: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
    
    },

    {
      categorie: 'Educação',

      title: 'Flora Arruda',
      image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
    
      title2: 'Juliano Cunha',
      image2: 'https://www.otempo.com.br/image/contentid/policy:1.2503902:1624581759/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f',

      title3: 'Marcos M.',
      image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
    
    },

    {
      categorie: 'Responsabilidade',

      title: 'Aline Palha',
      image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
    
      title2: 'Juliana Trindade',
      image2: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',

      title3: 'Flora Arruda',
      image3: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
    
    },

  ];

  function renderItemsRanking({item}){
    return(
      <View>
        <Text style={styles.textSubTopic}>{item.categorie}</Text>

        <View style={styles.CarouselContainerItem}>

          <Image style={styles.CarouselImageOuro} source={{uri:`${item.image}`}}/>
          <Image style={styles.ImageEmblema1} source={require('./../../../assets/images/icon-medalha-de-ouro.png/')}/>
          
          <Image style={styles.CarouselImagePrata} source={{uri:`${item.image2}`}}/>
          <Image style={styles.ImageEmblema2} source={require('./../../../assets/images/icon-medalha-de-prata.png/')}/>
          
          <Image style={styles.CarouselImageBronze} source={{uri:`${item.image3}`}}/>
          <Image style={styles.ImageEmblema3} source={require('./../../../assets/images/icon-medalha-de-bronze.png/')}/>

          <Text style={styles.CarouselTitle1}>{item.title}</Text>
          <Text style={styles.CarouselTitle2}>{item.title2}</Text>
          <Text style={styles.CarouselTitle3}>{item.title3}</Text>

        </View>

        
      </View>
    );
  }

  const carouselSubRanking = [
    {
      id: 4,
      title: 'Juliana Trindade',
      image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
    },
    {
      id: 5,
      title: 'Marcos M.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
    },
    {
      id: 6,
      title: 'Aline Palha',
      image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
    },
    {
      id: 7,
      title: 'Flora Arruda',
      image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
    },
    {
      id: 8,
      title: 'Juliano Cunha',
      image: 'https://www.otempo.com.br/image/contentid/policy:1.2503902:1624581759/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f',
    },
    {
      id: 9,
      title: 'Marcos M.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
    
    },
    {
      id: 10,
      title: 'Aline Palha',
      image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
    },
    {
      id: 11,
      title: 'Juliana Trindade',
      image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
    },
    {
      id: 12,
      title: 'Flora Arruda',
      image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
    },

  ];

  const renderRankingItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Profile')}
    >
      <Image style={styles.avatar} source={{uri:`${item.image}`}}/>
      <View style={styles.textContainer}> 
        <Text style={styles.contactName}>{item.title}</Text>       
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
    <View style={styles.header}>
      <Image style={styles.logoImage} source={require('../../../assets/images/logo-azul-claro.jpg')}/>
    </View>

    <SafeAreaView style={styles.container}>

      <View style={{width: '100%', justifyContent: 'center'}}>
        <Text style={styles.textTopic}>Ranking</Text> 
        <Carousel 
          layout={''}
          layoutCardOffset={30}
          data={carouselItemsRanking} 
          sliderWidth={''}
          itemWidth={370}
          renderItem={renderItemsRanking}
        />
      </View>

      <View style={styles.containerList}>
      <FlatList
        data={carouselSubRanking}
        renderItem={renderRankingItem}
        keyExtractor={item => item.id.toString()}
      />
      </View>


    </SafeAreaView>
  </ScrollView>
  )
}