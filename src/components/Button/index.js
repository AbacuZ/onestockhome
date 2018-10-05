import React from 'react'
import {
  ButtonStyle,
  ButtonDivStyle
} from './style'

export class Button extends React.Component {
  render() {
    const {
      color,
      size,
      children,
      fullWidth,
      onClick,
      disabled,
      font
    } = this.props
    return (
      <ButtonDivStyle>
        <ButtonStyle
          className={`
            ${color} 
            ${size} 
            ${font}
            ${fullWidth ? 'full-width' : ''} 
            ${disabled ? 'disabled' : ''}
          `}
          onClick={onClick}
        >
          {children}
        </ButtonStyle>
      </ButtonDivStyle>
    )
  }
}
