import { StyleSheet } from "react-native"
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 110,
    backgroundColor: Colors.MALTE,
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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems:"center",

  },
  lineSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.AZUL_IRIS,
  },
  containerProfile:{
    flex: 1,
    flexDirection: "column",
    height: 300,
    alignItems: 'center',
    alignContent: 'center'

  },
  containerAval:{
    flex:1, 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: -20
  },
  stars:{
    flex: 1, 
    flexDirection:'row', 
    gap: 10, 
    marginTop: 5,
    alignItems: 'center',
    maxHeight: 30,
    paddingHorizontal: 100
  },
  containerImg: {
    height: 90, 
    width:90, 
    borderRadius: 50, 
    marginTop: 20
  },
  containerTopics:{
    flex: 1, 
    flexDirection: 'row', 
    gap: 17,
    alignItems: 'center',
  },
  TextTopics:{
    color: Colors.MALTE,
    fontWeight: 'bold',
    fontSize: 15
  },
  TextSubTopics:{
    color: Colors.MALTE,
    fontSize: 15,
    opacity: 0.5
  },
  lineSeparatorColumn:{
    height: '50%', 
    width: 1, 
    backgroundColor: Colors.AZUL_IRIS,
  },
  textTitle:{
    fontSize:30,
    color: Colors.AZUL_MARINHO,
  },
  textSubtitle:{
    fontSize:20,
    marginTop:30,
    fontWeight: 'bold',
    color:Colors.MALTE,
  },
  textTopic:{
    fontSize: 17,
    marginTop:30,
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
    fontWeight:"bold",
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
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 0,
    width: "100%",
    padding: 20,
    marginTop: 10
  },
  postImage:{
    margin:10,
    height:130,
    width:130,
  },
  buttonFloat:{
    alignItems: 'center', 
    marginTop: 100, 
    position: 'absolute', 
    right: 40, 
    top: -50
  },


  containerAvaliacao:{
    flex:1,
    backgroundColor: Colors.TURQUESA_CLARO,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  avaliacaoFull:{
    flex:1, 
    flexDirection: 'column', 
    gap: 10, 
    padding: 10, 
    backgroundColor: Colors.BRANCO, 
    borderRadius: 10, 
    marginBottom: 10, 
    maxWidth: '90%',
    width: '90%'
  },
  textAvaliacao:{
    fontWeight: 'bold',
  },
  textUser:{
    color: Colors.AZUL_MARINHO,
    fontWeight: 'bold',
  },
  topicButtomActive:{
    fontWeight: 'bold', 
    borderBottomWidth: 1, 
    borderColor: Colors.AZUL_IRIS
  },
  iconesAvaliacao:{
    direction: 'rtl',
    marginTop: 100, 
    position: 'absolute', 
    right: 10, 
    bottom: 100,
  },
});
export default styles

