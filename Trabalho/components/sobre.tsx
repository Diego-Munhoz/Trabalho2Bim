import React from "react";
import { View, Image,Text, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './home';


export default function HomeScreen() {
    const[page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if(page === 'sobre') {
            return(
                <View style={styles.container}>
                    <Image source={require('../assets/imageLocalization.png')} />
                    <View style={styles.containerText}>
                        <Text style={styles.h1}>Localização Atual</Text>
                        <Text style={styles.h2}>Latitude: <Text style={styles.span}>0.00</Text></Text>
                        <Text style={styles.h2}>Longitude: <Text style={styles.span}>0.00</Text></Text>
                        <TouchableOpacity style={styles.button1}>
                            <Text style={styles.buttonText1}>Obter Localização</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2}  onPress={() => setPage('home')}>
                            <Text style={styles.buttonText2}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else if (page === 'home') {
            return <Home />;
        }
    };

    return <View>{renderPage()}</View>

}

const styles = StyleSheet.create({
    container:{
        height: 800,
        width: 360,
        backgroundColor: '#0E131F',
    },
    containerText:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    h1:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F0F8FF',
        marginBottom: 10,
    },
    h2:{
        fontSize: 20,
        fontWeight: 'medium',
        color: '#F0F8FF',
        marginTop: 20,
    },
    span:{
        color: '#4169E1',
        fontWeight: 'bold',
    },
    button1:{
        width: 300,
        height: 46,
        backgroundColor: '#F0F8FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 78,
    },
    buttonText1:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0E131F',
    },
    button2:{
        width: 300,
        height: 46,
        backgroundColor: '#4169E1',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText2:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F0F8FF',
    },
});