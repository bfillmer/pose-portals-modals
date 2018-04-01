
import styled from 'styled-components'
import tag from 'clean-tag'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  space,
  flex,
  alignSelf,
  color,
  width,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
} from 'styled-system'

/**
 * STYLED SYSTEM PRIMITIVES
 * Although we prefer to define large pieces of our application's view using standard
 * styled-component definitions it can be useful to handle inline adjustments on a
 * case-by-case basis using props. This cuts down on un-wanted clutter from extending a component
 * simply to add a margin or the like. All components should be based off these primitives, thus
 * allowing for the overrides to be usable.
 *
 * is prop
 * The is prop allows for inline overrides as to what underlying html tag should be used at render
 * time. This can be useful when using a specific visual component in multiple ways throughout the
 * application.
 */

// General flex primitive for structural items.
export const Flex = styled(tag).attrs({
  is: props => props.is || 'div'
})`
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${flex}
  ${alignSelf}
`

// General box for visual items.
export const Box = styled(tag).attrs({
  is: props => props.is || 'div'
})`
  ${space}
  ${color}
  ${width}
  ${borderRadius}
  ${borderColor}
  ${borderWidth}
  ${boxShadow}
`

// General text item.
export const Text = styled(tag).attrs({
  is: props => props.is || 'p'
})`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
`
