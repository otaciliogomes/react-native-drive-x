import React, { useEffect, useState } from 'react';

import * as S from '../../styles';
import { Button } from '../../shared/Button';
import { PickerButton } from '../../shared/PickerButton';
import { Input } from '../../shared/Input';
import { Keyboard } from 'react-native';

export const Ride = () => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setVisible(false)
        )

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setVisible(false)
        )

        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    }, [])

    return (
        <S.SafeAreaView>
            <S.Container padding={30} justify="flex-start">
                <S.Container align="flex-start" height={40}>
                    <S.Title color="dark" bold size={16}>
                        Cadastre seu veículo
                    </S.Title>
                    <S.Title color="muted" size={12}>
                        preencha os campos a baixo.
                    </S.Title>
                </S.Container>
                <S.Container>
                    <Input 
                        value="fdfd"
                        onChange={() => console.log('')}
                        placeholder="Placa do veículo"
                    />
                    <Input 
                        value="fdfd"
                        onChange={() => console.log('')}
                        placeholder="Marca do veículo"
                    />
                    <Input 
                        value="fdfd"
                        onChange={() => console.log('')}
                        placeholder="Modelo do veículo"
                    />
                    <Input 
                        value="fdfd"
                        onChange={() => console.log('')}
                        placeholder="Cor do veículo"
                    />
                </S.Container>
                {visible && (
                    <S.Container height={70} justify="flex-end">
                        <Button label="Next step" onChange={() => console.log('ok')} />
                    </S.Container>
                )}
            </S.Container>
        </S.SafeAreaView>
    );
};
