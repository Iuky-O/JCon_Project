import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

export const styles = StyleSheet.create({
    logoContainer: {   
      display: 'flex',
      alignItems: 'center', 
      marginTop: 50, 
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
    },
    corpo: { 
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 40,
        color: Colors.MALTE,
        marginTop: 70,
        marginLeft: 20,
    },
    subtitulo: {
        fontSize: 20,
        color: Colors.AZUL_IRIS,
        marginLeft: 20,
    },
    entrada: {
        backgroundColor: Colors.BRANCO,
        borderRadius: 10,
        borderColor: Colors.AZUL_PACIFICO,
        borderWidth: 1, 
        marginTop: 30, 
        width: '90%', 
        paddingHorizontal: 10, 
    },
    redefinirsenha: {
        color: Colors.AZUL_IRIS,
        marginTop: 20, 
    },
    botao: {
        backgroundColor: Colors.MALTE,
        borderRadius: 10, 
        padding: 10, 
        width: '60%', 
        alignItems: 'center',
        marginTop: 60, 
    },
    botaotxt : {
        color: Colors.BRANCO,
    },
    naotemconta: {
        marginTop: 10, 
        marginBottom: 50,
        color: Colors.AZUL_IRIS,
    },
    cadastrar: {
        color: Colors.MALTE,
    },
});

export default styles;
