import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.navbarLinks = [
            'Home',
            'Blog',
            'Projects',
            'About'
        ]
    }
    
    render() {
        return (
            <header className="masthead pb-5">
                <div className="inner">
                    <h3 className="masthead-brand">Welcome</h3>
                    <nav className="nav nav-masthead justify-content-center">
                        {this.navbarLinks.map((link, i) => (
                            <React.Fragment key={i}>
                                <a
                                    onClick={() => this.props.updatePage(link)}
                                    href='#'
                                    className={this.props.currentPage === link ? 'nav-link active' : 'nav-link'}
                                >
                                    {link}
                                </a>
                            </React.Fragment>
                        ))}
                        {/* <a className="nav-link active">Home</a>
                        <a className="nav-link">Blog</a>
                        <a className="nav-link">Projects</a>
                        <a className="nav-link">About</a> */}
                    </nav>
                </div>
            </header>
        )
    }
}
