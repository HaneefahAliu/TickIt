import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

const TaskCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.rowItems}>
                    <View style={styles.iconContainer}>
                        <Ionicons style={styles.icon} name="list-outline"></Ionicons>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.statusName}>All</Text>
                        <Text style={styles.statusItem}> 4 tasks</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.rowItems}>
                    <View style={styles.iconContainer}>
                        <Ionicons style={styles.icon} name="list-outline"></Ionicons>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.statusName}>Due Today</Text>
                        <Text style={styles.statusItem}> 4 tasks</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.rowItems}>
                    <View style={styles.iconContainer}>
                        <Ionicons style={styles.icon} name="list-outline"></Ionicons>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.statusName}>Overdue</Text>
                        <Text style={styles.statusItem}> 4 tasks</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.rowItems}>
                    <View style={styles.iconContainer}>
                        <Ionicons style={styles.icon} name="list-outline"></Ionicons>
                    </View>
                    <View style={styles.data}>
                        <Text style={styles.statusName}>Completed</Text>
                        <Text style={styles.statusItem}> 4 tasks</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TaskCard;