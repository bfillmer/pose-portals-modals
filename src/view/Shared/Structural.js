
import styled from 'styled-components'

import {Flex} from 'view/Shared/Primitives'

// GLOBAL WRAPPER
export const Application = styled(Flex).attrs({
  is: 'main'
})`
  height: 100vh;
`

// PRIMARY CONTENT AREA
export const Section = styled(Flex).attrs({
  is: 'section'
})`
  width: 33rem;
  margin: 0 auto;
`
