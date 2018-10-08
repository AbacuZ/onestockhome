import React from 'react'
import { TextStyle } from './style'

export class Text extends React.Component {
  render() {
    const { 
        children 
    } = this.props
    return (
      <React.Fragment>
          <TextStyle>
              {children}
          </TextStyle>
      </React.Fragment>
    )
  }
}
