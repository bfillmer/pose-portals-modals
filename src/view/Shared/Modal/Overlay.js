
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * OVERLAY
 * Leverage portal feature to allow us to mount a shaded overlay to above everything else
 * in the application. This allows us to use <Overlay> as a normal component elsewhere,
 * complete with access to parent methods and such, but have the children actually render
 * within the overlay on top of the application proper.
 *
 * To have the overlay appear and disappear dynamically have it's children either be a component
 * or null.
 */

const overlayRoot = document.getElementById('overlay-root')

export class Overlay extends React.Component {
  constructor (props) {
    super(props)
    this.element = document.createElement('div')
  }

  componentDidMount () {
    overlayRoot.appendChild(this.element)
  }

  componentWillUnmount () {
    overlayRoot.removeChild(this.element)
  }

  render () {
    return !this.props.children
      ? null
      : ReactDOM.createPortal(this.props.children, this.element)
  }
}
