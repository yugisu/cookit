import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

const Container = styled.a`
  width: 4.4rem;

  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;

  font-family: 'Rosario', sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 1px 1px 0 ${props => props.theme.colors.secondary};
  color: inherit;

  span {
    width: 0.5rem;

    display: flex;
    justify-content: flex-end;
    padding-right: 0.2rem;

    line-height: 1.5rem;
    background: ${props => lighten(0.2, props.theme.colors.primaryLight)};
    border-radius: 2px;
    transition: width 0.25s;
  }

  &:hover span {
    width: 2rem;
  }

  &:active span,
  &:focus span {
    width: 3rem;
  }
`

export const Logo = () => {
  return (
    <Container href="/">
      <span>Cookit</span>
    </Container>
  )
}

Logo.Container = Container