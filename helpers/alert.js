import {Alert} from 'react-native';

const alert = () => {
    const mostrarAlerta = () => {
        Alert.alert('Error', 'Todos los campos son obligatorios', [
            {
                text: 'OK',
            },
        ]);
    };
    return {
        mostrarAlerta,
    };
};

export default alert;
