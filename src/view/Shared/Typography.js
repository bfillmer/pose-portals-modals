
import styled from 'styled-components'

import {getTheme} from 'view/theme'

export const H1 = styled.h1`
  color: ${getTheme('gray', '800')};
  margin-bottom: ${getTheme('space', 'base')};
`

export const P = styled.p`
  color: ${getTheme('gray', '800')};
  margin-bottom: ${getTheme('space', 'base')};
`
