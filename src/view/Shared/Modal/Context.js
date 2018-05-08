
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
        show: !this.state.show
      })
    }

    this.state = {
      show: false,
      toggle: this.toggle
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
