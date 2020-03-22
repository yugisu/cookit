import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem 4rem;
`

type Props = {
  children?: React.ReactNode
}

export const Body = ({ children }: Props) => {
  return <Container>{children}</Container>
}

Body.Container = Container