import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <Name>
            Akin
        </Name>
        <Other>
            <InputField></InputField>
        </Other>
    </Container>
  )
}

export default Header


const InputField=styled.div``
const Other=styled.div``
const Name=styled.div``
const Container=styled.div`
height: 80px;
width: 100%;
background-color: azure;
color: black;
`