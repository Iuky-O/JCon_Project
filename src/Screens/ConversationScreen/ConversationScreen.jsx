import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ConversationsScreen({navigation}) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Conversas</Text>
      <Button
        title="Ir para o Chat"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
}
