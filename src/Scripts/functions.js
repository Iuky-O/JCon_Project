import { View, Image, StyleSheet } from 'react-native';

export const Stars5 = () => {
  return(
    <View style={styles.stars}>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
    </View>
  )
};
export const Stars4 = () => {
  return(
    <View style={styles.stars}>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
    </View>
  )
};
export const Stars3 = () => {
  return(
    <View style={styles.stars}>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
    </View>
  )
};
export const Stars2 = () => {
  return(
    <View style={styles.stars}>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
    </View>
  )
};
export const Stars1 = () => {
  return(
    <View style={styles.stars}>
      <Image source={require('../../assets/images/icon-star-max.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
    </View>
  )
};
export const Stars0 = () => {
  return(
    <View style={styles.stars}>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
      <Image source={require('../../assets/images/icon-star-min.png')} style={{height: 15, width: 15}}/>
    </View>
  )
};

const styles = StyleSheet.create({
  stars:{
    flex: 1, 
    flexDirection:'row', 
    gap: 10, 
    marginTop: 5,
    alignItems: 'center',
    maxHeight: 30,
  },
})