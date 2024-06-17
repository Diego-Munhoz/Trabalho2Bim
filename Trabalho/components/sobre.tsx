import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './home';


export default function HomeScreen() {
    const[page, setPage] = React.useState('sobre');

    const renderPage = () => {
        if(page === 'sobre') {
            return(
                <View style={styles.container}>
                    <Text >Página Sobre</Text>
                    <TouchableOpacity  onPress={() => setPage('home')}>
                            <Text >Clique Aqui</Text>
                    </TouchableOpacity>
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
      flex: 1,
      
    },
});