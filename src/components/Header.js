import React from 'react'

import Footer from './Footer'
import Avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner" align="right">
                    <div class="image-cropper"> <img src={Avatar}/></div>
                    <h1><strong>I'm Abby Krishnan</strong></h1>
                    <h3><i>CS '21 at UT Austin </i></h3>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
