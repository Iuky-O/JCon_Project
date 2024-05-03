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
    width: 50,
    height: 70,
    marginTop: 35,
  },
  viewBusca: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    margin: 10,
    paddingTop: 20,
  },
  inputBusca: {
    flex: 1,
    backgroundColor: Colors.BRANCO,
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 15,

  },
  boxTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    marginLeft: 20,
    marginRight: 30,
  },
  textTitle: {
    color: Colors.MALTE,
    fontSize: 30,
    marginBottom: 10,
  },
  textFiltrar: {
    marginTop: 20,
    color: Colors.AZUL_PACIFICO,
  },
  viewTitle: {
    width: "50%",
    padding: 2,
    marginHorizontal: 150,
    backgroundColor: Colors.AZUL_CELESTE,
  },
  item: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: Colors.MALTE,
    width: "95%",
    padding: 25,
    borderRadius: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 15,
    width:"50%",
  },
  title: {
    fontSize: 18,
    color: Colors.BRANCO,
    maxWidth: 200
  },
  subtitle: {
    marginTop: 10,
    fontSize: 12,
    color: Colors.BRANCO,
    maxWidth: 300,
  },
  Button:{
    backgroundColor: Colors.AZUL_PACIFICO,
    maxWidth: 80,
    width: 50,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 95,
    marginLeft: -20,
  },
  buttomText:{
    color: Colors.BRANCO,
  },
  NameSu:{
    color: Colors.BRANCO
  },
  ContainerImage:{
    alignItems: 'center'

  },
});
export default styles