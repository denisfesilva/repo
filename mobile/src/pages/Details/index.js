import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';       //Navegação...
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';


import styles from './styles';

export default function Details() {
    const navigation = useNavigation();

    function navegateBack(){  //Função para retornar
        navigation.goBack(); 
    }

    function sendMail(){

    }

    function sendWhatsApp(){

    }
    
    return (

        /**Header */
        <View style={styles.container} >


            <View style={styles.header} >
                <Image source={logoImg} />

                <TouchableOpacity onPress={ navegateBack }>
                    <Feather name="arrow-left" size={28} color="#e02041"></Feather>
                </TouchableOpacity>
            </View>

            <View style={styles.detailsContainer}>

                <View style={styles.detailsContainerHeader}>
                    <View style={styles.descriptionContainer} >
                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Caso 1</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.incidentProperty}>Descrição:</Text>
                    <Text style={styles.incidentValue}>Cadelinha atropelada precisa muito de ajuda, está com a perna fratura e não consegue andar. Precisa de antibioticos e cirurgia.</Text>
                </View  >

                <View style={styles.descriptionContainer}>
                    <Text style={styles.incidentProperty}>Valor:</Text>
                    <Text style={styles.incidentValue}>R$120,00</Text>
                </View>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja um herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.textAction}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.textAction}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    );
}