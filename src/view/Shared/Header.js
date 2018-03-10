
import React from 'react'
import styled from 'styled-components'

import {Logo} from 'view/Shared/Logo'

function ComposeHeader ({className}) {
  return (
    <header className={className}>
      <Logo />
    </header>
  )
}

export const Header = styled(ComposeHeader)`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`
