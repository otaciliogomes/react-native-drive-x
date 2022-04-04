import React, { useState } from 'react';
import { CreditCardInput } from "react-native-credit-card-input";

import * as S from '../../styles';
import { Button } from '../../shared/Button';
import { PickerButton } from '../../shared/PickerButton';

export const Payment = () => {
    const [active, setActive] = useState(false)
    return (
        <S.SafeAreaView>
            <S.Container padding={30} justify="flex-start">
                <S.Container align="flex-start" height={40}>
                    <S.Title color="dark" bold size={16}>
                        Escolha como pagar
                    </S.Title>
                    <S.Title color="muted" size={12}>
                        Preencha os dados do cartãode credito
                    </S.Title>
                </S.Container>
                <CreditCardInput requiresName />
                <S.Container height={70} justify="flex-end">
                    <Button label="Next step" onChange={() => console.log('ok')} />
                </S.Container>
            </S.Container>
        </S.SafeAreaView>
    );
};
