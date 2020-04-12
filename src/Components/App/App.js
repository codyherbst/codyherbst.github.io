import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from '../Home/Home'
import Blog from '../Blog'
import Projects from '../Projects'
import About from '../About'
import Navbar from '../Navbar'
import { Container } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'Home'
    }
  }

  render() {
    return (
      <Container fluid className='App'>
        <Navbar
          currentPage={this.state.currentPage}
          updatePage={this.updatePage.bind(this)}
        />

        {
          this.state.currentPage === 'Home' ?
            <Home /> :
            this.state.currentPage === 'Blog' ?
              <Blog /> :
              this.state.currentPage === 'Projects' ?
                <Projects /> :
                <About />
        }
      </Container>
    );
  }

  updatePage(newPage) {
    this.setState({
      currentPage: newPage
    })
  }
}

export default App;
