import React from 'react'
import styled from 'styled-components'
import Imgslider from './Imgslider'
import Viewers from './Viewers'

function Home() {
  return (
    <Container>
      <Imgslider/>
      <Viewers/>
    </Container>
  )
}

export default Home

const Container=styled.main`
min-height: calc(100vh-70px);
padding:o calc(3.5vw+ 5px) ;

`