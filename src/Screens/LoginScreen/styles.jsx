import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';

export const styles = StyleSheet.create({
    corpo: { 
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 40,
        color: Colors.MALTE,
        marginRight: 250, // Margem à direita
        marginTop: 300, // Margem superior
        marginLeft: 20, // Margem à esquerda
    },
    subtitulo: {
        fontSize: 20,
        color: Colors.AZUL_IRIS,
        marginLeft: 20, // Margem à esquerda
    },
    iconemail: {
        color: Colors.AZUL_IRIS,
    },
    iconsenha: {
        color: Colors.AZUL_IRIS,
    },
    email: {
        backgroundColor: Colors.BRANCO,
        borderRadius: 10, // Raio da borda
        borderColor: Colors.AZUL_PACIFICO,
        borderWidth: 1, // Largura da borda
        marginTop: 30, // Margem superior ******ATENÇÃO****** ALTERAR SE POR OS ICONES
        width: '90%', // Largura
        paddingHorizontal: 10, // Preenchimento horizontal
    },
    senha: {
        backgroundColor: Colors.BRANCO,
        borderRadius: 10, // Raio da borda
        borderColor: Colors.AZUL_PACIFICO,
        borderWidth: 1, // Largura da borda
        marginTop: 30, // Margem superior ******ATENÇÃO****** ALTERAR SE POR OS ICONES
        width: '90%', // Largura
        paddingHorizontal: 10, // Preenchimento horizontal
    },
    redefinirsenha: {
        color: Colors.AZUL_IRIS,
        marginTop: 20, // Margem superior
    },
    botao: {
        backgroundColor: Colors.MALTE,
        borderRadius: 10, // Raio da borda
        padding: 10, // Preenchimento
        width: '60%', // Largura
        alignItems: 'center',
        marginTop: 60, // Margem superior
    },
    botaotxt : {
        color: Colors.BRANCO,
    },
    naotemconta: {
        marginTop: 10, // Margem superior
        color: Colors.AZUL_IRIS,
    },
    cadastrar: {
        color: Colors.MALTE,
    },
});

export default styles;
