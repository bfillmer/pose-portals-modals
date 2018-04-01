
import styled from 'styled-components'
import {theme} from 'styled-system'

import {Text} from 'view/Shared/Primitives'

export const Heading = styled(Text).attrs({
  is: 'h1'
})`
  color: ${theme('gray.800')};
  margin-bottom: ${theme('space.base')};
`

export const P = styled(Text).attrs({
  is: 'p'
})`
  color: ${theme('gray.800')};
  margin-bottom: ${theme('space.base')};
`
