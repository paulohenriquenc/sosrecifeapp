import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native-web';

import * as Animatable from 'react-native-animatable'

import { useNavigation  } from '@react-navigation/native';

export default function Welcome () {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
        
        <View style={styles.containerLogo}>

<Animatable.Image
animation="fadeInUp"
source={require('../../assets/SOS REC LOGO 2.png')}
style={{ width: '35%'}} 
resizeMode="contain" 
/>
        </View>
        <Animatable.View delay={300} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}> SOS RECIFE </Text>
        <Text style={styles.text}> Faça o login para começar </Text>
        

        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}> Acessar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonabout}
        onPress={ () => navigation.navigate('About')}>
        <Text style={styles.buttonText}> Sobre nós </Text>
        </TouchableOpacity>

        </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      
        flex:1,
    
       backgroundColor: '#044fa1'
    },

    containerLogo:{
        flex:2,
        backgroundColor: '#044fa1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerForm: {
        flex: 1,
        backgroundColor: '#fbdc51',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    title:{
        color: '#044fa1',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        justifyContent: 'center',
        alignItems: 'center'
        

    },

    text:{
        color: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', // Adicionando 'position' aqui
    },
    
    buttonabout:{
        
        backgroundColor: '#FFF',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '55%', // Ajuste a posição vertical
        marginTop: '-30px', // Margem negativa para mover um pouco para cima

    },

    buttonText:{
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },

    
})
