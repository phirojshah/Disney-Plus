import React from 'react'
import styled from 'styled-components'
import Imgslider from './Imgslider'

function Home() {
  return (
    <Container>
      <Imgslider/>
    </Container>
  )
}

export default Home

const Container=styled.main`
min-height: calc(100vh-70px);
padding:o calc(3.5vw+ 5px) ;

`