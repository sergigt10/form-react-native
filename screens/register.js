import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Form, Header} from '../components';
import {COLORS} from '../constants';

import LinearGradient from 'react-native-linear-gradient';

const formulario = ({navigation}) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{flex: 1}}>
            <LinearGradient
                colors={[COLORS.green, COLORS.green2]}
                style={{flex: 1}}>
                <Header />
                <ScrollView keyboardShouldPersistTaps={'handled'}>
                    <Form navigation={navigation} />
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default formulario;
