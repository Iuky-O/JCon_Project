import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, Dimensions, Alert } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styles from '../RankingScreen/styles';

import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function RankingScreen({navigation}) {
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

  const subRanking = 
  {
    listAtendimento:[
    {
      id: 4,
      title: 'Juliana Trindade',
      image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
      direction: 0
    },
    {
      id: 5,
      title: 'Marcos M.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
      direction: 1
    },
    {
      id: 6,
      title: 'Aline Palha',
      image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
      direction: -1
    },
    {
      id: 7,
      title: 'Flora Arruda',
      image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
      direction: 0
    },
    {
      id: 8,
      title: 'Juliano Cunha',
      image: 'https://www.otempo.com.br/image/contentid/policy:1.2503902:1624581759/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f',
      direction: 0
    },
    {
      id: 9,
      title: 'Marcos M.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
      direction: 1
    },
    {
      id: 10,
      title: 'Aline Palha',
      image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
      direction: 1
    },
    {
      id: 11,
      title: 'Juliana Trindade',
      image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
      direction: -1
    },
    {
      id: 12,
      title: 'Flora Arruda',
      image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
      direction: -1
    },
  ],
    listEducacao:[
      {
        id: 4,
        title: 'esse',
        image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
        direction: 0
      },
      {
        id: 5,
        title: 'Marcos M.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
        direction: 1
      },
      {
        id: 6,
        title: 'Aline Palha',
        image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
        direction: -1
      },
      {
        id: 7,
        title: 'Flora Arruda',
        image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
        direction: 0
      },
      {
        id: 8,
        title: 'Juliano Cunha',
        image: 'https://www.otempo.com.br/image/contentid/policy:1.2503902:1624581759/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f',
        direction: 0
      },
      {
        id: 9,
        title: 'Marcos M.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
        direction: 1
      },
      {
        id: 10,
        title: 'Aline Palha',
        image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
        direction: 1
      },
      {
        id: 11,
        title: 'Juliana Trindade',
        image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
        direction: -1
      },
      {
        id: 12,
        title: 'Flora Arruda',
        image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
        direction: -1
      },
    ],
    listResponsabilidade:[
        {
          id: 4,
          title: 'aquele',
          image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
          direction: 0
        },
        {
          id: 5,
          title: 'Marcos M.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
          direction: 1
        },
        {
          id: 6,
          title: 'Aline Palha',
          image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
          direction: -1
        },
        {
          id: 7,
          title: 'Flora Arruda',
          image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
          direction: 0
        },
        {
          id: 8,
          title: 'Juliano Cunha',
          image: 'https://www.otempo.com.br/image/contentid/policy:1.2503902:1624581759/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f',
          direction: 0
        },
        {
          id: 9,
          title: 'Marcos M.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTry3-HbJ7pnlj3fF8U4Eii8Ul47Wn6BKOP0HuL3-ES91H1SgiHCi2DHRBlvc6ljfy8qVs&usqp=CAU',
          direction: 1
        },
        {
          id: 10,
          title: 'Aline Palha',
          image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
          direction: 1
        },
        {
          id: 11,
          title: 'Juliana Trindade',
          image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
          direction: -1
        },
        {
          id: 12,
          title: 'Flora Arruda',
          image: 'https://static.vecteezy.com/ti/fotos-gratis/t2/3542373-garota-sorridente-em-um-fundo-branco-gratis-foto.JPG',
          direction: -1
        },
      ]
    };


  const renderSubRankingItem = ({ item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Profile')}
    >
      <Text style={styles.itemId}>{item.id}</Text>
      <Image style={styles.avatar} source={{uri:`${item.image}`}}/>
      <View style={styles.textContainer}> 
        <Text style={styles.contactName}>{item.title}</Text>       
      </View>
      <View style={{padding: 10}}>
        {item.direction === 1 && <AntDesign name="caretup" size={15} color="green"/>}
        {item.direction === 0 && <AntDesign name="minus" size={15} color="black" />}
        {item.direction === -1 && <AntDesign name="caretdown" size={15} color="red"/>}
      </View>
    </TouchableOpacity>
  );

const windowWidth = Dimensions.get('window').width;
const [index, setIndex] = React.useState(0)
const isCarousel = React.useRef(null)

const [currentRankingIndex, setCurrentRankingIndex] = React.useState(0);

/**<ScrollView stickyHeaderIndices={[1]}> */
  return (
    
    <SafeAreaView style={styles.container}>
  
        <View style={styles.header}>
          <Image style={styles.logoImage} source={require('../../../assets/images/logo-azul-claro.jpg')}/>
        </View>

      <ScrollView>
        <View style={{width: '100%', justifyContent: 'center'}}>
          <Text style={styles.textTopic}>Ranking</Text> 
            <Carousel 
              layout={''}
              layoutCardOffset={30}
              data={carouselItemsRanking} 
              sliderWidth={windowWidth}
              itemWidth={windowWidth}
              renderItem={renderItemsRanking}
              onSnapToItem ={( index ) => setIndex ( index )} 
              useScrollView ={ true } 
              />  

              <Pagination
              dotsLength ={ carouselItemsRanking.length } 
              activeDotIndex ={ index } 
              carouselRef ={ isCarousel } 
              dotStyle ={{ 
                width: 20,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0, 
                backgroundColor : Colors.AZUL_PACIFICO}} 
              inactiveDotOpacity ={ 0.4 } 
              inactiveDotScale ={ 0.6 } 
              tappableDots ={ true }
              />
              
        </View>
      

        <View style={styles.containerList}>
        <FlatList
          data={carouselItemsRanking[index].categorie === 'Bom atendimento' ? subRanking.listAtendimento : 
                carouselItemsRanking[index].categorie === 'Educação' ? 
                subRanking.listEducacao : subRanking.listResponsabilidade}
          renderItem={renderSubRankingItem}
          keyExtractor={item => item.id.toString()}
          initialScrollIndex={index}
        />
        </View>
      
      </ScrollView>
    </SafeAreaView>
    

  )
}