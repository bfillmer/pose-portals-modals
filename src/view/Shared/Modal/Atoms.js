
import styled from 'styled-components'
import posed from 'react-pose'
import spring from 'popmotion/animations/spring'

const BaseBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
`

const BaseContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 2rem;
  background-color: white;
`

export const Backdrop = posed(BaseBackdrop)({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
})

export const Container = posed(BaseContainer)({
  enter: {
    delay: 250,
    x: '-50%',
    y: '-50%',
    transition: (props) => spring({duration: 1000, ...props})
  },
  exit: {
    x: '-50%',
    y: '-300%'
  }
})
