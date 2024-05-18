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
    marginTop: 10,
    paddingHorizontal: 5,
  },
  textTitle:{
    maxWidth: 'auto',
    padding: 15,
    color: Colors.MALTE,
    fontSize: 16,
  },
  textDesc:{
    maxWidth: 'auto',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  subText:{
    maxWidth: 'auto',
    fontSize: 12,
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
  text:{
    fontSize: 15,
    paddingHorizontal: 10,
    
  },
  Button1:{
    backgroundColor: Colors.AZURE,
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
    width: '40%',
    margin:10,
  },
  Button2:{
    backgroundColor: Colors.AZUL_PACIFICO,
    alignItems: 'center',
    borderRadius: 10,
    height: 40,
    width: '40%',
    margin:10,
  },
  buttomText:{
    marginTop:10,
    color: 'white', 
    fontSize: 17,
    
  },

})

export default styles;