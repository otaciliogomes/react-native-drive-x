import React, { useState } from 'react';

import * as S from '../../styles';
import { Button } from '../../shared/Button';
import { PickerButton } from '../../shared/PickerButton';

export const Types = () => {
    const [active, setActive] = useState(false)
    return (
        <S.SafeAreaView>
            <S.Container padding={30} justify="flex-start">
                <S.Container align="flex-start" height={40}>
                    <S.Title color="dark" bold size={16}>
                        Passageiro ou Motorista
                    </S.Title>
                    <S.Title color="muted" size={12}>
                        Selecione qual será a sua opção de motorista
                    </S.Title>
                </S.Container>
                <S.Container>
                    <PickerButton
                        label='Motorista'
                        active={active}
                        onChange={() => setActive(!active)}
                    />
                    <PickerButton
                        label='Passageiro'
                        active={!active}
                        onChange={() => setActive(!active)}
                    />
                </S.Container>
                <S.Container height={70} justify="flex-end">
                    <Button label="Next step" onChange={() => console.log('ok')} />
                </S.Container>
            </S.Container>
        </S.SafeAreaView>
    );
};
