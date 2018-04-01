
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {Heading, P} from 'view/Shared/Typography'
import {A} from 'view/Shared/A'

export function Home () {
  return (
    <Section>
      <Heading>Home</Heading>
      <P><A href='/about'>About</A></P>
    </Section>
  )
}
