import { StyleSheet } from "react-native"
import Colors from '../Utils/Colors';

const styles = StyleSheet.create({
    header: {
        height: 110,
        backgroundColor: Colors.MALTE,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        marginTop: 35,
        fontSize: 25,
        color: Colors.BRANCO,
      },
    container: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: Colors.TURQUESA_CLARO,
        alignItems: "center",
        marginTop: 200,
        borderTopLeftRadius: 50,
        borderTopRightRadius:50,
    }
});

export default styles