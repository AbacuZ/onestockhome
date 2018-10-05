import styled from 'styled-components'

export const InputStyle = styled.div`
    input[type=date]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }

    .inputText {
        outline: none;
        width: 100%;
        border: 0;
        font-size: 16px;
        line-height: 28px;
        border: 1px solid rgba(74, 74, 74, 1);
        border-radius: 30px;
    }
`