
import React from 'react'

export const ModalContext = React.createContext({
  show: false,
  toggle: () => null
})

export class ModalState extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = () => {
      this.setState({
        mount: !this.state.show ? true : this.state.mount,
        show: !this.state.show
      })
    }

    this.unmount = () => {
      if (!this.state.show) {
        this.setState({
          mount: false
        })
      }
    }

    this.state = {
      mount: false,
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
