import React, { useState, useRef } from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native'
import {Ionicons, FontAwesome6, MaterialIcons} from '@expo/vector-icons'
import Colors from '../Utils/Colors'
import { useNavigation } from '@react-navigation/native';

const ButtonFloat = props => {

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

            <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateJobs')}>
                <Animated.View style={[styles.button, styles.secondary, jobStyle]}>
                    <MaterialIcons name="app-registration" size={25} color={Colors.BRANCO}/>
                </Animated.View> 
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
                    <Ionicons name='heart-outline' size={25} color={Colors.BRANCO} />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View style={[styles.button, styles.secondary, profileStyle]}>
                    <FontAwesome6 name="user-pen" size={20} color={Colors.BRANCO}/>
                </Animated.View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => {Menu()}}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <Ionicons name='add' size={25} color={Colors.BRANCO} />
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