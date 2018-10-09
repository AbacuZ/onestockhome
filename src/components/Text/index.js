import React from 'react'
import { 
    TextStyle,
    TextLinkStyle
} from './style'

const TextLink = (props) => {
    const {
      children
    } = props
    return (
      <TextLinkStyle>
        {children}
      </TextLinkStyle>
    )
}

export class Text extends React.Component {
    static Link = TextLink
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
