import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants';

export default function Cita({cita}) {
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente</Text>
                <Text style={styles.texto}>{cita.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario</Text>
                <Text style={styles.texto}>{cita.propietario}</Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas</Text>
                <Text style={styles.texto}>{cita.sintomas}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: COLORS.white,
        borderStyle: 'solid',
        paddingVertical: 24,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        marginBottom: 30,
    },
    label: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: 18,
    },
    texto: {fontSize: 18, color: COLORS.black},
});
