import { StyleSheet } from "react-native"
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
header: {
    height: 100,
    backgroundColor: Colors.MALTE,
},
logoImage:{
    height: 60,
    width: 60,
    marginTop: 35,
    marginLeft: 270,
    
  },
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
ranking:{
    width: '100%', 
    justifyContent: 'center',
    height: 300,
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
    
    flex: 1,
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

/** Sub Ranking */
  containerList:{
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.BRANCO,
  },
  
  titulo: {
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 50,
    fontSize: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.AZURE,
    borderBottomWidth: 1,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.MALTE,
  },
  lastMessage: {
    fontSize: 16,
    color: Colors.AZURE,
    marginTop: 5,
  },
  onlineText: {
    textAlign: 'right',
    marginRight: 20,
    color: Colors.AZUL_PACIFICO, 
  },
    onlineStatus: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green', 
    marginLeft: 1,
  }

})

export default styles;