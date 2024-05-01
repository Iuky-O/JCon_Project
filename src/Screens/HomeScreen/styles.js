import React from 'react';
import { StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';

export const styles = StyleSheet.create({
    header: {
      height: 80,
      backgroundColor: Colors.MALTE,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.BRANCO,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.OURO,
        borderRadius: 15,
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
      marginLeft: 15,
    },
  
  
  
  
  
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
    }
  });


  export default styles;
  