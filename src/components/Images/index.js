import React from 'react'
import { ImageStyle } from './style'

export class Images extends React.Component {
  render() {
    const { source, alt, className } = this.props
    return (
      <React.Fragment>
        <ImageStyle
          className={className}
          src={source}
          alt={alt}
        />
      </React.Fragment>
    )
  }
}
