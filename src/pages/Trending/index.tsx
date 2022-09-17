import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 100px;
`
const Title = styled.h1`
  font-size: 28px;
  color: #282842;
`

const Trending = () => {
  return (
    <Container>
      <Title>Artigos em alta</Title>
    </Container>
  )
}

export default Trending
