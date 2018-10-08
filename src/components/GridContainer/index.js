import React from 'react'
import { 
    GridContainerStyle,
    GridItemLeftStyle,
    GridItemRightStyle
} from './style'

const GridItemLeft = (props) => {
    const {
      children
    } = props
    return (
      <GridItemLeftStyle>
        {children}
      </GridItemLeftStyle>
    )
}
  
const GridItemRight = (props) => {
    const {
      children
    } = props
    return (
      <GridItemRightStyle>
        {children}
      </GridItemRightStyle>
    )
}

export class GridContainer extends React.Component {
    static ItemLeft = GridItemLeft
    static ItemRight = GridItemRight
    render() {
        const {
            children,
            onClick
        } = this.props
        return (
          <React.Fragment>
              <GridContainerStyle onClick={onClick}>
                  {children}
              </GridContainerStyle>
          </React.Fragment>
        )
    }
}
