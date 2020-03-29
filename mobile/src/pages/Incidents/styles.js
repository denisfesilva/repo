import { StyleSheet } from 'react-native';
import constants from 'expo-constants';
export default StyleSheet.create({
    /**Container Geral */

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: constants.statusBarHeight + 20,
    },

    /**Header */

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontSize: 15,
        color: '#737380',
    },
    headerTextBolder: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginTop: 48,
        marginBottom: 16,
        color: '#13131a',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },


    /**Incidents List */
    incidentsList: {
        marginTop: 22,
        borderRadius: 8,
    },

    incidents: {
        marginBottom: 16,
        backgroundColor: '#FFF',
        padding: 24,
        borderRadius: 8
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
        marginBottom: 24
    },

    detailsButton: {
        flexDirection: 'row',
         justifyContent: "space-between",
         alignItems: "center",
    },

    detailsButtonText: {
        fontSize: 15,
        color: '#e02041'
    }
});