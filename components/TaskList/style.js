import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: "#FFF",
        paddingVertical: 16,
        paddingHorizontal: 10,
        marginHorizontal: 16,
        marginVertical: 6,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#E7E8EE",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    checkbox: {
        width: 18,
        height: 18,
        borderRadius: 100,
        borderColor: "#E7E8EE",
        borderWidth: 1,
        backgroundColor: "#FFF",
        marginEnd: 12,

    },
    taskTitle: {
        fontSize: 16,
        fontWeight: '500',

    },
});

export default styles;