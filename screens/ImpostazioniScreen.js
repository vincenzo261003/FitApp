import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { db } from '../src/firebase/Firebase';

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'Settings'
    }

    render() {
        return (
            <View style={{ backgroundColor: '#444444' }}>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View alignSelf={"center"} width={300}>
                    <TextInput value={"Prova"} color={"white"} flexDirection="row"></TextInput>
                    <Button title={"Modifica dati"} color={"#242323"} flexDirection="row" fontWeight={"bold"} onPress={() => this.props.navigation.navigate('Impostazioni')}></Button>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View alignSelf={"center"} width={300}>
                    <Button title={"Torna al profilo"} color={"#242323"} fontWeight={"bold"} onPress={() => this.props.navigation.navigate('Profilo')}></Button>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View >
        )
    }
}
