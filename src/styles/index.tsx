import styled from 'styled-components/native'

interface ContainerProps { 
    row?: string,
    justify?: string,
    padding?: string,
    align?: string,
    width?: string,
    height?: string,
    position?: string,
    top?: number,
    zIndex?: number
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    flex-direction: ${(row) => (props.row ? 'row' : 'column')};
    justify-content: ${(props) => props.justify || 'center'};
    padding: ${(props) => props.padding || '0px'};
    width: 100%;
    align-items: ${(props) => props.align || 'center'};
    max-width: ${(props) => props.width || 'center'};
    max-height: ${(props) => props.height + 'px' || 'auto'};
    position: ${(props) => props.position || 'relative'};
    top: ${(props) => props.top || 0};
    z-index: ${(props) => props.zIndex || 1};
`

export const Content = styled.view<{ 
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
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: ${(props) => props.justify || 'center'};
    padding: ${(props) => props.padding || '0px'};
    width: 100%;
    align-items: ${(props) => props.align || 'center'};
    max-width: ${(props) => props.width || 'center'};
    max-height: ${(props) => props.height + 'px' || 'auto'};
    position: ${(props) => props.position || 'relative'};
    top: ${(props) => props.top || 0};
    z-index: ${(props) => props.zIndex || 1};
`