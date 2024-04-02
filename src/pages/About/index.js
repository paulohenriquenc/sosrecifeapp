import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function About() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Sobre Nós</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.text}>
                "SOS Recife", iniciativa liderada por Paulo e Thiago da Faculdade Uninassau, é dedicada à segurança dos banhistas na orla do Recife. Nosso objetivo é implementar soluções inovadoras para reduzir os riscos de incidentes com tubarões. Queremos proporcionar um ambiente seguro e consciente para todos que desfrutam das praias da região.

                </Text>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#044fa1'
    },

    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },

    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },

    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: 20 // Adicionando um espaço superior para a mensagem
    },

    text: {
        fontSize: 16,
        lineHeight: 24, // Espaçamento entre linhas
        color: '#000'
    }
});