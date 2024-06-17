import React from "react";
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Sobre from './sobre';
import Image from ''

export default function HomeScreen() {
    const[page, setPage] = React.useState('home');

    const renderPage = () => {
        if(page === 'home') {
            return(
                <View style={styles.container}>
                    <Text >Descubra a sua</Text>
                    <Text >Localização</Text>
                    <Text >Acesse qualquer localização em qualquer lugar em <Text>tempo real!</Text></Text>
                    <Image source={} />
                    <TouchableOpacity  onPress={() => setPage('sobre')}>
                            <Text >Clique Aqui</Text>
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
      flex: 1,
      
    },
});
