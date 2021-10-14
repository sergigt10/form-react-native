import alert from '../helpers/alert';

import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';

const useNuevaCita = (
    citas,
    paciente,
    propietario,
    telefono,
    sintomas,
    fecha,
    hora,
    setCitas,
    navigation,
) => {
    // Alerta campos obligatorios
    const {mostrarAlerta} = alert();

    // Almacenar las citas en storage
    const guardarCitasStorage = async citasJSON => {
        try {
            await AsyncStorage.setItem('citas', citasJSON);
        } catch (error) {
            console.log(error);
        }
    };

    // Crear nueva cita
    const crearNuevaCita = async () => {
        // Validar
        if (
            paciente.trim() === '' ||
            propietario.trim() === '' ||
            telefono.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''
        ) {
            // Falla la validación
            mostrarAlerta();
            return;
        }

        // Crear una nueva cita
        const cita = {paciente, propietario, telefono, fecha, hora, sintomas};

        cita.id = shortid.generate();

        // Agregar al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);

        // Pasar las nuevas citas a storage
        await guardarCitasStorage(JSON.stringify(citasNuevo));

        try {
            const citasStorage = await AsyncStorage.getItem('citas');
            if (citasStorage) {
                navigation.navigate('citas', {
                    citas: JSON.parse(citasStorage),
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {
        crearNuevaCita,
    };
};

export default useNuevaCita;
