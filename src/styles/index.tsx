import styled from 'styled-components/native'
import theme from './theme.json'
interface ContainerProps {
    row?: string,
    justify?: string,
    padding?: number,
    align?: string,
    width?: string,
    height?: number,
    position?: string,
    top?: number
    zIndex?: number
    color?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'muted50' | 'muted'
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ justify }) => justify || 'center'};
    padding: ${({ padding }) => padding ? padding + 'px' : '0px'};
    width: 100%;
    align-items: ${({ align }) => align || 'center'};
    max-width: ${({ width }) => width || '100%'};
    max-height: ${({ height }) => height + 'px' || 'auto'};
    position: ${({ position }) => position || 'relative'};
    top: ${({ top }) => top || 0};
    z-index: ${({ zIndex }) => zIndex || 1};
    background-color: ${({ color }) => color ? theme.colors[color] : 'transparent'};
`

export const Content = styled.View<{
    row?: string,
    justify?: string,
    padding?: string,
    align?: string,
    width?: string,
    height?: string,
    position?: string,
    top?: number,
    zIndex: number
}>`
    flex: 1;
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ justify }) => justify || 'center'};
    padding: ${({ padding }) => padding + 'px' || '0px'};
    width: 100%;
    align-items: ${({ align }) => align || 'center'};
    max-width: ${({ width }) => width || 'center'};
    max-height: ${({ height }) => height + 'px' || 'auto'};
    position: ${({ position }) => position || 'relative'};
    top: ${({ top }) => top || 0};
    z-index: ${({ zIndex }) => zIndex || 1};
`
export const Title = styled.Text<{
    color?: 'primary' | 'light' | 'info' | 'info50' | 'dark' | 'muted50' | 'muted',
    size?: number,
    bold?: boolean,
    opacity?: boolean,
}>`
    font-size: ${({ size }) =>  size || 26}px;
    color: ${({ color }) => color ? theme.colors[color] : '#FFF'};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
    opacity: ${({ opacity }) => opacity ? 0.7 : 1};
`

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
`
