import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const PopupForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    // Implement your form submission logic here
    console.log('Form data submitted:', formData);
    setIsModalVisible(false); // Close the modal after submission
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
      animationType="slide"
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Fill Out the Form</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={handleInputChange}
          value={formData.name}
          name="name"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={handleInputChange}
          value={formData.email}
          name="email"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.textInput, styles.multilineInput]}
          placeholder="Message"
          onChangeText={handleInputChange}
          value={formData.message}
          name="message"
          multiline={true}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // Same styles from ButtonPage.js
});

export default PopupForm;
