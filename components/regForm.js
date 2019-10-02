import React from 'react';
import { StyleSheet,
        Text, 
        View,
      TouchableOpacity,
    TextInput, } from 'react-native';

export  class RegForm extends React.Component {
 render() {
   return (

    <View style={styles.reg}>
      <Text style={styles.header}>
      Registro
      </Text>
      <TextInput style={styles.text_input} placeholder='Your Name'
      underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.text_input}  placeholder='Your email'
      underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.text_input}  placeholder='Your password'
      secureTextEntry={true} underlineColorAndroid={'transparent'}/>
      
      <TouchableOpacity style={styles.button}>
      <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
    reg: {
        
        alignSelf: 'stretch',
      },
      header:{
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
      },
      text_input:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
      },
      button:{
        alignSelf:'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
      },
      btnText:{
        color:'#fff',
        fontWeight: 'bold',
      }
});
