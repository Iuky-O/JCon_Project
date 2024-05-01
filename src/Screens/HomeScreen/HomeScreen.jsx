import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';
import Carousel from 'react-native-snap-carousel';
import styles from './../HomeScreen/styles';

//import { Image } from 'react-native-web';

/**      <Image source={require('./../../../assets/images/logo-azul.jpg')}
        style={styles.image}
      />
       */

export default function HomeScreen() {
  const carouselItems = [
    {
      title: 'Flor laranja',
      image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg',

      title2: 'Flor branca',
      image2: 'https://s2-casavogue.glbimg.com/tZPbYNnBG8vItsVBL3zRLyShvtQ=/0x0:2121x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/x/F/Bl0O2SQAib1h38yryioA/copo-de-leite.jpg',

      title3: 'Flor azul',
      image3: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/24/1832201343-20-flores-azuis-que-nem-parecem-de-verdade-dimitrios-pikros-eyeem-getty-images.jpg',
    
    },

    {
      title: 'Flor rosa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUBdmlQWesXBRSGVg1xa5av8CVOedNbjfLr52-OvgmQ&s',
    
      title2: 'Flor branca',
      image2: 'https://s2-casavogue.glbimg.com/tZPbYNnBG8vItsVBL3zRLyShvtQ=/0x0:2121x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/x/F/Bl0O2SQAib1h38yryioA/copo-de-leite.jpg',

      title3: 'Flor azul',
      image3: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/24/1832201343-20-flores-azuis-que-nem-parecem-de-verdade-dimitrios-pikros-eyeem-getty-images.jpg',
    
    },

    {
      title: 'Flor azul',
      image: 'https://s2-casaejardim.glbimg.com/igJHNcW-nU_4DXByYyvwDvcEfzM=/0x0:1280x853/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/z/J/qCwpURTI2FbVpOjNqBAg/flor-azul-bela-emilia-plumbago-auriculata-pixabay.jpg',
    
      title2: 'Flor branca',
      image2: 'https://s2-casavogue.glbimg.com/tZPbYNnBG8vItsVBL3zRLyShvtQ=/0x0:2121x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/x/F/Bl0O2SQAib1h38yryioA/copo-de-leite.jpg',

      title3: 'Flor azul',
      image3: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/24/1832201343-20-flores-azuis-que-nem-parecem-de-verdade-dimitrios-pikros-eyeem-getty-images.jpg',
    
    },

  ];

  function renderItems({item}){
    return(
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
    );
  }

  return (
    <View>
      <View style={styles.header}>
      </View>
      
      <Text style={styles.textTopic}>Ranking</Text>
      <Text style={styles.textSubTopic}>Bom atendimento</Text>

      <Carousel 
        layout={''}
        layoutCardOffset={30}
        data={carouselItems} 
        sliderWidth={360}
        itemWidth={370}
        renderItem={renderItems}
      />

    </View>
  )
} 