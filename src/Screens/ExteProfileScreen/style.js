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
   //flex:1,
    backgroundColor: Colors.TURQUESA_CLARO,
    height:700,
    borderRadius:30,
    alignItems:"center",

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
    color: Colors.AZUL_MARINHO
  },
  textSubtitle:{
    fontSize:20,
    marginTop:30,
    fontWeight: 'bold',
    color:Colors.MALTE,
  },
  textInfo:{
    flexDirection:"row",
    margin:15,
    color:Colors.MALTE,
  },
  Button:{
    backgroundColor: Colors.MALTE,
    marginTop:30,
    maxWidth: 300,
    width: 300,
    height: 50,
    borderRadius: 20,
  alignItems: "center",
  },
  lineSeparator: {
    height: 1,
    width: "90%",
    backgroundColor: Colors.AZUL_IRIS,
  },
  buttomText:{
    marginTop:10,
    color: Colors.BRANCO,
    fontStyle:"bold",
    fontSize:20,
  },
  traco:{
    margin:10,
    maxWidth: 50,
    width: 50,
    height: 50,
    borderRadius: 100, 
    backgroundColor: Colors.MALTE,
  },
  post:{
    flexDirection: 'row',
    margin: 0,
    width: "100%",
    padding: 15,
  },
  postImage:{
    margin:5,
    height:140,
    width:130,
  },
});
export default styles

