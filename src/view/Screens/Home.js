
import React from 'react'

import {Modal} from 'view/Shared/Modal'

import {Section} from 'view/Shared/Structural'
import {Heading, P} from 'view/Shared/Typography'

export function Home () {
  return (
    <Section>
      <Heading>Home</Heading>
      <Modal.State>
        <Modal.Toggle>
          {(toggle) => <button onClick={toggle}>Show Modal</button>}
        </Modal.Toggle>
        <Modal.Content>
          <Heading>Modal Title</Heading>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec malesuada dui. Fusce vitae velit eu nunc sodales consectetur. Sed eget eros hendrerit, congue velit non, blandit elit. Aliquam eu tellus purus. Quisque elementum nunc in tempor placerat. Nulla facilisi. Donec et gravida lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus maximus at urna eget varius. Duis sodales nunc ut massa vulputate accumsan.</P>
        </Modal.Content>
      </Modal.State>
    </Section>
  )
}
