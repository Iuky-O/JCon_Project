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
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.TURQUESA_CLARO,
    alignItems: "center",
    marginTop: 100,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  lineSeparator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.AZUL_IRIS,
  },
});
export default styles

