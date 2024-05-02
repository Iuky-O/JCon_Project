import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

export const styles = StyleSheet.create({
    chat: {
      flex: 1,
      backgroundColor: Colors.TURQUESA_CLARO, 
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.BRANCO,
      padding: 10,
      paddingTop: 40,
    },
    titleContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      flex: 2,
    },
    backButton: {
      position: 'absolute',
      left: 5,
      top: -10,
    },
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.MALTE,
    },
    onlineStatus: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'green', 
      marginLeft: 1,
      justifyContent: 'center',
    },
    onlineText: {
      textAlign: 'center',
      color: Colors.AZUL_MARINHO,
      paddingRight: 10, 
    },
    inputToolbar: {
      backgroundColor: Colors.BRANCO,
      flexDirection: 'row',
      borderRadius: 15,
      width: '90%',
      alignSelf: 'center',
      padding: 10,
      top: -10,
      borderWidth: 0.5,
      borderColor: '#C0C0C0',
    },
    textInput: {
      flex: 1,
      color: 'black',
      fontSize: 16,
    },
    sendButton: {
      marginLeft: 10,
    },
  });

  export default styles;