import styled from 'styled-components'

export const NavStyle = styled.div`
    display: flex;
    border-bottom: 1px solid #d1d5da;
`

export const NavmenuStyle = styled.a`
    padding: 15px 20px;
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid #d1d5da;
    }
    &.active {
        font-weight: bold;
        border-bottom: 1px solid #e36209;
    }
    &.normal {
        border-bottom-color: none;
    }
`

export const NavcountStyle = styled.div`
    display: inline-block;
    padding: 2px 5px;
    font-size: 12px;
    font-weight: normal;
    color: #586069;
    background-color: rgba(27,31,35,0.08);
    border-radius: 20px;
`