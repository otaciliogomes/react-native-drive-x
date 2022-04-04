import styled from 'styled-components/native'
import theme from '../../styles/theme.json'

export const Container = styled.TouchableOpacity<{
    compact?: boolean,
    disable?: boolean,
    type?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'muted50' | 'muted',
}>`
    width: 100%;
    padding: ${({compact}) => compact ? 5 : 15}px;
    opacity: ${({disable}) => disable ? 0.5 : 1};
    background-color: ${({type}) => type ? theme.colors[type] : theme.colors.primary};
`
export const Text = styled.Text<{
    color?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'muted50' | 'muted',
}>`
    text-align: center;
    color: ${({color}) => color ? theme.colors[color] : '#000'}
`
