import { View, Text, TextInput, Button} from 'react-native'
import React, {useState} from 'react'
import { auth } from '../../Firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

import "firebase/firestore";
import { firebase } from '../../Firebase/firebaseConfig';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { useUser } from '../../Scripts/userName';



export default function LoginScreen() {
  const {setUserName} = useUser();
    const [userData, setUserData] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const navigation = useNavigation(); 

    useEffect(() => {
    
      async function fetchUserData() {
        try {
          const db = getFirestore();
          const usersCollection = collection(db, "usuarios");
          const q = query(usersCollection, where("Email", "==", {userEmail})); 
  
          const querySnapshot = await getDocs(q);
          const userDataArray = querySnapshot.docs.map(doc => doc.data());
          setUserData(userDataArray[0]);
          
          setUserName(userData.Name);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      }
  
      fetchUserData();
    }, []);

    function newUser(){
      navigation.navigate('Register');
    }

    function userLogin(){
        signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Login efetuado com sucesso!");
            console.log(user);
            
            navigation.navigate('Home');
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        })
    }

  return (
    <View style={{alignItems:'center', marginTop: 100, gap: 16}}>
      <Text style={{fontSize: 30}}>Login</Text>
      <TextInput placeholder='Email' 
                 keyboardType='email-address'
                 autoCapitalize='none' 
                 value={userEmail} 
                 onChangeText={setUserEmail}
      />
      <TextInput placeholder='Senha' 
                 autoCapitalize='none'
                 secureTextEntry
                 value={userPassword} 
                 onChangeText={setUserPassword}
      />
      <Button title='Logar' onPress={userLogin}/>

      <View style={{}}>
        <Text>Redefinir senha</Text>
        <Text onPress={newUser}>Cadastrar-se</Text>
      </View>
    </View>
  )
}
