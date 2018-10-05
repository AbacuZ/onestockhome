import React from 'react'
import { CardContentStyle } from './style'

export class CardContent extends React.Component {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <CardContentStyle>{children}</CardContentStyle>
      </React.Fragment>
    )
  }
}
