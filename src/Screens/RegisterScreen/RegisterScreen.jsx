import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebaseConfig';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements';
import { Image } from 'react-native-elements';

export default function RegisterScreen() {
  const [userName, setUserName] = useState('');
  const [userTel, setUserTel] = useState('');
  const [userCpf_Cnpj, setUserCpf_Cnpj] = useState('');
  const [userEndereco, setUserEndereco] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [userType, setUserType] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRePassword, setUserRePassword] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const navigation = useNavigation();

  async function addUserData() {
    try {
      const db = getFirestore();
      const usersCollection = collection(db, 'usuarios');

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

      console.log('Dados do usuário adicionados com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar dados do usuário:', error);
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
          alert('O usuário ' + userName + ' foi criado. Faça login!');
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

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  const NextStep = () => {
    if (isChecked) {
      setCurrentStep(2);
    } else {
      alert('Você precisa aceitar os termos de uso e política de privacidade para continuar.');
    }
  };

  const renderStep1 = () => (
    <View>
        <View style={styles.logoContainerStep1}>
          <Image source={require('../../../assets/images/logo.png')} style={styles.logoStep1}/>
        </View>
      <Text style={styles.textostep1}>Qual seu objetivo?</Text> 
      <TouchableOpacity onPress={NextStep} setUserType='prestador' style={styles.icons}>
        <Icon name="briefcase" size={50} color={'#023E8A'} />
        <Text style={styles.textprestar}>Prestar Serviços</Text>
      </TouchableOpacity>   
      <TouchableOpacity onPress={NextStep} setUserType='contratante' style={styles.icons}>
        <Icon name="handshake" size={50} color={'#023E8A'} />
        <Text style={styles.textcontratar}>Contratar Serviços</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <CheckBox      
          checked={isChecked}
          onPress={toggleCheckBox}
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
        <Text style={styles.checkboxText}>Eu aceito os termos de uso e política de privacidade.</Text>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View>
        <View style={styles.logoContainerStep2}>
          <Image source={require('../../../assets/images/register-step2.png')} style={styles.logoStep2}/>
        </View>
    <Text style={styles.textostep2}>Conte mais sobre você!</Text>
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
      <TouchableOpacity style={styles.buttoncamera} onPress={pickImage}>
        <Icon name="camera" size={50} color={'#023E8A'} />
        <Text style={styles.cameratxt}>Inserir Foto</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonVoltar} onPress={() => setCurrentStep(1)}>
          <Text style={styles.buttonTxt}>VOLTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setCurrentStep(3)}>
          <Text style={styles.buttonTxt}>PRÓXIMO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View>
      <View style={styles.logoContainerStep3}>
          <Image source={require('../../../assets/images/register-step3.png')} style={styles.logoStep3}/>
      </View>
    <Text style={styles.textostep3}>Suas informações para login</Text>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonVoltar} onPress={() => setCurrentStep(2)}>
          <Text style={styles.buttonTxt}>VOLTAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={newUserLogin}>
          <Text style={styles.buttonTxt}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.corpo}>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}