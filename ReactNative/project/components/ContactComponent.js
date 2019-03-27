import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends React.Component{

    static navigationOptions = {
        title: 'Contact',
    };

    render(){
        return (
                <Card
                title='Contact Information'>
                <Text>Cicada 3307</Text>
                <Text>Vit Vellore</Text>
                <Text>We are everywhere</Text>
                <Text>Tel: #%!&%@()^&##&!%@^$(@&+_:"?"$@))</Text>
                <Text>Decode The number</Text>
                <Text>Email:Cicada3307@hackers.com</Text>
                </Card>
        )
    }
}

export default Contact;