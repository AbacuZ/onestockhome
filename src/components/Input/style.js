import styled from 'styled-components'

export const InputStyle = styled.div`
    input[type=date]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }

    .inputText {
        outline: none;
        border: 0;
        width: 80%;
        font-size: 16px;
        line-height: 30px;
        padding: 0px 10px;
        margin: 20px;
        border: 1px solid rgba(74, 74, 74, 1);
        border-radius: 30px;
    }
`