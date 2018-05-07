
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {history, router} from 'router'

// Get pathname that maps to the route identifier.
const getPathname = router.route.pathname

// Wrap hickory's navigate function for our Link component.
const makeLinkAction = pathname => e => {
  e.preventDefault()
  history.navigate(pathname)
}

function InternalLink ({href, children, ...props}) {
  const pathname = getPathname(href)
  return (<a href={pathname} onClick={makeLinkAction(pathname)} {...props}>{children}</a>)
}

function ExternalLink ({children, ...props}) {
  return (<a {...props}>{children}</a>)
}

function InternalButton ({href, children, ...props}) {
  const pathname = getPathname(href)
  return (<button onClick={makeLinkAction(pathname)} {...props}>{children}</button>)
}

function Link ({external, ...props}) {
  return external ? <ExternalLink {...props} /> : <InternalLink {...props} />
}

export const A = styled(Link)``

export const Button = styled(InternalButton)``

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
