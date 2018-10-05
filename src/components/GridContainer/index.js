import React from 'react'
import { 
    GridContainerStyle,
    GridItemLeftStyle,
    GridItemRightStyle,
    GridItemDetailStyle
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

const GridItemDetail = (props) => {
    const {
      children
    } = props
    return (
      <GridItemDetailStyle>
        {children}
      </GridItemDetailStyle>
    )
}

export class GridContainer extends React.Component {
    static ItemLeft = GridItemLeft
    static ItemRight = GridItemRight
    static Detail = GridItemDetail
    render() {
        const {
            children
        } = this.props
        return (
          <React.Fragment>
              <GridContainerStyle>
                  {children}
              </GridContainerStyle>
          </React.Fragment>
        )
    }
}
