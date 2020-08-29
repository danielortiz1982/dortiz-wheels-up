import React, {Component} from 'react'
import './header.sass'


class Header extends Component{
    render(){
        return (
            <div className="header-content">
                <header className="header">
                    <div className="logo">
                        <img src={this.props.logo} />
                    </div>
                </header>
            </div>
        )
    }
}

export default Header