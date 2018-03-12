import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () =>{
    return(
        <View style={styles.headerConatainer}>
            <Text style={styles.header}>Cryptocurrency App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerConatainer: {
        display: 'flex',
        marginTop: 15,
        alignItems: 'center',
    },
    header:{
        fontWeight: 'bold',
        fontSize: 20,
    }

})

export default Header;