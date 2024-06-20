import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Sobre from './sobre';


export default function HomeScreen() {
    const[page, setPage] = React.useState('home');

    const renderPage = () => {
        if(page === 'home') {
            return(
                <View style={styles.container}>
                    <Text style={styles.h2}>Descubra a sua</Text>
                    <Text style={styles.h1}>Localização</Text>
                    <Text style={styles.p}>Acesse qualquer localização em qualquer lugar em <Text style={styles.span}>tempo real!</Text></Text>
                    <Image style={styles.image} source={require('../assets/imageHome.png')} />
                    <TouchableOpacity style={styles.button}  onPress={() => setPage('sobre')}>
                            <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'sobre') {
            return <Sobre />;
        }
    };

    return <View>{renderPage()}</View>

}

const styles = StyleSheet.create({
    container:{
      height: 800,
      width: 360,
      padding: 30,
      backgroundColor: '#0E131F',
    },
    h2:{
        color: '#F0F8FF',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 70,
    },
    h1:{
        color: '#4169E1',
        fontSize: 36,
        fontWeight: 'bold',
    },
    p:{
        width: 300,
        color: '#F0F8FF',
        fontWeight: 'medium',
        paddingTop: 17,
    },
    span:{
        color: '#4169E1',
        fontWeight: 'semibold',
    },
    image:{
        width: 263,
        height: 205, 
        marginTop: 110,
        marginLeft: 18,
    },
    button:{
        width: 300,
        height: 46,
        marginTop: 162,
        backgroundColor: '#4169E1',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F0F8FF',
    }
});
