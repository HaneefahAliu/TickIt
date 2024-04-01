import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderColor: "#E7E8EE",
        borderWidth: 1,
        margin:20,
        shadowColor: 'red',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    addButton: {
        padding: 20,
        
        backgroundColor: '#000',
        color: '#FFF',
    },
    stickyButton: {
        position: 'absolute', 
        right: 30, 
        bottom: -200, 
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 100,
        width: 60,
        height: 60
    },
    icon: {
        color: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        paddingLeft: 12,
        paddingTop: 4
    }
})

export default styles;