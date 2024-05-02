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
    /*padding: 10,
    */
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
    marginLeft: 25,
  },
  title: {
    fontSize: 18,
    color: Colors.BRANCO,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 12,
    color: Colors.BRANCO,
  },
});
export default styles