import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';

class About extends React.Component {

    constructor(props){
        super(props);
        this.state={
            leaders:LEADERS
        }
    }

    static navigationOptions = {
        title: 'About',
    };

    render() {

        const RenderMenuItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{source: require('./images/alberto.png')}}
                    />
            );
        }

        return (
            <ScrollView>
                <Card title="Our genesis">
                    <Text>We were born at the beginning of the big bang. We are stronger than Galactos.</Text>
                    <Text>We are GTA1, NS2, DSG3, AR4, RS5</Text>
                </Card>
                <Card title='Our F Society'>
                <FlatList
                    data={this.state.leaders}
                    renderItem={RenderMenuItem}
                    keyExtractor={item => item.id.toString() }
                    />
                </Card>
            </ScrollView>
        )
    }
}

export default About;