import React from 'react'
import { 
    NavStyle,
    NavmenuStyle,
    NavcountStyle
} from './style'

const Navmenu = (props) => {
    const {
        children,
        onClick,
        className
    } = props
    return (
        <NavmenuStyle 
            className={className}
            onClick={onClick}
        >
            {children}
        </NavmenuStyle>
    )
}

const Navcount = (props) => {
    const {
        children
    } = props
    return (
        <NavcountStyle>
            {children}
        </NavcountStyle>
    )
}

export class Nav extends React.Component {
    static Menu = Navmenu
    static Count = Navcount
    render() {
        const { 
            children 
        } = this.props
        return (
        <React.Fragment>
            <NavStyle>
                {children}
            </NavStyle>
        </React.Fragment>
        )
    }
}
