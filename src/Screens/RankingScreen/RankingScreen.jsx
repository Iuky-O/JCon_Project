import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList, Dimensions, Alert } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styles from '../RankingScreen/styles';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';



export default function RankingScreen({navigation}) {
  /** Carrosel para ranking */

const windowWidth = Dimensions.get('window').width;
const [index, setIndex] = React.useState(0)
const isCarousel = React.useRef(null)

const [currentRankingIndex, setCurrentRankingIndex] = React.useState(0);

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

          <Text style={styles.CarouselTitle1} onPress={() => navigation.navigate('ExteProfile', { 
                                                                                            Nome: item.title, 
                                                                                            Imagem: item.image})}>{item.title}</Text>
          <Text style={styles.CarouselTitle2} onPress={() => navigation.navigate('ExteProfile', { 
                                                                                            Nome: item.title2, 
                                                                                            Imagem: item.image2})}>{item.title2}</Text>
          <Text style={styles.CarouselTitle3} onPress={() => navigation.navigate('ExteProfile', { 
                                                                                            Nome: item.title3, 
                                                                                            Imagem: item.image3})}>{item.title3}</Text>

        </View>

        
      </View>
    );
  }

  const subRanking = 
  {
    listAtendimento:[
    {
      id: 4,
      title: 'Ananda T.',
      image: 'https://assets.propmark.com.br/uploads/2022/02/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg',
      direction: 0
    },
    {
      id: 5,
      title: 'Juliano Lima',
      image: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/03/05/1663126779-homem-do-signo-de-aquario.jpg',
      direction: 1
    },
    {
      id: 6,
      title: 'Aline Costa',
      image: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg',
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
      title: 'Kevin V.',
      image: 'https://media.istockphoto.com/id/1285124274/pt/foto/middle-age-man-portrait.jpg?s=170667a&w=0&k=20&c=AH3osfIGIk9uw9SQV5YWr9glq49DXaGhS1yO_9tdHv4=',
      direction: 0
    },
    {
      id: 9,
      title: 'Wilson Kley',
      image: 'https://media.istockphoto.com/id/1289461335/pt/foto/portrait-of-a-handsome-black-man.webp?b=1&s=170667a&w=0&k=20&c=RWxixQQ9h0PoUpppk1mO4aiRk58t_Ai8jh7W9z7OStE=',
      direction: 1
    },
    {
      id: 10,
      title: 'Aline Palha',
      image: 'https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg',
      direction: -1
    },
  ],
    listEducacao:[
      {
        id: 4,
        title: 'Wilson Kley',
        image: 'https://media.istockphoto.com/id/1289461335/pt/foto/portrait-of-a-handsome-black-man.webp?b=1&s=170667a&w=0&k=20&c=RWxixQQ9h0PoUpppk1mO4aiRk58t_Ai8jh7W9z7OStE=',
        direction: 1
      },
      {
        id: 5,
        title: 'Juliana Trindade',
        image: 'https://cajamar.sp.gov.br/noticias/wp-content/uploads/sites/2/2021/08/ed5d55c8-3966-4114-8ce4-9b9d0d25effd.png',
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
        title: 'Katia Vasconcelos',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJ6nB_jIYJ0jueSYgzhJP3BJWTgd6pZRPegHkoxjkuXgk7zIT1m21J8YXcYNu01Go9Jc&usqp=CAU',
        direction: 0
      },
      {
        id: 8,
        title: 'Ananda T.',
        image: 'https://assets.propmark.com.br/uploads/2022/02/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg',
        direction: 1
      },
      {
        id: 9,
        title: 'Aline Costa',
        image: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg',
        direction: -1
      },
      {
        id: 10,
        title: 'Kevin V.',
        image: 'https://media.istockphoto.com/id/1285124274/pt/foto/middle-age-man-portrait.jpg?s=170667a&w=0&k=20&c=AH3osfIGIk9uw9SQV5YWr9glq49DXaGhS1yO_9tdHv4=',
        direction: 0
      },
    ],
    listResponsabilidade:[
        {
          id: 4,
          title: 'Katia Vasconcelos',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJ6nB_jIYJ0jueSYgzhJP3BJWTgd6pZRPegHkoxjkuXgk7zIT1m21J8YXcYNu01Go9Jc&usqp=CAU',
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
          title: 'Aline Costa',
          image: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/03/05/675x450/1_cbpfot020320212188-6556336.jpg',
          direction: -1
        },
        {
          id: 7,
          title: 'Ananda T.',
          image: 'https://assets.propmark.com.br/uploads/2022/02/WhatsApp-Image-2022-02-18-at-08.52.06.jpeg',
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
          title: 'Juliano Lima',
          image: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/03/05/1663126779-homem-do-signo-de-aquario.jpg',
          direction: 1
        },
        {
          id: 10,
          title: 'Kevin V.',
          image: 'https://media.istockphoto.com/id/1285124274/pt/foto/middle-age-man-portrait.jpg?s=170667a&w=0&k=20&c=AH3osfIGIk9uw9SQV5YWr9glq49DXaGhS1yO_9tdHv4=',
          direction: -1
        },

      ]
    };


  const renderSubRankingItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ExteProfile', { Nome: item.title, Imagem: item.image})}
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

  return (
    
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <View style={{width: '100%', justifyContent: 'center'}}>
          <Text style={styles.textTopic}>Ranking</Text> 
            <Carousel 
              layout={'default'}
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