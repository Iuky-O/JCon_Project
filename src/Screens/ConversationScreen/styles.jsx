import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.BRANCO,
    },
    titulo: {
      textAlign: 'left',
      marginLeft: 10,
      marginTop: 30,
      fontSize: 30,
      color: Colors.AZUL_MARINHO,
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
  });

  export default styles;