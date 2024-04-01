import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TaskPage from '../TaskPage';
import styles from './style';


const TaskCategory = ({navigation}) => {

    return (
        <View>
            <Text style={styles.headerText}>Categories</Text>
            <View style={styles.card}>
                <TouchableOpacity style={styles.categoryList} onPress={() => navigation.navigate('Task')}>
                    <View style={styles.leftItem}>
                        <View style={styles.iconContainer}>
                            <Ionicons style={styles.leftIcon} name="list-outline"></Ionicons>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.categoryName}>Due Today</Text>
                            <Text style={styles.statusItem}> 4 tasks</Text>
                        </View>
                    </View>
                    <View style={styles.rightItem}>
                        <Ionicons style={styles.rightIcon} name="arrow-forward-outline"></Ionicons>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryList}>
                    <View style={styles.leftItem}>
                        <View style={styles.iconContainer}>
                            <Ionicons style={styles.leftIcon} name="list-outline"></Ionicons>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.categoryName}>Due Today</Text>
                            <Text style={styles.statusItem}> 4 tasks</Text>
                        </View>
                    </View>
                    <View style={styles.rightItem}>
                        <Ionicons style={styles.rightIcon} name="arrow-forward-outline"></Ionicons>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryList}>
                    <View style={styles.leftItem}>
                        <View style={styles.iconContainer}>
                            <Ionicons style={styles.leftIcon} name="list-outline"></Ionicons>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.categoryName}>Due Today</Text>
                            <Text style={styles.statusItem}> 4 tasks</Text>
                        </View>
                    </View>
                    <View style={styles.rightItem}>
                        <Ionicons style={styles.rightIcon} name="arrow-forward-outline"></Ionicons>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TaskCategory;