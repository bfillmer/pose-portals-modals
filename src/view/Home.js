
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {H1, P} from 'view/Shared/Typography'
import {A} from 'view/Shared/A'

export function Home () {
  return (
    <Section>
      <H1>Home</H1>
      <P><A href='/about'>About</A></P>
    </Section>
  )
}
