import { View, Text, Image, Button} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import styles from './../HomeScreen/styles';
import Colors from '../../Utils/Colors';


export default function HomeScreen({navigation}) {
  /** Carrosel para ranking */
  const carouselItemsRanking = [
    {
      categorie: 'Bom atendimento',

      title: 'Flor laranja',
      image: 'https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg',

      title2: 'Flor branca',
      image2: 'https://s2-casavogue.glbimg.com/tZPbYNnBG8vItsVBL3zRLyShvtQ=/0x0:2121x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/x/F/Bl0O2SQAib1h38yryioA/copo-de-leite.jpg',

      title3: 'Flor azul',
      image3: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/24/1832201343-20-flores-azuis-que-nem-parecem-de-verdade-dimitrios-pikros-eyeem-getty-images.jpg',
    
    },

    {
      categorie: 'Educação',

      title: 'Flor rosa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUBdmlQWesXBRSGVg1xa5av8CVOedNbjfLr52-OvgmQ&s',
    
      title2: 'Flor branca',
      image2: 'https://s2-casavogue.glbimg.com/tZPbYNnBG8vItsVBL3zRLyShvtQ=/0x0:2121x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/x/F/Bl0O2SQAib1h38yryioA/copo-de-leite.jpg',

      title3: 'Flor azul',
      image3: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/24/1832201343-20-flores-azuis-que-nem-parecem-de-verdade-dimitrios-pikros-eyeem-getty-images.jpg',
    
    },

    {
      categorie: 'Responsabilidade',

      title: 'Flor azul',
      image: 'https://s2-casaejardim.glbimg.com/igJHNcW-nU_4DXByYyvwDvcEfzM=/0x0:1280x853/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/z/J/qCwpURTI2FbVpOjNqBAg/flor-azul-bela-emilia-plumbago-auriculata-pixabay.jpg',
    
      title2: 'Flor branca',
      image2: 'https://s2-casavogue.glbimg.com/tZPbYNnBG8vItsVBL3zRLyShvtQ=/0x0:2121x1414/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/x/F/Bl0O2SQAib1h38yryioA/copo-de-leite.jpg',

      title3: 'Flor azul',
      image3: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/10/24/1832201343-20-flores-azuis-que-nem-parecem-de-verdade-dimitrios-pikros-eyeem-getty-images.jpg',
    
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

 /** Carrosel para categorias */
 const carouselItemsCategories = [
  {
    title: 'Limpeza',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcKHwAQO5rNAw4T6TBWa8k_SgCafYQrkfHs7gkbx4Aw&s',

    title2: 'Manuntenção',
    image2: 'https://blog.milium.com.br/wp-content/uploads/2020/10/Caixa-de-Ferramentas-Blog-Post-Milium-Out20-02-1.jpg',

    title3: 'Alimentação',
    image3: 'https://i0.statig.com.br/bancodeimagens/5x/mt/io/5xmtiorjj2om9lylir01bkbgd.jpg',

  },

  {
    title: 'Construção',
    image: 'https://y8n8m5v4.rocketcdn.me/wp-content/uploads/2019/12/mercado-da-constru%C3%A7%C3%A3o-civil-em-crescimento.png',

    title2: 'Beleza',
    image2: 'https://www.cosmeticosalamoda.com/cdn/shop/articles/blog_b_7.png?v=1682999816&width=1200',

    title3: 'Jardinagem',
    image3: 'https://blog.cobasi.com.br/wp-content/webpc-passthru.php?src=https://blog.cobasi.com.br/wp-content/uploads/2021/03/artigos-para-jardinagem-capa.png&nocache=1',
  
  },

  {
    title: 'Informática',
    image: 'https://static6.depositphotos.com/1006753/572/i/450/depositphotos_5729566-stock-photo-computers-standing-in-a-row.jpg',
    
    title2: 'Educação',
    image2: 'https://blog.porte.com.br/wp-content/uploads/2023/05/1617841867830-tipo-de-educacao.jpeg',

    title3: 'Segurança',
    image3: 'https://regionalseguranca.com.br/wp-content/uploads/2020/07/seguran%C3%A7a-patrimonial.jpg',
  
  },

  {
    title: 'Transporte',
    image: 'https://static.vecteezy.com/ti/vetor-gratis/p3/11457021-oito-meios-de-transporte-gratis-vetor.jpg',
    
    title2: 'Cuidado',
    image2: 'https://pplware.sapo.pt/wp-content/uploads/2020/07/cuidador_00.jpg',

    title3: 'Comunicação e atendimento',
    image3: 'https://blog.milvus.com.br/wp-content/uploads/148857-como-o-atendimento-ao-cliente-pode-ser-uma-ferramenta-estrategica-de-negocio.jpg',
  
  },

];

function renderItemsCategories({item}){
  return(
    <View>
      <View style={styles.CarouselContainerItemCategories}>

        <View style={styles.ContainerImagesCategories}>

          <View style={styles.subContainerCategories}>
            <Image style={styles.CarouselCategoriasImage1} source={{uri:`${item.image}`}}/>
            <Text style={styles.CarouselTitleCategorie}>{item.title}</Text>
          </View>

          <View style={styles.subContainerCategories}>
            <Image style={styles.CarouselCategoriasImage2} source={{uri:`${item.image2}`}}/>
            <Text style={styles.CarouselTitleCategorie2}>{item.title2}</Text>
          </View>

          <View style={styles.subContainerCategories}>
            <Image style={styles.CarouselCategoriasImage3} source={{uri:`${item.image3}`}}/>
            <Text style={styles.CarouselTitleCategorie3}>{item.title3}</Text>
          </View>

        </View>
        


      </View>
    </View>
  );
}


  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.logoImage} source={require('../../../assets/images/logo-azul-claro.jpg')}/>
      </View>
      
      <Text style={styles.textTopic}>Ranking</Text> 
      <Carousel 
        layout={''}
        layoutCardOffset={30}
        data={carouselItemsRanking} 
        sliderWidth={360}
        itemWidth={370}
        renderItem={renderItemsRanking}

      />

      <View style={styles.Button}>
      <Button
        title="Ver mais"
        color={Colors.AZURE} 
        onPress={() => navigation.navigate('Ranking')}
      />
      </View>

      <Text style={styles.textTopic}>Categorias</Text> 
      <Carousel 
        layout={''}
        layoutCardOffset={30}
        data={carouselItemsCategories} 
        sliderWidth={360}
        itemWidth={370}
        renderItem={renderItemsCategories}
      />

      <Text style={styles.textTopic}>Vagas</Text> 

    </View>
  )
} 