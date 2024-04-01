import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

import styles from './style'

const AddTask = () => {
    const [items, setItems] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        note: '',
        category: '',
    });
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePress = () => {
        alert("pressed")
    }

    const addTask = () => {
        let newTask = {
            id: items.length + 1,
            title: formData.title,
            note: formData.note,
            completed: false
        }
        alert("task added")
        console.log(newTask);
        setItems([...items, newTask]);
        setFormData('');
        setIsModalVisible(false);
    }

    const markCompleted = (item) => {
        const itemIndex = items.findIndex(currentItem.id === item.id);

        if (itemIndex !== -1) {
            const updatedItems = [...items];
            updatedItems[itemIndex] = {...items[itemIndex], completed: true};
            setItems(updatedItems);
        }
    }

    const todoItem = (props) => {
        <TouchableOpacity onPress={() => markCompleted(props.item)}>
            <Text></Text>
        </TouchableOpacity>
    }
    return (
        <SafeAreaView>
            <Modal style={styles.modal} visible={isModalVisible} animationType="slide" onRequestClose={() => setIsModalVisible(!isModalVisible)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add New Task</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Title"
                            onChangeText={setFormData}
                            value={formData.title}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Note"
                            onChangeText={setFormData}
                            value={formData.note}
                            multiline={true}
                        />
                        <Button style={styles.addButton} title="Add Task" onPress={addTask} />
                    </View>
                </View>
            </Modal>
            <View>
                <TouchableOpacity style={styles.stickyButton} onPress={() => setIsModalVisible(true)}>
                    <Text style={styles.icon}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddTask;