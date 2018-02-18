
import React from 'react'
import styled from 'styled-components'

import {history} from 'router'

// Wrap hickory's navigate function for our Link component.
const makeLinkAction = href => e => {
  e.preventDefault()
  history.navigate(href)
}

// Usage of the external prop allows for standard a tag behavior. This allows for usage of Link
// component for all linking needs, keeping consistent styling.
const A = ({children, external, href, ...additionalProps}) => external
  ? (<a href={href} {...additionalProps}>{children}</a>)
  : (<a href={href} onClick={makeLinkAction(href)} {...additionalProps}>{children}</a>)

// Export as a styled component for ease of use with the .extend method.
export const Link = styled(A)``
