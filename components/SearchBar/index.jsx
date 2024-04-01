import React from 'react';
import { View, TextInput, Image } from 'react-native';

import styles from './style';

const SearchBar = ({ placeholder, onChangeText, value, iconSource }) => {
    return (
        <View>
        <TextInput
            style={styles.container}
            placeholder={placeholder}
            placeholderTextColor="#ABACB9"
            onChangeText={onChangeText}
            value={value}
        />
        </View>
    )
}

export default SearchBar;