import React from 'react';
import { StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';

export const styles = StyleSheet.create({
header: {
    height: 100,
    backgroundColor: Colors.MALTE,
},
logoImage:{
    height: 60,
    width: 60,
    marginTop: 35,
    marginLeft: 270,
},
textTopic:{
    fontSize: 20,
    color: Colors.MALTE,
    marginLeft: 15,
    marginTop: 20,
  },
  textTitle:{
    maxWidth: 'auto',
    padding: 15,
    color: Colors.MALTE,
    fontSize: 16,
  },
  textDesc:{
    maxWidth: 'auto',
    padding: 15,
  },
  textInfo:{
    maxWidth: 'auto',
    padding: 9,
  },
  Button:{
    backgroundColor: Colors.AZURE,
    maxWidth: 110,
    marginLeft: 140,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  buttomText:{
    color: Colors.BRANCO,
  },

})

export default styles;