import React from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';
import Settings from './ImpostazioniScreen.js';

var Nome = "Manuel Marinaro";
var Peso = 85;
var Altezza = 1.84;
var Compleanno = new Date(2003, 9, 26);

function Age() {
    var today = new Date(),
        one_year = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((today.getTime() - Compleanno.getTime()) / one_year);
}

export default class Profilo extends React.Component {
    static navigationOptions = {
        title: 'Profilo'
    }

    render() {
        return (
            <View style={{ backgroundColor: '#444444' }}>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Image
                    source={{
                        uri: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://lovanow.it/wp-content/uploads/2020/10/userLogo.png',
                    }}
                    style={{ width: 150, height: 150, alignSelf: 'center', tintColor: 'white' }}

                />
                <Text></Text>
                <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold', color: 'white' }}>{Nome}</Text>
                <Text></Text>
                <Text></Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>       Peso: {Peso} kg</Text>
                <Text></Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>       Altezza: {Altezza} m</Text>
                <Text></Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>       Data di nascita: {Compleanno.getDate() + "/" + (Compleanno.getMonth() + 1) + "/" + Compleanno.getFullYear()}</Text>
                <Text></Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>       Età: {Age()} anni</Text>
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
            </View >
        )
    }
}
