import React from 'react'
import { CardStyle } from './style'

export class Card extends React.Component {
  render() {
    const { id, children } = this.props
    return (
      <React.Fragment>
        <CardStyle id={id}>{children}</CardStyle>
      </React.Fragment>
    )
  }
}
