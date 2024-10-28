import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({ navigation }) => (
    <Icon.Button
        name="arrow-back"
        size={24}
        backgroundColor="transparent"
        underlayColor="transparent"
        color="black"
        onPress={() => navigation.navigate('Home')}
    />
);

export default BackButton;
