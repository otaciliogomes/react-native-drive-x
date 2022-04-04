import React, { useState } from 'react';

import * as S from '../../styles';
import { Button } from '../../shared/Button';
import { PickerButton } from '../../shared/PickerButton';
import { Input } from '../../shared/Input';

export const Car = () => {
    const [active, setActive] = useState(false)
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
                <S.Container height={70} justify="flex-end">
                    <Button label="Next step" onChange={() => console.log('ok')} />
                </S.Container>
            </S.Container>
        </S.SafeAreaView>
    );
};
