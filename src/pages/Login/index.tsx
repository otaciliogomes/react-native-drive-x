import React from "react"
import { Text, SafeAreaView, Image, Dimensions } from 'react-native'
import { Button } from '../../shared'
import * as S from '../../styles'
import Car from '../../assets/car-login.jpg'

const Login = () => {
    const { height } = Dimensions.get('window')
    return (
        <S.Container color="info50" justify="flex-end">
            <S.Container
                justify="space-around"
                padding={30}
                position="absolute"
                height={270}
                zIndex={9}
            >
                <S.Title>Drivex</S.Title>
                <Button 
                    label="Fazer login com Facebook"
                    onChange={() => console.log('ok')}
                    type="info"
                    textColor="light"
                />
                <Button 
                    label="Fazer login com Google"
                    type="light"
                    onChange={() => console.log('ok')}
                />
            </S.Container>
            <Image source={Car} style={{ width: '100%', height }} />
        </S.Container>
    )
}

export default Login