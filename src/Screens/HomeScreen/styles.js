import React from 'react';
import { StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';

export const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      height: 110,
      backgroundColor: Colors.MALTE,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button:{
      backgroundColor: Colors.AZURE,
      alignItems: 'center',
      borderRadius: 10,
      height: 20,
      width: 90,
      marginTop: -15
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
      height: 50,
      width: 70,
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
      marginTop: 5,
      width: '100%',
      
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      
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
    height: 150,
    padding: 20,
    
    alignItems: 'center',
    justifyContent: 'center',

  },

  subContainerCategories:{
    alignItems: 'center',
    alignContent: 'space-between',

  },

  ContainerImagesCategories:{

    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 15,
    marginTop: -10,
    alignItems: 'center',
    marginLeft: -10
 
  },

  CarouselCategoriasImage:{
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: Colors.AZUL_IRIS,
    borderWidth: 2,
    resizeMode: 'cover',
  },

  CarouselTitleCategorie:{
    color: Colors.MALTE,
    maxWidth: 90
  },


  /** CARROSEL DE VAGAS */
  CarouselContainerItemJobs:{

    padding: 60,
    height: 130,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  subContainerJobs:{
    backgroundColor: Colors.TURQUESA_CLARO,
    width: '100%',
    width: 300,
    height: 80,
    maxWidth: 300,
    alignContent: 'space-between',
    borderRadius: 20,
  },

  buttomJob:{
    width: 60, 
    height: 20, 
    backgroundColor: Colors.MALTE,
    borderRadius: 40,
    alignItems: 'center',
    marginLeft: 210,
    marginTop: -5,
    
  },

  buttomText:{
    color: Colors.BRANCO,
  },

  CarouselTitleJobs:{
    fontSize: 15,
    color: Colors.MALTE,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  CarouselSubTitleJobs:{
    fontSize: 13,
    color: Colors.MALTE,
    marginLeft: 10,
    marginTop: 2

  },

  });


  export default styles;
  