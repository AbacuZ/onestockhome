import React from 'react'
import { InputStyle } from './style'

export class Input extends React.Component {
  render() {
    const {
      inputType,
      type,
      onChange,
      value,
      name,
    } = this.props
    switch (inputType) {
      case 'inputText':
        return (
          <React.Fragment>
            <InputStyle>
              <input 
                className='inputText'
                type={type}
                name={name}
                value={value}
                onChange={onChange}
              />
            </InputStyle>
          </React.Fragment>
        )
      default:
        return ''
    }
  }
}
