
import React from 'react'

export const ModalContext = React.createContext({
  shouldMount: false,
  show: false,
  toggle: () => null,
  unmout: () => null
})

export class ModalState extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = () => {
      // Mount our modal into the dom, then trigger our enter animation.
      this.setState({
        shouldMount: !this.state.show ? true : this.state.shouldMount
      }, this.show)
    }

    this.show = () => {
      this.setState({
        show: !this.state.show
      })
    }

    this.unmount = () => {
      if (!this.state.show) {
        this.setState({
          shouldMount: false
        })
      }
    }

    this.state = {
      shouldMount: false,
      show: false,
      toggle: this.toggle,
      unmount: this.unmount
    }
  }

  render () {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}
