import React from 'react'
import Child from './Child'
import { Container } from './styles/Container.styled'

export default function Parent() {
  return (
    <Container>
      <h3> This is from parent component.</h3>
      <Child>
       <p style={{ backgroundColor: "white", padding: "10px" }}>
         This Paragraph will show up in the child component, but sent from the parent.</p> 
       </Child>
    </Container>
    
  )
}
