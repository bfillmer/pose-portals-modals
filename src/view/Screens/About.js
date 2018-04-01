
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {Heading, P} from 'view/Shared/Typography'
import {A} from 'view/Shared/A'

export function About () {
  return (
    <Section>
      <Heading>About</Heading>
      <P><A href='/'>Home</A></P>
    </Section>
  )
}
