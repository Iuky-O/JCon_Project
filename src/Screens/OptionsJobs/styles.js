import { StyleSheet } from "react-native"
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: '100%',
        height: '100%'
    
      },
    textSubtitle:{
        fontSize:20,
        marginTop:30,
        fontWeight: 'bold',
        color:Colors.MALTE,
        textTransform: 'uppercase',
    },
    lineSeparator: {
        height: 2,
        width: "90%",
        backgroundColor: Colors.AZUL_IRIS,
    },
    lineSeparator2: {
        height: 1,
        width: "90%",
        backgroundColor: Colors.AZUL_IRIS,
        opacity: 0.5
    },
    topic:{
        fontSize: 25,
        color: Colors.AZUL_MARINHO,
        marginTop: 10,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    botao:{
        backgroundColor: Colors.MALTE,
        borderRadius: 10, 
        padding: 10, 
        width: '60%', 
        alignItems: 'center',
        marginTop: 30,
    },
    botaotxt : {
        color: Colors.BRANCO,
    },
    topicButtomActive:{
        fontWeight: 'bold', 
        borderBottomWidth: 1, 
        borderColor: Colors.AZUL_IRIS
    },
    textTopic:{
        fontSize: 17,
        marginTop:60,
        color:Colors.MALTE,
    },
    textAvaliacao:{
        fontWeight: 'bold',
    },

    containerFull:{
        backgroundColor: Colors.BRANCO,
        width: "90%"
    },
    containerAva:{
        flex:1,
        backgroundColor: Colors.TURQUESA_CLARO,
        borderRadius:30,
        alignItems: 'center',
        width: '90%',
        height:'90%',
    },
    avaliacaoFull:{
        flex:1, 
        flexDirection: 'column', 
        gap: 10, 
        borderRadius: 10, 
        marginBottom: 10, 
        maxWidth: '90%',
        width: '90%'
    },
    textUser:{
        color: Colors.AZUL_MARINHO,
        fontWeight: 'bold',
        fontSize: 15,
    },
    subContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        gap: 15, 
        marginBottom: 10, 
        marginTop: -30,
    },
    textP:{
        fontWeight: 'bold'
    },
})

export default styles;