import React from 'react'
import * as S from './styles'

interface Props {
    active: boolean
    label?: string
    sizeLabel?: number
    image?: React.ReactNode
    onChange: () => void
}

export const PickerButton = ({ 
    active = false,
    label, 
    image, 
    sizeLabel,
    onChange 
}: Props) => {
  return (
    <S.Button
        active={active}
        onPress={() => onChange()}
    >
        <S.Text size={sizeLabel}>
            {label}
        </S.Text>
        {image}
    </S.Button>
  )
}
