import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Cita, Header} from '../components';
import {COLORS} from '../constants';

import LinearGradient from 'react-native-linear-gradient';

const citas = ({route}) => {
    const {citas} = route.params;
    return (
        <LinearGradient
            colors={[COLORS.green, COLORS.green2]}
            style={{flex: 1}}>
            <View>
                <Header />
                <Text>{citas.length > 0 ? '' : 'No hay citas'}</Text>
                <FlatList
                    style={{marginBottom: 130}}
                    data={citas}
                    renderItem={({item}) => <Cita cita={item} />}
                    keyExtractor={cita => cita.id}
                />
            </View>
        </LinearGradient>
    );
};

export default citas;
