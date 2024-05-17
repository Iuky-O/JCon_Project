import React, { useState, useRef } from 'react'
import {View, Image, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native'
import Colors from '../Utils/Colors'
import { useNavigation } from '@react-navigation/native';

const ButtonFloat = () => {

    const navigation = useNavigation();
    const [showText, setShowText] = useState(false);
    const timeoutRef = useRef(null);
    const [animation] = useState(new Animated.Value(0))

    const Menu = () =>{
        const toValue = this.open ? 0 : 1

        Animated.spring(animation, {
            toValue,
            friction: 9,
            useNativeDriver: true
        }).start()

        this.open = !this.open

        //Para o tempo de texto

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setShowText(true);
        }, 1000); 
    }

    const rotation = {
        transform : [
            {
                rotate: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg']
                })
            }
        ]
    }
    const profileStyle = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 50]
                })
            }
        ]
    }

    const heartStyle = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100]
                })
            }
        ]
    }

    const jobStyle = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 150]
                })
            }
        ]
    }

    return(
        
        <View style={styles.screen}>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('OptionsJobs')}>
                <Animated.View style={[styles.button, styles.secondary, jobStyle]}>
                <Image source={require('../../assets/images/icon-create-jobs.png')} style={{height: 20, width: 20}}/>
                </Animated.View> 
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
                <Image source={require('../../assets/images/icon-heart.png')} style={{height: 20, width: 20}}/>
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View style={[styles.button, styles.secondary, profileStyle]}>
                <Image source={require('../../assets/images/icon-edit-profile.png')} style={{height: 20, width: 20}}/>
                </Animated.View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => {Menu()}}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                <Image source={require('../../assets/images/icon-plus.png')} style={{height: 20, width: 20}}/>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        position: 'absolute',
        alignItems: 'center'     
    },
    button: {
        position: 'absolute',
        bottom: 10,
        width: 30,
        height: 30,
        borderRadius: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.MALTE,
        shadowRadius: 0,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        },
        elevation: 4
    },
    menu: {
        backgroundColor:  Colors.MALTE
    },
    secondary: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: Colors.MALTE
    }
})

export default ButtonFloat;