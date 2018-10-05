import styled from 'styled-components'

export const ButtonDivStyle = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`

export const ButtonStyle = styled.button`
  /* Parent styles
  ------------------------------- */
  display: inline-flex;
  flex-shrink: 0;
  flex-grow: 1;
  display: -ms-inline-flexbox;
  position: relative;
  vertical-align: middle;
  width: 100%;
  height: 61px;
  border: 0;
  outline: none;
  margin: 15px;
  z-index: 1;
  line-height: 1.5;
  white-space: nowrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
  border-radius: 31px;
  box-sizing: border-box;
  &:hover {
    filter: brightness(1.05);
  }

  

  /* Child styles
  ------------------------------- */
  // Color Variants
  &.primary {
    margin-top: ${props => props.mgTop};
    color: #fff;
    background: -webkit-linear-gradient(
      -270deg,
      rgba(193, 218, 0, 1) 0%,
      rgba(103, 165, 37, 1) 100%
    );
    background: -moz-linear-gradient(
      -270deg,
      rgba(193, 218, 0, 1) 0%,
      rgba(103, 165, 37, 1) 100%
    );
    background: -o-linear-gradient(
      -270deg,
      rgba(193, 218, 0, 1) 0%,
      rgba(103, 165, 37, 1) 100%
    );
    background: linear-gradient(
      -270deg,
      rgba(193, 218, 0, 1) 0%,
      rgba(103, 165, 37, 1) 100%
    );
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
  }

  &.danger {
    color: #fff;
    background-color: rgba(216, 73, 39, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
  }

  &.secondary {
    color: #fff;
    background-color: #8b8b9c;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
  }

  &.success {
    color: #fff;
    background-color: rgba(103, 165, 37, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
  }

  &.lightgrey {
    border-radius: 12px;
    background: linear-gradient(to bottom, #eeeeee, #d8d8d8);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }

  &.lightblue {
    color: #fff;
    background-color: rgba(74, 144, 226, 1);
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.active {
    background-color: #67a525;
    color: #fff;
  }

  &.normal {
    color: #000;
    background-color: #d2d2d2;
    border: 0.1px solid #b2b1b1;
  }

  &.white {
    color: rgba(110, 169, 34, 1);
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.31);
  }

  // Size Variants
  &.sm {
    width: 97px;
    height: 39px;
  }

  &.md {
    width: 127px;
    height: 39px;
  }

  &.lg {
    font-size: 18px;
    width: 169px;
    height: 51px;
  }

  &.fixWidth {
    height: 38px;
    width: 191px;
  }

  // Width Variants
  &.full-width {
    font-size: 25px;
    width: 100%;
    padding: 0 9px;
    margin: 10px;
  }

  &.font-small {
    font-size: 15px;
  }

  /* media screen
  ----------------------*/
  @media all and (max-width: 768px) {
    -webkit-flex-flow: column;
    flex-flow: column;
    padding: 0;
   
  }
  @media only screen and (max-width: 414px) {
    -webkit-flex-flow: column;
    flex-flow: column;
    
  }
  
`
export const CircleButton = styled.button`
  display: inline-flex;
  display: -ms-inline-flexbox;
  flex-direction: column;
  position: relative;
  color: #000;
  height: 55px;
  width: 55px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  border: 0;
  outline: none;
  z-index: 1;
  line-height: 1.5;
  vertical-align: middle;
  white-space: nowrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 25px;
  &:hover {
    filter: brightness(1.05);
  }
`
