import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: 16,
        marginBottom: 24,
        backgroundColor: '#F3F4F6',
        borderColor: '#E7E8EE',
        borderWidth: 1,
        borderRadius: 4,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    list: {
        alignContent: 'stretch',
        width: '100%',
    },
    item: {
        backgroundColor: 'red',
        padding: 20,
        marginVertical: 12,
        marginHorizontal: 8,
    },
    itemText: {
        color: '#FFF',
    },
    itemTextCompleted: {
        textDecorationLine: 'line-through', 
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        backgroundColor: '#FFF',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBlockColor: '#E9ECF0',
        paddingBottom: 12,
        marginBottom: 24,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancel: {
        color: '#ABACB9'
    },
    stickyButton: {
        zIndex: 1,
    },
    icon: {
        position: 'absolute',
        top: 350,
        right: 30,
        backgroundColor: '#000',
        borderRadius: '100%',
        padding: 20,
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    addButton: {
        backgroundColor: '#000',
        color: '#FFF',
        paddingHorizontal: 44,
        paddingVertical: 44,
        margin: 20,
    },
});

export default styles;
