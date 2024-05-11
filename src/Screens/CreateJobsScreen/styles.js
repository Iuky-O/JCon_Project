import { StyleSheet } from "react-native";
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
    container:{
        alignItems:'center', 
        marginTop: 100, 
        gap: 20,
        width: '100%'
    },
    containerInput:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1, 
        borderBottomColor: 
        Colors.AZUL_MARINHO, 
        width: '100%',
        maxWidth: 300,
        height: 50,        
    },
    buttonContainer:{
        flex: 1, 
        flexDirection: 'row', 
        gap: 50,
        marginBottom: 15,
    },
    button1:{
        backgroundColor: '#b0110a',
        alignItems: 'center',
        borderRadius: 20,
        height: 20,
        width: 100,
        marginTop: -15,
        marginTop: 10,
    },
    button2:{
        backgroundColor: Colors.AZURE,
        alignItems: 'center',
        borderRadius: 20,
        height: 20,
        width: 100,
        marginTop: -15,
        marginTop: 10,
    },
    containerLimit:{
        flex:1, 
        flexDirection: 'row', 
        alignContent: 'center', 
        alignItems: 'center',
    },
    containerText:{
        flex: 1, 
        flexDirection: 'row', 
        alignSelf:'flex-start', 
        marginLeft: 30, 
        marginBottom: -10
    },
})

export default styles;