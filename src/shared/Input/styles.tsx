import styled from 'styled-components/native'
import theme from '../../styles/theme.json'

export const Button = styled.TouchableOpacity<{
    active: boolean
}>`
    width: 100%;
    height: 40%;
    margin-top: 2.5%;
    border-width: 3px;
    border-style: solid;
    justify-content: space-around;
    align-items: center;
    border-color: ${({active}) => active ? theme.colors.primary : theme.colors.muted50};
    background-color: ${({active}) => active ? theme.colors.primary + '80' : theme.colors.muted50};
`

export const Text = styled.Text<{
    size?: number,
}>`
    font-size: ${({size}) => size ? size : 12}px;
`

export const TextInput = styled.TextInput`
    background-color: ${theme.colors.light};
    border: 1px solid ${theme.colors.muted};
    width: 100%;
    padding: 7px 15px;
`