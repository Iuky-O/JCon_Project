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
    marginBottom: 15,
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
    fontSize: 15,
    paddingHorizontal: 10,
  },
  textInfo:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    maxwidth: '90%',
    maxWidth: 300,
    height: 50,
    paddingHorizontal: 10,
  },
  Button:{
    backgroundColor: Colors.AZURE,
    alignItems: 'center',
    borderRadius: 20,
    height: 30,
    width: '40%',
  },
  buttomText:{
    color: 'white', 
    fontSize: 17
  },

})

export default styles;