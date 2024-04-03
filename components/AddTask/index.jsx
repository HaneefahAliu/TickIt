import React, { useState } from 'react';
import {  View, Text, TextInput, Button, TouchableOpacity, FlatList, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import styles from './style'

const DATA = [
    {
        id: '1',
        title: 'Task 1',
        note: 'This is note 1'
    },
]

const AddTask = () => {
    const [items, setItems] = useState(DATA);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const addTask = () => {
        let newTask = {
            id: items.length + 1,
            title: title,
            note: note,
            completed: false
        }
        console.log(newTask)
        setItems([...items, newTask]);
        setTitle('');
        setNote('');
        setIsModalVisible(false);
    }

    const closeModal = () => {
        setIsModalVisible(false);
    }

    const markCompleted = (item) => {
        const itemIndex = items.findIndex(currentItem => currentItem.id === item.id);

        if (itemIndex !== -1) {
            const updatedItems = [...items];
            updatedItems[itemIndex] = {...items[itemIndex], completed: true};
            setItems(updatedItems);
        }
    }

    const TodoItem = (props) => (
        <TouchableOpacity style={styles.item} onPress={() => markCompleted(props.item)}>
            <Text style={props.item.completed ? styles.itemTextCompleted : styles.itemText}>{props.item.title}</Text>
            <Text style={props.item.completed ? styles.itemTextCompleted : styles.itemText}>{props.item.note}</Text>
        </TouchableOpacity>
    )

    return (
        <View>
            <TouchableOpacity style={styles.stickyButton} title='add task' animationType="slide" onPress={() => setIsModalVisible(true)}>
                <View style={styles.icon}>
                    <Ionicons name="add" size={24} color={'#FFF'}></Ionicons>
                </View>
            </TouchableOpacity>
            <Modal visible={isModalVisible} animationType='slide' transparent={true} onRequestClose={() => setIsModalVisible(!isModalVisible)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.title}> Add New Task</Text>
                            <Text style={styles.cancel} onPress={closeModal}>Cancel</Text>
                        </View>
                        <Text style={styles.label}>Title</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setTitle}
                            value={title}
                            placeholder="Enter a title"
                        />

                        <Text style={styles.label}>Note</Text>
                        <TextInput
                            style={[styles.input , { height: 100 }]} 
                            onChangeText={setNote} 
                            value={note}
                            placeholder="Enter note (optional)"
                        />

                        <Button style={styles.addButton} title='Add task'  onPress= {addTask} />
                    </View>
                </View>
            </Modal>
            <FlatList
            style={styles.list}
            data={items}
            renderItem={({item}) => <TodoItem item={item} />}
            keyExtractor={item => item.id}
            />
        </View>
    )
}

export default AddTask;
