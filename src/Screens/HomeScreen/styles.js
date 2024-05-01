import React from 'react';
import { StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';

export const styles = StyleSheet.create({
    header: {
      height: 100,
      backgroundColor: Colors.MALTE,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.BRANCO,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button:{
      backgroundColor: Colors.AZURE,
      justifyContent: 'center', 
      alignItems: 'center',
      maxWidth: 90,
      marginLeft: 140,
      borderRadius: 10,
    },
    image: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.OURO,
        borderRadius: 15,
    },
    logoImage:{
      height: 60,
      width: 60,
      marginTop: 35,
      marginLeft: 270,
      
      
    },
    textTopic:{
      fontSize: 25,
      color: Colors.MALTE,
      marginLeft: 15,
      marginTop: 20,
  
    },
    textSubTopic:{
      fontSize: 15,
      color: Colors.AZURE,
      marginTop: -5,
      textAlign: 'left',
      marginLeft: 15,
    },
  
  /** CARROSEL DE RANKING */
    CarouselContainerItem:{
      borderRadius: 0,
      height: 200,
      padding: 20,
      
      alignItems: 'center',
      justifyContent: 'center'
  
    },
  
    CarouselTitle1:{
      fontSize: 14,
      fontWeight: 'bold',
      color: Colors.AZURE,
      marginTop: -30,
  
    },
  
    CarouselTitle2:{
      fontSize: 14,
      fontWeight: 'bold',
      color: Colors.AZURE,
      marginTop: 10,
      marginLeft: -200,
      textAlign: 'left'
      
  
    },
  
    CarouselTitle3:{
      fontSize: 14,
      fontWeight: 'bold',
      color: Colors.AZURE,
      marginTop: -17,
      marginLeft: 200,
      textAlign: 'rigth'
  
    },
  
    CarouselImageOuro:{
      width: '100%',
      height: 100,
      width: 100,
      borderRadius: 200,
      borderColor: Colors.OURO,
      borderWidth: 5,
      resizeMode: 'cover',
    },
  
    CarouselImagePrata:{
      width: '100%',
      height: 80,
      width: 80,
      borderRadius: 160,
      borderColor: Colors.PRATA,
      borderWidth: 5,
      resizeMode: 'cover',
  
      marginTop: -65,
      marginLeft: -200
    },
  
    CarouselImageBronze:{
      width: '100%',
      height: 80,
      width: 80,
      borderRadius: 160,
      borderColor: Colors.COBRE,
      borderWidth: 5,
      resizeMode: 'cover',
  
      marginTop: -95,
      marginLeft: 200
    },
  
    ImageEmblema1:{
      width: 35,
      height: 35,
      marginTop: -20,
      position: 'flex',
    },
  
    ImageEmblema2:{
      width: 35,
      height: 35,
      marginTop: -20,
      position: 'flex',
      marginLeft: -200
    },
  
    ImageEmblema3:{
      width: 35,
      height: 35,
      marginTop: -20,
      position: 'flex',
      marginLeft: 200
    },


  /** CARROSEL DE CATEGORIAS */
  CarouselContainerItemCategories:{
    borderRadius: 0,
    height: 150,
    padding: 20,
    
    alignItems: 'center',
    justifyContent: 'center'

  },
  subContainerCategories:{
    alignItems: 'center',
    alignContent: 'space-between'
  },
  ContainerImagesCategories:{
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: -10,
  },

  CarouselCategoriasImage1:{
    width: '100%',
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: Colors.AZUL_IRIS,
    borderWidth: 2,
    resizeMode: 'cover',
    marginLeft: -10,

  },
  CarouselCategoriasImage2:{
    width: '100%',
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: Colors.AZUL_IRIS,
    borderWidth: 2,
    resizeMode: 'cover',
    marginLeft: 15,

  },
  CarouselCategoriasImage3:{
    width: '100%',
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: Colors.AZUL_IRIS,
    borderWidth: 2,
    resizeMode: 'cover',
    marginLeft: 15,

  },

  CarouselTitleCategorie:{
    color: Colors.MALTE,
    marginLeft: -10,
    maxWidth: 90
  },
  CarouselTitleCategorie2:{
    color: Colors.MALTE,
    marginLeft: 10,
    maxWidth: 90
  },
  CarouselTitleCategorie3:{
    color: Colors.MALTE,
    marginLeft: 10,
    maxWidth: 90
  },

  });


  export default styles;
  