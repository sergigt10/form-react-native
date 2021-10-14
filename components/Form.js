import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constants';
import {useDateTimePicker, useNuevaCita} from '../hooks';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Form({navigation}) {
    // Definir state
    const [citas, setCitas] = useState([]);
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [sintomas, guardarSintomas] = useState('');

    const {
        fecha,
        hora,
        isDatePickerVisible,
        isTimePickerVisible,
        showDatePicker,
        hideDatePicker,
        showTimePicker,
        hideTimePicker,
        confirmarFecha,
        confirmarHora,
    } = useDateTimePicker();

    const {crearNuevaCita} = useNuevaCita(
        citas,
        paciente,
        propietario,
        telefono,
        fecha,
        hora,
        sintomas,
        setCitas,
        navigation,
    );

    useEffect(() => {
        const obtenerCitasStorage = async () => {
            try {
                const citasStorage = await AsyncStorage.getItem('citas');
                if (citasStorage) {
                    setCitas(JSON.parse(citasStorage));
                }
            } catch (error) {
                console.log(error);
            }
        };
        obtenerCitasStorage();
    }, []);

    return (
        <View style={styles.form}>
            <View>
                <Text style={styles.label}>Paciente</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarPaciente(texto)}
                    selectionColor={COLORS.white}
                />
            </View>
            <View>
                <Text style={styles.label}>Dueño</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarPropietario(texto)}
                    selectionColor={COLORS.white}
                />
            </View>
            <View>
                <Text style={styles.label}>Teléfono</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarTelefono(texto)}
                    keyboardType="numeric"
                    selectionColor={COLORS.white}
                />
            </View>
            <View>
                <Text style={{...styles.label, marginBottom: 15}}>Dia</Text>
                <TouchableOpacity
                    style={styles.buttonPicker}
                    onPress={showDatePicker}>
                    <Text style={styles.textSubmit}>Seleccionar dia</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmarFecha}
                    onCancel={hideDatePicker}
                    locale="es_ES"
                />
                <Text style={{...styles.label, textAlign: 'center'}}>
                    {fecha}
                </Text>
            </View>
            <View>
                <Text style={{...styles.label, marginBottom: 15}}>Hora</Text>
                <TouchableOpacity
                    style={styles.buttonPicker}
                    onPress={showTimePicker}>
                    <Text style={styles.textSubmit}>Seleccionar hora</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmarHora}
                    onCancel={hideTimePicker}
                    locale="es_ES"
                />
                <Text style={{...styles.label, textAlign: 'center'}}>
                    {hora}
                </Text>
            </View>
            <View>
                <Text style={styles.label}>Síntomas</Text>
                <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={texto => guardarSintomas(texto)}
                    selectionColor={COLORS.white}
                />
            </View>
            <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => crearNuevaCita()}>
                <Text style={styles.textSubmit}>Guardar</Text>
            </TouchableOpacity>
            <View style={{marginTop: 15}}>
                <TouchableOpacity
                    style={styles.btnSubmit}
                    onPress={() =>
                        navigation.navigate('citas', {
                            citas: citas,
                        })
                    }>
                    <Text style={styles.textSubmit}>Ver citas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        marginBottom: 30,
        marginHorizontal: 35,
    },
    label: {
        color: COLORS.white,
    },
    input: {
        marginVertical: 14,
        marginBottom: 35,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
    },
    buttonPicker: {
        height: 40,
        backgroundColor: COLORS.black,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },
    btnSubmit: {
        height: 60,
        backgroundColor: COLORS.black,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSubmit: {
        color: COLORS.white,
        textAlign: 'center',
    },
});
