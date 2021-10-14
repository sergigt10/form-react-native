import {useState} from 'react';

const useDateTimePicker = () => {
    const [fecha, guardarFecha] = useState('');
    const [hora, guardarHora] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const confirmarFecha = date => {
        const opciones = {year: 'numeric', month: 'long', day: 'numeric'};
        guardarFecha(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    };

    const confirmarHora = hora => {
        const opciones = {hour: '2-digit', minute: '2-digit', hour12: false};
        guardarHora(hora.toLocaleTimeString('es-ES', opciones));
        hideTimePicker();
    };

    return {
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
    };
};

export default useDateTimePicker;
