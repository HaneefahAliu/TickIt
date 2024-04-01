import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 16,
    },
    card: {
        backgroundColor: '#FFF',
        paddingVertical: 16,
        paddingHorizontal: 10,
        marginBottom: 16,
        width: '48%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#E7E8EE",
        shadowColor: '#1A1A43',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    rowItems: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#000', 
        marginRight: 6,
    },
    icon: {
        color: 'white',
        fontSize: 16,
    },
    statusName: {
        fontSize: 16,
        fontWeight: '500'
    },
    statusItem: {
        fontSize: 14,
        color: '#ABACB9'
    },
})

export default styles;