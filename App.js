import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RegForm} from './components/regForm';

export default class App extends React.Component {
 render() {
   return (
    <View style={styles.container}>
     
       <RegForm></RegForm>  
     </View>
       
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36485f',
    
    color:'#eee',
    paddingLeft: 60,
    paddingRight:60,
    justifyContent: 'center',
  },
});
