import { View, Text, TextInput, Button} from 'react-native'
import React, {useState} from 'react'
import { auth } from '../../Firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigation = useNavigation(); 

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