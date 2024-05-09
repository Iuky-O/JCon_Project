import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

import { auth } from '../../Firebase/firebaseConfig';
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function CreateJobsScreen() {
  const [jobName, setJobName] = useState('');
  const [jobLocal, setJobLocal] = useState('');
  const [jobDate, setJobDate] = useState('');
  const [jobInformations, setJobInformations] = useState('');
  const [jobRequisite, setJobRequisite] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobLimit, setJobLimit] = useState('');
  
  const [jobCreate, setJobCreate] = useState('');

  async function addJob(){
    try{
      const db = getFirestore();
      const usersCollection = collection(db, "vagas");

      await addDoc(usersCollection, {
        Name: jobName,
        Local: jobLocal,
        Date: jobDate,
        Informations: jobInformations,
        Requisite: jobRequisite,
        Category: jobCategory,
        Limit: jobLimit,
        Create: name
      });
      
      console.log("Vaga criada com sucesso!");
    }catch (error) {

      console.error("Erro ao criar uma vaga:", error);
      
    }
  }

  function newJob(){
    if( jobName === '' || jobLocal === '' || jobDate === '' || jobInformations === ''){
        alert ('Os campos Nome, Loca, Data e Descrição devem ser preenchidos!');
        return;
    } else{
        addJob()
        .then(() => {

            alert('O vaga ' + jobName + ' foi criada!')
            navigation.navigate('Jobs');

        })
        .catch((error) =>{
            const errorMessage = error.message;
            alert(errorMessage);

            navigation.navigate('Jobs');
        });
    }

}

  return (
    <View style={{alignItems:'center', marginTop: 100, gap: 16}}>
      <Text style={{fontSize: 30}}>Cadastro de Vaga</Text>
        <TextInput placeholder='Nome' 
                 autoCapitalize='none' 
                 value={jobName} 
                 onChangeText={setJobName}
        />
        <TextInput placeholder='Local' 
                 autoCapitalize='none' 
                 value={jobLocal} 
                 onChangeText={setJobLocal}
        />
        <TextInput placeholder='Data' 
                 autoCapitalize='none' 
                 value={jobDate} 
                 onChangeText={setJobDate}
        />
        <TextInput placeholder='Descrição' 
                 autoCapitalize='none' 
                 value={jobInformations} 
                 onChangeText={setJobInformations}
        />
        <TextInput placeholder='Requisitos' 
                 autoCapitalize='none' 
                 value={jobRequisite} 
                 onChangeText={setJobRequisite}
        />
        <TextInput placeholder='Categoria' 
                 autoCapitalize='none' 
                 value={jobCategory} 
                 onChangeText={setJobCategory}
        />
        <TextInput placeholder='Limite de inscritos' 
                 autoCapitalize='none' 
                 value={jobLimit} 
                 onChangeText={setJobLimit}
        />
        <Button title='Cadastrar' onPress={newJob}/>
    </View>
  )
}