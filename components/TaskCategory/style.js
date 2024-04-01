import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 16,
        paddingBottom: 4,
    },
    card: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        marginHorizontal: 16,
        marginVertical: 6,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#E7E8EE",
    },
    categoryList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#E9ECF0',
    },
    leftItem: {
        flexDirection: "row",
        alignItems: "center",
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
    leftIcon: {
        color: 'white',
        fontSize: 16,
    },
    rightIcon: {
        color: '#ABACB9',
        fontSize: 20,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: '500'
    },
    statusItem: {
        fontSize: 14,
        color: '#ABACB9'
    },
})

export default styles;
