
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Text} from 'view/Shared/Primitives'

import {history, router} from 'router'

// Wrap hickory's navigate function for our Link component.
const makeLinkAction = pathname => e => {
  e.preventDefault()
  history.navigate(pathname)
}

// Usage of the external prop allows for standard a tag behavior. This allows for usage of Link
// component for all linking needs, keeping consistent styling.
function Link ({children, external, href, ...props}) {
  if (external) {
    return (<Text is='a' href={href} {...props}>{children}</Text>)
  }
  const pathname = router.addons.pathname(href)
  return (<Text is='a' href={pathname} onClick={makeLinkAction(pathname)} {...props}>{children}</Text>)
}

// Export as a styled component for ease of use with the .extend method.
export const A = styled(Link)``

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool
}
