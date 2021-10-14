import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = () => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                marginTop: insets.top + 20,
                marginBottom: 70,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('IniciScreen')}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 301,
        height: 51,
    },
});

export default Header;
