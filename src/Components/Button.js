import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native'

import {Ionicons} from '@expo/vector-icons'

const Button = props => {  
    
    const [animation] = useState(new Animated.Value(0))

    const toogleMenu = () =>{
        const toValue = this.open ? 0 : 1

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start()

        this.open = !this.open
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
    const shareStyle = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -70]
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
                    outputRange: [0, -130]
                })
            }
        ]
    }

    const likeStyle = {
        transform: [
            {
                scale: animation
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -190]
                })
            }
        ]
    }
    return(
        
        <View style={{...styles.screen, ...props.style}}>
            <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View style={[styles.button, styles.secondary, heartStyle]}>
                    <Ionicons name='heart-outline' color='#231F20' size={22} />
                </Animated.View>
                
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View style={[styles.button, styles.secondary, likeStyle]}>
                    <Ionicons name='thumbs-up-outline' color='#231F20' size={22} />
                </Animated.View>
                
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View style={[styles.button, styles.secondary, shareStyle]}>
                    <Ionicons name='share-social-sharp' color='#231F20' size={22} />
                </Animated.View>
                
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={() => {toogleMenu()}}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <Ionicons name='add' color='#231F20' size={28} />
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
        width: 60,
        height: 60,
        borderRadius: 30, //or 60/2 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#c8d6e5',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        },
        elevation: 4
    },
    menu: {
        backgroundColor: '#c8d6e5'
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 24, //or 48/2
        backgroundColor: '#fff'
    }
})

export default Button;