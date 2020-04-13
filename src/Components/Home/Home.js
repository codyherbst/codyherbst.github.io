import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <script src="https://kit.fontawesome.com/74b0f32803.js" crossorigin="anonymous"></script>
        </head>
        <div 
          className="d-flex w-100 h-100 p-3 mx-auto flex-column"
          style={{width: '100%'}}
        >
          {/* <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">Welcome</h3>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active">Home</a>
              <a className="nav-link" >About</a>
              <a className="nav-link">Blog</a>
              <a className="nav-link">Projects</a>
            </nav>
          </div>
        </header> */}

          <main role="main" className="inner cover">
            <h1 className="cover-heading">My Bootcamp Website</h1>
            <p className="lead">This is a website designed by Cody Herbst during the Awesome Inc Bootcamp. I hope you enjoy!</p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Created by Cody Herbst - 2020</p>
              <a class="pl-5" href="https://github.com/codyherbst" target="_blank" title="Github"><i class="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/cody-herbst-365146162/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>

            </div>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Home