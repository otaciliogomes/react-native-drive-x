import React from 'react'
import * as S from './styles'

interface Prosp {
    value: string
    onChange: () => void
    placeholder?: string
    
}

export const Input = ({
    value,
    onChange,
    placeholder
}: Prosp) => {
    return (
        <S.TextInput
            value={value}
            onTextInput={onChange}
            placeholder={placeholder}
        />
    )
}
