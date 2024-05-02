import React, { useState, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const { contactName } = route.params;

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    setInputText(''); // Limpa o texto de entrada após o envio da mensagem
  }, []); 

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleSend = () => {
    if (inputText.trim() === '') return; // Impede o envio de mensagens vazias
    onSend([{ text: inputText, _id: Math.random().toString(), createdAt: new Date(), user: { _id: 1 } }]);
  };
  
  return (
    <View style={styles.chat}>
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            color={'#0077B6'}
            style={styles.backButton}
            onPress={handleBackButton}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titulo}>{contactName}</Text>
          <Text style={styles.onlineText}><View style={styles.onlineStatus}></View> Online</Text>       
        </View>       
      </View>
      
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: 1 }}        
        renderInputToolbar={props => (
          <View style={styles.inputToolbar}>
            <TextInput
              placeholder="Digite sua mensagem..."
              placeholderTextColor="gray"
              style={styles.textInput}
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSend}
            />
            <TouchableOpacity onPress={handleSend}>
              <MaterialIcons name="send" size={24} color="#0077B6" style={styles.sendButton} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
