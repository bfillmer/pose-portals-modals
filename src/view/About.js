
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {H1, P} from 'view/Shared/Typography'
import {A} from 'view/Shared/A'

export function About () {
  return (
    <Section>
      <H1>About</H1>
      <P><A href='/'>Home</A></P>
    </Section>
  )
}
