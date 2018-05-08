
import React from 'react'

import {Overlay} from './Overlay'
import {Backdrop, Container} from './Atoms'
import {ModalContext, ModalState} from './Context'

const makeToggleClick = toggle => e => (e.currentTarget === e.target) && toggle()

// @TODO Probably need posegroup to mount/unmount within overlay.
function Content ({children}) {
  return (
    <ModalContext.Consumer>
      {({show, toggle}) =>
        <Overlay>
          <Backdrop onClick={makeToggleClick(toggle)} pose={show ? 'enter' : 'exit'}>
            <Container pose={show ? 'enter' : 'exit'}>
              {children}
            </Container>
          </Backdrop>
        </Overlay>
      }
    </ModalContext.Consumer>
  )
}

function State ({children}) {
  return (
    <ModalState>
      {children}
    </ModalState>
  )
}

function Toggle ({children}) {
  return (
    <ModalContext.Consumer>
      {({toggle}) => children(toggle)}
    </ModalContext.Consumer>
  )
}

export const Modal = {
  Content,
  State,
  Toggle
}
