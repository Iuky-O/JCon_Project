import { View, Text, Image, Button, SafeAreaView, ScrollView,  Animated, Dimensions} from 'react-native';
import React, { useState } from 'react';
import Carousel,{ Pagination } from 'react-native-snap-carousel';
import styles from './../HomeScreen/styles';
import Colors from '../../Utils/Colors';

import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'react-native';


export default function HomeScreen({navigation}) {

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
      <View style={{}}>
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

    title3: 'Comunicação',
    image3: 'https://blog.milvus.com.br/wp-content/uploads/148857-como-o-atendimento-ao-cliente-pode-ser-uma-ferramenta-estrategica-de-negocio.jpg',
  
  },

];

function renderItemsCategories({item}){
  return(
    <View>
      <View style={styles.CarouselContainerItemCategories}>

        <View style={styles.ContainerImagesCategories}>

          <View style={styles.subContainerCategories}>
            <Image style={styles.CarouselCategoriasImage} source={{uri:`${item.image}`}}/>
            <Text style={styles.CarouselTitleCategorie}>{item.title}</Text>
          </View>

          <View style={styles.subContainerCategories}>
            <Image style={styles.CarouselCategoriasImage} source={{uri:`${item.image2}`}}/>
            <Text style={styles.CarouselTitleCategorie}>{item.title2}</Text>
          </View>

          <View style={styles.subContainerCategories}>
            <Image style={styles.CarouselCategoriasImage} source={{uri:`${item.image3}`}}/>
            <Text style={styles.CarouselTitleCategorie}>{item.title3}</Text>
          </View>

        </View>
      

      </View>
    </View>
  );
}

 /** Carrosel para vagas*/
 const carouselItemsJobs = [
  {
    titleJob: ' Serviço de Faxina',
    local: ' 1901 Thornridge Cir. Shiloh, Hawaii 81063',
    date: ' 01/01/2024',
    description: 'Estamos à procura de um profissional de limpeza dedicado e experiente para se juntar à nossa equipe. O candidato ideal será responsável por manter nossas instalações limpas e organizadas, garantindo um ambiente seguro e higienizado para funcionários e clientes.',
    requisite: 'Ser pontual, limpo e ter organização',
    money: '100 hora',
    sub: ' Antônio Marcos',

  },

  {
    titleJob: ' Manuntenção de Computadores',
    local: ' Castanhal, PA, n° 144',
    date: ' 02/05/2024',
    description: 'Estamos em busca de um técnico em manutenção de computadores talentoso e dedicado para se juntar à nossa equipe. O candidato ideal será responsável por diagnosticar, reparar e realizar a manutenção preventiva em computadores e sistemas relacionados, garantindo o bom funcionamento e desempenho dos equipamentos.',
    request: 'Ser Tec. Informática',
    money: '100 hora',
    sub: ' Maria Sena',
  },

  {
    titleJob: ' Babá',
    local: ' Castanhal, PA, n° 144',
    date: ' 30/04/2024',
    description: 'Estamos buscando uma babá amorosa e confiável para cuidar de nossos filhos. O candidato ideal será alguém que adore crianças, tenha experiência em cuidar delas e esteja comprometido em proporcionar um ambiente seguro, acolhedor e estimulante.',
    request: 'Gostar de crianças, ser gentil, saber cozinhar.',
    money: '100 hora',
    sub: ' Antônio Marcos',

  },

  {
    titleJob: ' Contabilidade',
    local: ' Castanhal, PA, n° 144',
    date: ' 30/04/2024',
    description: 'Estamos à procura de um assistente de contabilidade dedicado e organizado para se juntar à nossa equipe. O candidato ideal será responsável por auxiliar nas atividades contábeis e financeiras da empresa, garantindo a precisão e integridade dos registros contábeis.',
    request: 'Ter ensino médio completo',
    money: '100 hora',
    sub: ' Andreia Luana',

  },

];

function renderItemsJobs({item}){
  return(
    <View>
      <View style={styles.CarouselContainerItemJobs}>

        <View>

          <View style={styles.subContainerJobs}>

            <Text style={styles.CarouselTitleJobs}>{item.titleJob}</Text>

            <Text style={styles.CarouselSubTitleJobs}>
              <FontAwesome6 name="location-dot" size={15} color={Colors.MALTE}/>
              {item.local}
            </Text>

            <Text style={styles.CarouselSubTitleJobs}>
              <FontAwesome name="calendar" size={15} color={Colors.MALTE}/>
              {item.date}
            </Text>

            <View style={styles.buttomJob}>
              <Text style={styles.buttomText} 
                    onPress={() => navigation.navigate('JobsDesc', {JobTitle: item.titleJob, 
                                                                    JobLocal: item.local, 
                                                                    JobDate: item.date,
                                                                    JobDesc: item.description,
                                                                    JobRequisite: item.requisite,
                                                                    JobMoney: item.money,
                                                                    JobSub: item.sub})}>Mais</Text>
            </View>
          </View>

        </View>
        


      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const [index, setIndex] = React.useState(0)
const isCarousel = React.useRef(null)

  return (
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.logoImage} source={require('../../../assets/images/logo-azul-claro.jpg')}/>
        </View>

        <SafeAreaView style={styles.container}>

          <View style={{width: '100%', flex:1}}>
            <Text style={styles.textTopic}>Ranking</Text> 
            <Carousel 
              layout={''}
              layoutCardOffset={30}
              data={carouselItemsRanking} 
              sliderWidth={windowWidth}
              itemWidth={windowWidth}
              renderItem={renderItemsRanking}
              onSnapToItem ={( index ) => setIndex ( index )} 
              useScrollView ={ true } />  

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


            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.Button}>
                <Text style={styles.buttomText} onPress={() => navigation.navigate('Ranking')}> Ver Mais </Text>
              </View>
            </View>

          </View>


          <View style={{width: '100%', flex:1}}>
            <Text style={styles.textTopic}>Categorias</Text> 
            <Carousel 
              layout={''}
              layoutCardOffset={30}
              data={carouselItemsCategories} 
              sliderWidth={windowWidth}
              itemWidth={380}
              renderItem={renderItemsCategories}
            />
          </View>

          <View style={{width: '100%', flex:1}}>
            <Text style={styles.textTopic}>Vagas</Text>
            <Carousel 
              layout={''}
              layoutCardOffset={30}
              data={carouselItemsJobs} 
              sliderWidth={windowWidth}
              itemWidth={windowWidth}
              renderItem={renderItemsJobs}
            /> 
          </View>

        </SafeAreaView>
      </ScrollView>
  )
} 