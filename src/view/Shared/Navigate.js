
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {history, router} from 'router'

// Wrap hickory's navigate function for our Link component.
const makeLinkAction = pathname => e => {
  e.preventDefault()
  history.navigate(pathname)
}

// Encapsulate shared functionality between the link and button variants.
function makeProps ({external, href, ...props}) {
  if (external) {
    return {
      href,
      ...props
    }
  }

  const pathname = router.route.pathname(href)
  return {
    href: pathname,
    onClick: makeLinkAction(pathname),
    ...props
  }
}

// Usage of the external prop allows for standard a tag behavior. This allows for usage of Link
// component for all linking needs, keeping consistent styling.
function AVariant ({children, ...props}) {
  return (<a {...makeProps(props)}>{children}</a>)
}

function ButtonVariant ({children, ...props}) {
  return (<button {...makeProps(props)}>{children}</button>)
}

// Export as styled components.
export const A = styled(AVariant)``

export const Button = styled(ButtonVariant)``

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool
}

A.defaultProps = {
  external: false
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
