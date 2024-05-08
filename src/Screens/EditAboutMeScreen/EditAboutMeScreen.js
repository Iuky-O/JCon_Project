import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function EditAboutMeScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { currentAboutMe } = route.params; 

  const [newAboutMe, setNewAboutMe] = useState(currentAboutMe);

  async function saveChanges() {

    try {
      const db = getFirestore();
      const userDocRef = doc(db, "usuarios", "jP1lKDspET2DPV8EAlF1"); 
      await setDoc(userDocRef, { aboutMe: newAboutMe }, { merge: true });

      console.log("Descrição do usuário atualizada com sucesso!");

      navigation.goBack(); 

    } catch (error) {

      console.error("Erro ao salvar descrição do usuário:", error);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Editar Descrição</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, margin: 10, width: '80%' }}
        multiline
        placeholder="Digite sua nova descrição..."
        value={newAboutMe}
        onChangeText={setNewAboutMe}
      />
      <Button title="Salvar Alterações" onPress={saveChanges} />
    </View>
  );
}