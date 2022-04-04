import React from 'react'
import * as S from './styles'

interface Prosp {
    label?: string
    type?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'muted50' | 'muted'
    onChange: () => void
    textColor?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'muted50' | 'muted'
}

export const Button = ({
    label,
    type,
    onChange,
    textColor
}: Prosp) => {
    return (
        <S.Container
            type={type}
            onPress={() => onChange()}
        >
            <S.Text color={textColor}>
                {label}
            </S.Text>
        </S.Container>
    )
}
