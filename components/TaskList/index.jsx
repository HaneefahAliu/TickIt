import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';

const TaskList = (props) => {

    const markCompleted = () => {

    }
    return (
        <TouchableOpacity onPress={(markCompleted)}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
                <Text style={styles.taskTitle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TaskList