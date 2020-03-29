import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';   //Icon
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import logoImg from '../../assets/logo.png';    //Já trás a melhor automaticamente de acordo com a configuração do celular
import styles from './styles';

export default function Incidents() {
    const navegation = useNavigation();

    function navegationToDetail(){
        navegation.navigate('Details');
    }

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image source={logoImg} />
                <Text style={styles.headerText}> Total de <Text style={styles.headerTextBolder}>0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>


            <FlatList       //Habilita o scroll
                data={[1, 2, 3, 4, 5, 6]}  //Aqui vão os dados vindo do banco
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)} //Chave indentificadora
                showsVerticalScrollIndicator={false}
                renderItem={() => (         //Função que faz renderizar os itens
                    <View style={styles.incidents}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty}>Descrição:</Text>
                        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>R$120,00</Text>

                        
                        <TouchableOpacity style={styles.detailsButton} onPress={navegationToDetail}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>

                )} />

        </View >
    );
}