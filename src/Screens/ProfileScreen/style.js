import { StyleSheet } from "react-native"
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 110,
    backgroundColor: Colors.AZUL_MARINHO,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  iconBack: {
    marginTop: 35,
    color: Colors.BRANCO,
  },
  imgLogo: {
    width: 70,
    height: 70,
    marginTop: 35,
  },
  container: {
   flex:1,
    backgroundColor: Colors.TURQUESA_CLARO,
    height:700,
    borderRadius:30,

  },
  lineSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.AZUL_IRIS,
  },
  containerImg: {
    flex: 1,
    flexDirection: "column",
    height: 400,
  },
  textTitle:{
    fontSize:40,
    justifyContent:"center",
    color: Colors.AZUL_MARINHO
  },
  Button:{
    backgroundColor: Colors.MALTE,
    maxWidth: 300,
    width: 200,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
  },
  lineSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.AZUL_IRIS,
  },
  buttomText:{
    margin:10,
    color: Colors.BRANCO,
    fontStyle:"bold",
    fontSize:20,
  },

});
export default styles

