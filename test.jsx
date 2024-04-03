


import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, TextInput, Button, TouchableOpacity, FlatList, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
  {
    id: '1',
    title: 'task 1'
  }
] 

function App() {
  const [items, setItems] = useState(DATA);
  const [text, setText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addTask = () => {
    let newTask = {
      id: items.length + 5,
      title: text,
      // note: text,
      completed: false
    }

    setItems([...items, newTask]);
    setText('');
    setIsModalVisible(false)
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
    <SafeAreaView style={styles.container}>
      <TouchableOpacity title='add task' animationType="slide" onPress={() => setIsModalVisible(true)}>
        <View style={styles.icon}>
        <Ionicons name="add" size={24} color={'#FFF'}></Ionicons>
        </View>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} onRequestClose={() => setIsModalVisible(!isModalVisible)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.input} onChangeText={setText} value={text} />
            <Button title='add task'  onPress= {addTask} />
          </View>
        </View>
      </Modal>
      
      <FlatList
      style={styles.list}
        data={items}
        renderItem={({item}) => <TodoItem item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 35,
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
  icon: {
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
});

export default App;
