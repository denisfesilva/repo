import { StyleSheet } from 'react-native';
import constants from 'expo-constants';
export default StyleSheet.create({
    /**Container Geral */

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignItems: "center",
    },
    detailsContainer: {
        marginTop: 22,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 20,
        borderRadius: 8

    },

    detailsContainerHeader: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    incidentProperty: {
        fontWeight: "bold",
        fontSize: 16,
    },
    descriptionContainer: {
        paddingBottom: 20,

    },
    incidentValue: {
        color: "#737380",
        marginTop: 10,
        fontSize: 14,
        lineHeight: 20,

    },


    contactBox: {
        marginTop: 22,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 8
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        paddingTop: 10,

    },
    action: {
        width: '48%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: '#e02041'
    },
    textAction: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'

    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        color: '#13131a'
    },
    heroDescription:{
        marginTop: 16,
        fontSize: 15,
        color: '#737380'
    }
});