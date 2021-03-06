import React from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet } from 'react-native';
import { db } from '../src/firebase/Firebase';
import { collection, doc, setDoc } from "firebase";

const userRef = collection(db, "MJMe56gF9XKwOFlpffK0");

var Nome = "Manuel Marinaro";
var Peso = 82.8;
var Altezza = 1.84;
var Compleanno = new Date(2003, 9, 26);
var BMI = Peso / (Altezza * Altezza);

function Age() {
    var today = new Date(),
        one_year = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((today.getTime() - Compleanno.getTime()) / one_year);
}

//sistemare layout per il mio cell con altri text ecc
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
                    style={styles.icon}

                />
                <Text></Text>
                <Text style={styles.name}>{Nome}</Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.text}>       Peso: {Peso} kg</Text>
                <Text></Text>
                <Text style={styles.text}>       Altezza: {Altezza} m</Text>
                <Text></Text>
                <Text style={styles.text}>       Data di nascita: {Compleanno.getDate() + "/" + (Compleanno.getMonth() + 1) + "/" + Compleanno.getFullYear()}</Text>
                <Text></Text>
                <Text style={styles.text}>       Età: {Age()} anni</Text>
                <Text></Text>
                <Text style={styles.text}>       BMI: {BMI.toString().substring(0, 4)}</Text>
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
                    <Button title={"Modifica dati"} color={"#242323"} fontWeight={"bold"} onPress={() => this.props.navigation.navigate('Impostazioni')}></Button>
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    name: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    icon: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        tintColor: 'white'
    },
});