import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

function Field(props) {

    let placeholder;

    switch(props.text){
      case "Usuário":
        placeholder = "Insira seu usuário"
        break;
      case "Senha":
        placeholder = "Insira sua senha"
        break;
    }

    return (
      <View style={styles.view}>
          <Text style={styles.label}>{props.text}</Text>
          <TextInput style={styles.input} placeholder={placeholder}></TextInput>
      </View>
    );
}

export default Field;