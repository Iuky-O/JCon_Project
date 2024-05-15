import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import styles from './styles';

export default function RegisterScreen() {

  const [userName, setUserName] = useState('');
  const [userTel, setUserTel] = useState('');
  const [userCpf_Cnpj, setUserCpf_Cnpj] = useState('');
  const [userEndereco, setUserEndereco] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [userType, setUserType] = useState('');

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRePassword, setUserRePassword] = useState('');

  const navigation = useNavigation();

  async function addUserData() {
    try {
      const db = getFirestore();
      const usersCollection = collection(db, "usuarios");

      await addDoc(usersCollection, {
        Name: userName,
        Telephone: userTel,
        Cpf_Cnpj: userCpf_Cnpj,
        address: userEndereco,
        profile_picture: userPhoto,
        TypeUser: userType,
        Email: userEmail,
        Password: userPassword,
      });

      console.log("Dados do usuário adicionados com sucesso!");

    } catch (error) {

      console.error("Erro ao adicionar dados do usuário:", error);

    }
  }

  function newUserLogin() {
    if (userEmail === '' || userPassword === '' || userRePassword === '') {
      alert('Todos os campos devem ser preenchidos!');
      return;
    }
    if (userPassword !== userRePassword) {
      alert('A senha e a confirmação não são iguais!');
      return;
    } else {
      addUserData();
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {

          const user = userCredential.user;
          alert('O usuário ' + userName + ' foi criado. Faça login!')
          navigation.navigate('Login');

        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);

          navigation.navigate('Login');
        });
    }

  }

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setUserPhoto(result.assets[0].uri);
      console.log('photo: ' + userPhoto);
    }
  };

  return (
    <SafeAreaView>
       
    <ScrollView>
        
      <View style={styles.corpo}>
        <Text style={styles.Title}>Cadastro</Text>

        <TextInput
          style={styles.Input}
          placeholder='Nome'
          autoCapitalize='none'
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.Input}
          placeholder='Telefone'
          autoCapitalize='none'
          value={userTel}
          onChangeText={setUserTel}
        />
        <TextInput
          style={styles.Input}
          placeholder='CPF ou CNPJ'
          autoCapitalize='none'
          value={userCpf_Cnpj}
          onChangeText={setUserCpf_Cnpj}
        />
        <TextInput
          style={styles.Input}
          placeholder='Endereço'
          autoCapitalize='none'
          value={userEndereco}
          onChangeText={setUserEndereco}
        />
        <TouchableOpacity style={styles.button}
          onPress={pickImage}
          value={userPhoto}
          onChangeText={setUserPhoto}>
          <Text style={styles.buttonTxt}>FOTO DE PERFIL</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.Input}
          placeholder='Escolha seu tipo de usuário'
          autoCapitalize='none'
          value={userType}
          onChangeText={setUserType}
        />

        <TextInput
          style={styles.Input}
          placeholder='Informe seu email'
          keyboardType='email-address'
          autoCapitalize='none'
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <TextInput
          style={styles.Input}
          placeholder='Informe uma senha'
          autoCapitalize='none'
          secureTextEntry
          value={userPassword}
          onChangeText={setUserPassword}
        />
        <TextInput
          style={styles.Input}
          placeholder='Confirme a senha'
          autoCapitalize='none'
          secureTextEntry
          value={userRePassword}
          onChangeText={setUserRePassword}
        />

        <TouchableOpacity style={styles.button} onPress={newUserLogin}>
          <Text style={styles.buttonTxt}>CADASTRAR</Text>
        </TouchableOpacity>
      </View> 
    </ScrollView>
    
  </SafeAreaView>
       
 
  )
}