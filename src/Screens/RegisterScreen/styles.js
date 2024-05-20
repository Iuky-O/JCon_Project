import { StyleSheet } from "react-native";
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
    logoContainerStep1: {   
    display: 'flex',
    alignItems: 'center', 
    marginTop: 50, 
  },
  logoStep1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
  },
  logoContainerStep2: {   
    display: 'flex',
    alignItems: 'center', 
    marginTop: 30, 
  },
  logoStep2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 250,
  },
  logoContainerStep3: {   
    display: 'flex',
    alignItems: 'center',  
  },
  logoStep3: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  corpo: {
    flex: 1, // Ocupa o espaço inteiro disponível
    justifyContent: "center",
    paddingHorizontal: 20, // Padding lateral para que os elementos não encostem nas bordas
  },
  textostep1: {
    textAlign: "center",
    color: Colors.MALTE,
    marginBottom: 40,
    fontSize: 30,
    marginTop: 20,
  },
  textostep2: {
    textAlign: "center",
    color: Colors.MALTE,
    fontSize: 30,
    marginTop: 20,
  },
  textostep3: {
    textAlign: "center",
    color: Colors.MALTE,
    fontSize: 30,
  },
  icons: {
    marginBottom: 20,
    borderColor: Colors.AZUL_IRIS,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.BRANCO,
  },
  textprestar: {
    color: Colors.AZUL_IRIS,
    alignSelf: 'center',
    fontSize: 18,
    position: 'absolute',
    color: '#808080',
  },
  textcontratar: {
    color: Colors.AZUL_IRIS,
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 18,
    position: 'absolute',
    color: '#808080',
  },
  checkboxContainer: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkboxText: {
    width: '80%',
  },
  Input: {
    color: Colors.AZUL_PACIFICO,
    backgroundColor: Colors.BRANCO,
    fontSize: 18,
    borderRadius: 10,
    borderColor: Colors.AZUL_IRIS,
    borderWidth: 1,
    marginVertical: 10, // Margem vertical para espaçar entre os inputs
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: '100%', // Ocupa toda a largura disponível do contêiner pai
  },
  button: {
    backgroundColor: Colors.MALTE,
    padding: 10,
    borderRadius: 10,
    width: 150,
    alignSelf: 'center',
    marginVertical: 5,
  },
  buttonVoltar: {
    backgroundColor: Colors.AZURE,
    padding: 10,
    borderRadius: 10,
    width: 150,
    alignSelf: 'center',
    marginVertical: 5,
  },
  buttonContainer: {
    flex: 1, 
    flexDirection: 'row', 
    gap: 30, 
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttoncamera: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: Colors.AZUL_IRIS,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.BRANCO,
  },
  cameratxt: {
    color: Colors.AZUL_IRIS,
    alignSelf: 'center',
    fontSize: 18,
    position: 'absolute',
    color: '#808080',
  },
  buttonTxt: {
    color: Colors.BRANCO,
    textAlign: "center",
    fontSize: 12,
  },
  Icon: {
    width: 20,
    height: 20,
  },
});
export default styles;
