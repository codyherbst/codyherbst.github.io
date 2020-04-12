import React, { Component } from 'react'
import { Container } from 'reactstrap'
import blogPosts from '../blogposts.json'

class Blog extends Component {
    render() {
        return (
            <Container fluid className='mx-auto'>
                {blogPosts.map(item => (
                    <Container className='bg-dark'>
                        <h2>{item.Title}</h2>
                        {console.log(item)}
                        {item.BlogPosts.map(jtem => (
                            <React.Fragment>
                                <h3>{jtem.Subhead}</h3>
                                {jtem.Paragraphs.map(ktem => (
                                    <p>{ktem}</p>
                                ))}
                            </React.Fragment>
                        ))}
                    </Container>
                ))}
            </Container>
        )
    }
}

export default Blog