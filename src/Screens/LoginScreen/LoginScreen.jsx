import { View,Image, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../LoginScreen/styles'
import Colors from '../../Utils/Colors';

import { auth } from '../../Firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "firebase/firestore";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { UserContext } from '../../Scripts/UserContext';

export default function LoginScreen() {
    const [userData, setUserData] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigation = useNavigation(); 
    const {fetchUserData} = useContext(UserContext);


    function newUser(){
      navigation.navigate('Register'); 
    }

    function userLogin(){
        signInWithEmailAndPassword(auth, userEmail, userPassword) 
        .then((userCredential) => { 
            const user = userCredential.user;
            fetchUserData(userEmail)
            alert("Login efetuado com sucesso!"); 
            //console.log(user); 

            navigation.navigate('Tab'); 

        })
        .catch((error) => { 
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage); 
        })
    }
    
  return (
    <SafeAreaView style={{flex: 1 }}>
      <ScrollView>
        <KeyboardAvoidingView>
        <View>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/logo.png')} style={styles.logo}/>
        </View>
         
          <Text style={styles.titulo}>Login</Text> 
          <Text style={styles.subtitulo}>Entre com sua conta</Text> 

        <View style={styles.corpo}>
        
          <TextInput      
              style={styles.entrada}
              placeholder='Email'
              placeholderTextColor={Colors.AZUL_PACIFICO} 
              keyboardType='email-address'
              autoCapitalize='none' 
              value={userEmail} 
              onChangeText={setUserEmail}
          />
            
          <TextInput 
              style={styles.entrada} 
              placeholder='Senha' 
              placeholderTextColor={Colors.AZUL_PACIFICO} 
              autoCapitalize='none'
              secureTextEntry
              value={userPassword} 
              onChangeText={setUserPassword}
          />
                                            {/* falta o link para o esqueceu a senha*/}
          <Text style={styles.redefinirsenha}>Esqueceu a senha?</Text> 

          <TouchableOpacity style={styles.botao} onPress={userLogin}> 
            <Text style={styles.botaotxt}>Login</Text>
          </TouchableOpacity>
          <View> 
            <Text style={styles.naotemconta}>Não tem uma conta?
              <Text style={styles.cadastrar} onPress={newUser}> Cadastrar</Text>
            </Text>             
          </View>
        </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  </SafeAreaView>
  )
}
